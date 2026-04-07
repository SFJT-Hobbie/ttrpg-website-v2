import { useState, useEffect, useRef, useCallback } from 'react';
import { DiceBoxContext } from './DiceBoxContext';
import { DICE_RESULT_DISPLAY_MS } from './constants/dice.js';

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
  const resizeObserverRef = useRef(null);
  const diceClearTimerRef = useRef(null);

  const cancelScheduledDiceClear = useCallback(() => {
    if (diceClearTimerRef.current != null) {
      clearTimeout(diceClearTimerRef.current);
      diceClearTimerRef.current = null;
    }
  }, []);

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

        // dice-box sets physics boundaries from canvas.clientWidth/clientHeight
        // on window 'resize'. Fire a cascade of resize events to catch layout
        // races where the canvas hasn't reached full size yet.
        const fireResize = () => window.dispatchEvent(new Event('resize'));
        requestAnimationFrame(() => {
          fireResize();
          requestAnimationFrame(() => {
            requestAnimationFrame(fireResize);
          });
        });
        setTimeout(fireResize, 200);

        // ResizeObserver catches container size changes that window resize misses
        // (mobile keyboard, toolbar collapse, safe-area changes)
        const ro = new ResizeObserver(fireResize);
        ro.observe(containerElement);
        resizeObserverRef.current = ro;

        let resizeTimeout;
        resizeHandlerRef.current = () => {
          clearTimeout(resizeTimeout);
          resizeTimeout = setTimeout(() => {
            const newScale = getDiceScale();
            if (diceBoxRef.current?.updateConfig) {
              diceBoxRef.current.updateConfig({ scale: newScale });
            }
          }, 150);
        };
        window.addEventListener('resize', resizeHandlerRef.current);
        window.addEventListener('orientationchange', resizeHandlerRef.current);

        // Listen for roll complete — clear 3D dice after DICE_RESULT_DISPLAY_MS
        diceBox.onRollComplete = (results) => {
          setIsRolling(false);
          const total = results.reduce((sum, die) => sum + die.value, 0);
          setLastRoll({ results, total, timestamp: Date.now() });

          cancelScheduledDiceClear();
          diceClearTimerRef.current = window.setTimeout(() => {
            diceClearTimerRef.current = null;
            diceBoxRef.current?.clear?.();
          }, DICE_RESULT_DISPLAY_MS);
        };
      } catch (error) {
        console.error('Failed to initialize DiceBox:', error);
        setDisableThreeJS(true);
      }
    };

    const timer = setTimeout(initDiceBox, 100);

    return () => {
      clearTimeout(timer);
      if (diceClearTimerRef.current != null) {
        clearTimeout(diceClearTimerRef.current);
        diceClearTimerRef.current = null;
      }
      if (resizeHandlerRef.current) {
        window.removeEventListener('resize', resizeHandlerRef.current);
        window.removeEventListener('orientationchange', resizeHandlerRef.current);
        resizeHandlerRef.current = null;
      }
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
        resizeObserverRef.current = null;
      }
      if (diceBoxRef.current) {
        diceBoxRef.current.destroy?.();
        diceBoxRef.current = null;
      }
    };
  }, [disableThreeJS, diceColor, getDiceScale, cancelScheduledDiceClear]);

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

    cancelScheduledDiceClear();
    setIsRolling(true);
    setLastRoll(null);

    try {
      // Ensure physics boundaries match current viewport before rolling
      window.dispatchEvent(new Event('resize'));
      diceBoxRef.current.roll(notation);
    } catch (error) {
      console.error('Error rolling dice:', error);
      setIsRolling(false);
    }
  }, [isRolling, cancelScheduledDiceClear]);

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
          className={`pointer-events-none fixed inset-x-0 top-0 z-[9999] h-[100dvh] w-screen overflow-hidden bg-transparent ${disableThreeJS ? 'opacity-0 invisible' : 'opacity-100 visible'}`}
        />
      </div>
    </DiceBoxContext.Provider>
  );
};
