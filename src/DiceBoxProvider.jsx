import { useState, useEffect, useRef, useCallback } from 'react';
import { DiceBoxContext } from './DiceBoxContext';

export const DiceBoxProvider = ({ children }) => {
  const [diceColor, setDiceColor] = useState(
    localStorage.getItem('diceColor') || '#fb2c36'
  );
  const [disableThreeJS, setDisableThreeJS] = useState(false);
  const [isRolling, setIsRolling] = useState(false);
  const [lastRoll, setLastRoll] = useState(null);
  const diceBoxRef = useRef(null);
  const containerRef = useRef(null);
  const resizeHandlerRef = useRef(null);

  // Calculate responsive dice scale based on viewport width
  const getDiceScale = useCallback(() => {
    const width = window.innerWidth;
    if (width < 640) {
      // Mobile: smaller scale
      return 3;
    } else if (width < 1024) {
      // Tablet: medium scale
      return 4;
    } else {
      // Desktop: full scale
      return 5;
    }
  }, []);

  // Initialize DiceBox
  useEffect(() => {
    if (disableThreeJS) return;

    const initDiceBox = async () => {
      try {
        // Wait for container to be in DOM
        const containerElement = document.getElementById('dice-container');
        if (!containerElement) {
          setTimeout(initDiceBox, 100);
          return;
        }

        // Check WebGL support
        const testCanvas = document.createElement('canvas');
        const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
        if (!gl) {
          console.error('WebGL is not supported');
          setDisableThreeJS(true);
          return;
        }

        // Check container dimensions
        const rect = containerElement.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) {
          setTimeout(initDiceBox, 100);
          return;
        }

        // Dynamic import
        const DiceBoxModule = await import('@3d-dice/dice-box');
        const DiceBox = DiceBoxModule.default || DiceBoxModule;
        
        // Calculate initial scale based on viewport
        const initialScale = getDiceScale();
        
        // Create DiceBox instance - use 'container' option per documentation
        const diceBox = new DiceBox({
          container: '#dice-container',
          assetPath: '/assets/dice-box/',
          theme: 'default',
          themeColor: diceColor,
          offscreen: false,
          scale: initialScale,
        });

        // Initialize
        await diceBox.init();
        diceBoxRef.current = diceBox;

        // Ensure canvas fills the entire viewport
        const canvas = diceBox.canvas;
        if (canvas) {
          // Ensure canvas is in the container
          if (!containerElement.contains(canvas)) {
            containerElement.appendChild(canvas);
          }
          
          // Style canvas to fill entire viewport
          canvas.style.position = 'absolute';
          canvas.style.top = '0';
          canvas.style.left = '0';
          canvas.style.width = '100%';
          canvas.style.height = '100%';
          canvas.style.display = 'block';
          
          // Set canvas dimensions to match container and update scale
          const updateCanvasSize = () => {
            // Use window.innerWidth/innerHeight for better mobile viewport handling
            const width = window.innerWidth;
            const height = window.innerHeight;
            
            canvas.width = width;
            canvas.height = height;
            
            // Update dice scale based on new viewport size
            const newScale = getDiceScale();
            if (diceBoxRef.current && diceBoxRef.current.updateConfig) {
              diceBoxRef.current.updateConfig({ scale: newScale });
            }
          };
          
          updateCanvasSize();
          
          // Update on resize with debounce for performance
          let resizeTimeout;
          resizeHandlerRef.current = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(updateCanvasSize, 150);
          };
          window.addEventListener('resize', resizeHandlerRef.current);
          // Also listen for orientation changes on mobile
          window.addEventListener('orientationchange', resizeHandlerRef.current);
          
          console.log('Canvas successfully configured for full viewport');
        } else {
          console.warn('DiceBox canvas property is null');
        }

        // Listen for roll complete
        diceBox.onRollComplete = (results) => {
          setIsRolling(false);
          const total = results.reduce((sum, die) => sum + die.value, 0);
          setLastRoll({ results, total, timestamp: Date.now() });
        };
      } catch (error) {
        console.error('Failed to initialize DiceBox:', error);
        setDisableThreeJS(true);
      }
    };

    const timer = setTimeout(initDiceBox, 100);

    return () => {
      clearTimeout(timer);
      if (resizeHandlerRef.current) {
        window.removeEventListener('resize', resizeHandlerRef.current);
        window.removeEventListener('orientationchange', resizeHandlerRef.current);
        resizeHandlerRef.current = null;
      }
      if (diceBoxRef.current) {
        diceBoxRef.current.destroy?.();
        diceBoxRef.current = null;
      }
    };
  }, [disableThreeJS, diceColor, getDiceScale]);

  // Update dice color when it changes
  useEffect(() => {
    if (diceBoxRef.current && diceColor) {
      diceBoxRef.current.updateConfig?.({ themeColor: diceColor });
      localStorage.setItem('diceColor', diceColor);
    }
  }, [diceColor]);

  // Simplified roll dice function
  const rollDice = useCallback((notation) => {
    if (!diceBoxRef.current || isRolling) return;

    setIsRolling(true);
    setLastRoll(null);

    try {
      diceBoxRef.current.roll(notation);
    } catch (error) {
      console.error('Error rolling dice:', error);
      setIsRolling(false);
    }
  }, [isRolling]);

  return (
    <DiceBoxContext.Provider value={{
      diceColor,
      setDiceColor,
      disableThreeJS,
      setDisableThreeJS,
      diceBox: diceBoxRef.current,
      rollDice,
      isRolling,
      lastRoll,
    }}>
      <div id="app-content" className="relative min-h-screen top-0 left-0 w-full">
        {children}
        {/* Full viewport dice container */}
        <div
          id="dice-container"
          ref={containerRef}
          style={{ 
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            opacity: disableThreeJS ? 0 : 1,
            visibility: disableThreeJS ? 'hidden' : 'visible',
            zIndex: 9999,
            backgroundColor: 'transparent',
            overflow: 'hidden'
          }}
        />
      </div>
    </DiceBoxContext.Provider>
  );
};
