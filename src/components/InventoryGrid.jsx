import React, { useState, useCallback, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const GAP = 5;

const InventoryGrid = ({ 
  items = [], 
  onItemsChange, 
  loading = false,
  error: externalError,
  onError
}) => {
  const [itemName, setItemName] = useState('');
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [localError, setLocalError] = useState(null);
  const [dragState, setDragState] = useState(null);
  const [resizeState, setResizeState] = useState(null);
  const gridContainerRef = useRef(null);

  const error = externalError || localError;
  const setError = onError || setLocalError;

  // Force 5x5 grid
  const GRID_COLS = 5;
  const GRID_ROWS = 5;

  // Calculate cell size from container
  const getCellSize = useCallback(() => {
    if (!gridContainerRef.current) return 50;
    const container = gridContainerRef.current;
    const computedStyle = window.getComputedStyle(container);
    const cellSizeStr = computedStyle.getPropertyValue('--cell-size');
    return parseInt(cellSizeStr) || 50;
  }, []);

  // Convert mouse coordinates to grid position
  const getGridPosition = useCallback((clientX, clientY) => {
    if (!gridContainerRef.current) return null;
    const container = gridContainerRef.current;
    const rect = container.getBoundingClientRect();
    const cellSize = getCellSize();
    
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    
    const gridX = Math.floor(x / (cellSize + GAP)) + 1;
    const gridY = Math.floor(y / (cellSize + GAP)) + 1;
    
    return { x: gridX, y: gridY };
  }, [getCellSize]);

  // Check if position is valid
  const isValidPosition = useCallback((itemId, x, y, w, h) => {
    if (x < 1 || y < 1 || x + w - 1 > GRID_COLS || y + h - 1 > GRID_ROWS) {
      return false;
    }

    return !items.some(other => {
      if (other.id === itemId) return false;
      return !(x + w - 1 < other.gridX || x > other.gridX + other.w - 1 || 
               y + h - 1 < other.gridY || y > other.gridY + other.h - 1);
    });
  }, [items, GRID_COLS, GRID_ROWS]);

  const addItem = useCallback(() => {
    if (!itemName.trim()) {
      setError('Por favor, ingrese un nombre para el ítem.');
      return;
    }

    const position = findFreeCell(items, GRID_COLS, GRID_ROWS);
    if (!position) {
      setError(`No hay espacio en la grilla de ${GRID_COLS}x${GRID_ROWS}`);
      return;
    }

    const newItem = {
      id: uuidv4(),
      name: itemName.trim(),
      gridX: position.x,
      gridY: position.y,
      w: 1,
      h: 1,
    };

    onItemsChange([...items, newItem]);
    setItemName('');
    setError(null);
  }, [itemName, items, GRID_COLS, GRID_ROWS, onItemsChange, setError]);

  const removeItem = useCallback(() => {
    if (!selectedItemId) {
      setError('Por favor, seleccione un ítem para eliminar.');
      return;
    }

    onItemsChange(items.filter(item => item.id !== selectedItemId));
    setSelectedItemId(null);
    setError(null);
  }, [selectedItemId, items, onItemsChange, setError]);

  // Handle mouse move for drag and resize
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (dragState) {
        const gridPos = getGridPosition(e.clientX, e.clientY);
        if (gridPos) {
          const item = items.find(i => i.id === dragState.itemId);
          if (item) {
            const newX = Math.max(1, Math.min(gridPos.x, GRID_COLS - item.w + 1));
            const newY = Math.max(1, Math.min(gridPos.y, GRID_ROWS - item.h + 1));
            
            if (isValidPosition(item.id, newX, newY, item.w, item.h)) {
              setDragState(prev => ({ ...prev, gridX: newX, gridY: newY }));
            }
          }
        }
      } else if (resizeState) {
        const gridPos = getGridPosition(e.clientX, e.clientY);
        if (gridPos) {
          const item = resizeState.item;
          let newX = item.gridX;
          let newY = item.gridY;
          let newW = item.w;
          let newH = item.h;

          const { direction } = resizeState;
          
          switch (direction) {
            case 'se': // bottom-right - expand right and down
              newW = Math.max(1, Math.min(gridPos.x - item.gridX + 1, GRID_COLS - item.gridX + 1));
              newH = Math.max(1, Math.min(gridPos.y - item.gridY + 1, GRID_ROWS - item.gridY + 1));
              break;
            case 'sw': // bottom-left - expand left and down
              newX = Math.max(1, Math.min(gridPos.x, item.gridX + item.w - 1));
              newW = item.gridX + item.w - newX;
              newH = Math.max(1, Math.min(gridPos.y - item.gridY + 1, GRID_ROWS - item.gridY + 1));
              break;
            case 'ne': // top-right - expand right and up
              newW = Math.max(1, Math.min(gridPos.x - item.gridX + 1, GRID_COLS - item.gridX + 1));
              newY = Math.max(1, Math.min(gridPos.y, item.gridY + item.h - 1));
              newH = item.gridY + item.h - newY;
              break;
            case 'nw': // top-left - expand left and up
              newX = Math.max(1, Math.min(gridPos.x, item.gridX + item.w - 1));
              newW = item.gridX + item.w - newX;
              newY = Math.max(1, Math.min(gridPos.y, item.gridY + item.h - 1));
              newH = item.gridY + item.h - newY;
              break;
            case 'e': // right edge - expand right
              newW = Math.max(1, Math.min(gridPos.x - item.gridX + 1, GRID_COLS - item.gridX + 1));
              break;
            case 'w': // left edge - expand left
              newX = Math.max(1, Math.min(gridPos.x, item.gridX + item.w - 1));
              newW = item.gridX + item.w - newX;
              break;
            case 's': // bottom edge - expand down
              newH = Math.max(1, Math.min(gridPos.y - item.gridY + 1, GRID_ROWS - item.gridY + 1));
              break;
            case 'n': // top edge - expand up
              newY = Math.max(1, Math.min(gridPos.y, item.gridY + item.h - 1));
              newH = item.gridY + item.h - newY;
              break;
          }

          // Ensure minimum size of 1x1
          newW = Math.max(1, newW);
          newH = Math.max(1, newH);
          
          // Ensure within bounds
          if (newX + newW - 1 <= GRID_COLS && newY + newH - 1 <= GRID_ROWS) {
            if (isValidPosition(item.id, newX, newY, newW, newH)) {
              setResizeState(prev => ({ ...prev, gridX: newX, gridY: newY, w: newW, h: newH }));
            }
          }
        }
      }
    };

    const handleMouseUp = () => {
      if (dragState) {
        const item = items.find(i => i.id === dragState.itemId);
        if (item && isValidPosition(item.id, dragState.gridX, dragState.gridY, item.w, item.h)) {
          onItemsChange(
            items.map(i => i.id === dragState.itemId 
              ? { ...i, gridX: dragState.gridX, gridY: dragState.gridY }
              : i
            )
          );
        }
        setDragState(null);
      } else if (resizeState) {
        if (isValidPosition(resizeState.item.id, resizeState.gridX, resizeState.gridY, resizeState.w, resizeState.h)) {
          onItemsChange(
            items.map(i => i.id === resizeState.item.id
              ? { ...i, gridX: resizeState.gridX, gridY: resizeState.gridY, w: resizeState.w, h: resizeState.h }
              : i
            )
          );
        }
        setResizeState(null);
      }
    };

    if (dragState || resizeState) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [dragState, resizeState, items, getGridPosition, isValidPosition, GRID_COLS, GRID_ROWS, onItemsChange]);

  const handleItemMouseDown = useCallback((e, itemId) => {
    if (loading || e.target.closest('.resize-handle')) return;
    
    e.preventDefault();
    const item = items.find(i => i.id === itemId);
    if (!item) return;

    // Track click start position
    clickStartRef.current = { x: e.clientX, y: e.clientY };

    setDragState({
      itemId,
      gridX: item.gridX,
      gridY: item.gridY,
      startX: e.clientX,
      startY: e.clientY,
    });
  }, [items, loading]);

  const handleResizeMouseDown = useCallback((e, itemId, direction) => {
    if (loading) return;
    e.preventDefault();
    e.stopPropagation();
    
    const item = items.find(i => i.id === itemId);
    if (!item) return;

    setResizeState({
      item,
      direction,
      gridX: item.gridX,
      gridY: item.gridY,
      w: item.w,
      h: item.h,
    });
  }, [items, loading]);

  const clickStartRef = useRef(null);

  const handleItemClick = useCallback((e, itemId) => {
    if (e.target.closest('.resize-handle')) return;
    
    // Only select if it was a click (not a drag)
    if (clickStartRef.current) {
      const moved = Math.abs(e.clientX - clickStartRef.current.x) > 5 || 
                    Math.abs(e.clientY - clickStartRef.current.y) > 5;
      if (moved) {
        clickStartRef.current = null;
        return;
      }
    }
    setSelectedItemId(itemId);
    clickStartRef.current = null;
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="cinzel text-2xl text-yellow-500">Inventario</h2>

      {/* Item Input Section */}
      <div className="space-y-4">
        <div>
          <label className="block text-white montserrat text-sm mb-1">Nombre del Ítem</label>
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addItem()}
            className="w-full p-2 bg-gray-800 text-white border border-gray-300 rounded"
            disabled={loading}
            placeholder="Ingrese el nombre del ítem"
            aria-label="Nombre del ítem"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            type='button'
            onClick={addItem}
            disabled={loading || !itemName.trim()}
            className="bg-emerald-800 hover:bg-emerald-600 text-white montserrat font-bold py-2 px-4 rounded-2xl border border-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Añadir ítem"
          >
            Agregar Ítem
          </button>
          <button
            type='button'
            onClick={removeItem}
            disabled={loading || !selectedItemId}
            className="bg-red-800 hover:bg-red-600 text-white montserrat font-bold py-2 px-4 rounded-2xl border border-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Eliminar ítem seleccionado"
          >
            Borrar Ítem
          </button>
        </div>
      </div>

      {/* Grid Container */}
      <style>{`
        .inventory-grid {
          --cell-size: 50px;
        }
        @media (min-width: 640px) {
          .inventory-grid {
            --cell-size: 60px;
          }
        }
        @media (min-width: 1024px) {
          .inventory-grid {
            --cell-size: 70px;
          }
        }
        @media (min-width: 1280px) {
          .inventory-grid {
            --cell-size: 80px;
          }
        }
      `}</style>
      <div className="w-full overflow-x-auto flex justify-center">
        <div
          ref={gridContainerRef}
          className="grid bg-gray-900 relative inventory-grid"
          style={{
            gridTemplateColumns: `repeat(${GRID_COLS}, var(--cell-size))`,
            gridTemplateRows: `repeat(${GRID_ROWS}, var(--cell-size))`,
            gap: `${GAP}px`,
            width: `calc(${GRID_COLS} * var(--cell-size) + ${(GRID_COLS - 1)} * ${GAP}px)`,
            height: `calc(${GRID_ROWS} * var(--cell-size) + ${(GRID_ROWS - 1)} * ${GAP}px)`,
          }}
        >
          {[...Array(GRID_ROWS)].map((_, y) =>
            [...Array(GRID_COLS)].map((_, x) => (
              <div
                key={`cell-${x}-${y}`}
                className="bg-gray-800 border border-gray-600"
                style={{
                  width: 'var(--cell-size)',
                  height: 'var(--cell-size)',
                }}
              />
            ))
          )}
          {items.map((item) => {
            const isDragging = dragState?.itemId === item.id;
            const isResizing = resizeState?.item.id === item.id;
            const displayItem = isDragging ? { ...item, gridX: dragState.gridX, gridY: dragState.gridY } :
                             isResizing ? { ...item, gridX: resizeState.gridX, gridY: resizeState.gridY, w: resizeState.w, h: resizeState.h } :
                             item;

            return (
              <InventoryItem
                key={item.id}
                item={displayItem}
                originalItem={item}
                isSelected={selectedItemId === item.id}
                isDragging={isDragging}
                isResizing={isResizing}
                onMouseDown={handleItemMouseDown}
                onClick={handleItemClick}
                onResizeMouseDown={handleResizeMouseDown}
                loading={loading}
              />
            );
          })}
        </div>
      </div>

    </div>
  );
};

// Helper function
const findFreeCell = (items, cols, rows) => {
  for (let y = 1; y <= rows; y++) {
    for (let x = 1; x <= cols; x++) {
      const taken = items.some(item => {
        return x >= item.gridX && x < item.gridX + item.w && y >= item.gridY && y < item.gridY + item.h;
      });
      if (!taken) return { x, y };
    }
  }
  return null;
};

// Inventory Item Component
const InventoryItem = React.memo(({ 
  item, 
  originalItem,
  isSelected, 
  isDragging,
  isResizing,
  onMouseDown, 
  onClick,
  onResizeMouseDown,
  loading 
}) => {
  return (
    <div
      style={{
        gridColumn: `${item.gridX} / span ${item.w}`,
        gridRow: `${item.gridY} / span ${item.h}`,
        opacity: isDragging || isResizing ? 0.7 : 1,
        transition: isDragging || isResizing ? 'none' : 'opacity 0.2s ease',
        cursor: loading ? 'not-allowed' : 'move',
      }}
      onMouseDown={(e) => !loading && onMouseDown(e, originalItem.id)}
      onClick={(e) => !loading && onClick(e, originalItem.id)}
      className={`bg-yellow-500 text-black montserrat text-xs flex items-center justify-center border-2 relative ${
        isSelected ? 'border-white shadow-lg' : 'border-gray-600'
      } ${isDragging || isResizing ? 'z-20' : ''}`}
    >
      <span className="text-center px-2 truncate w-full pointer-events-none">
        {item.name}
      </span>

      {/* Resize Handles - Always visible when selected */}
      {isSelected && !loading && (
        <>
          {/* Corner Handles */}
          <div
            onMouseDown={(e) => onResizeMouseDown(e, originalItem.id, 'nw')}
            className="resize-handle absolute top-0 left-0 w-3 h-3 bg-white border border-gray-800 cursor-nwse-resize opacity-70 hover:opacity-100 transition-opacity z-10"
            title="Arrastrar para redimensionar"
          />
          <div
            onMouseDown={(e) => onResizeMouseDown(e, originalItem.id, 'ne')}
            className="resize-handle absolute top-0 right-0 w-3 h-3 bg-white border border-gray-800 cursor-nesw-resize opacity-70 hover:opacity-100 transition-opacity z-10"
            title="Arrastrar para redimensionar"
          />
          <div
            onMouseDown={(e) => onResizeMouseDown(e, originalItem.id, 'sw')}
            className="resize-handle absolute bottom-0 left-0 w-3 h-3 bg-white border border-gray-800 cursor-nesw-resize opacity-70 hover:opacity-100 transition-opacity z-10"
            title="Arrastrar para redimensionar"
          />
          <div
            onMouseDown={(e) => onResizeMouseDown(e, originalItem.id, 'se')}
            className="resize-handle absolute bottom-0 right-0 w-3 h-3 bg-white border border-gray-800 cursor-nwse-resize opacity-70 hover:opacity-100 transition-opacity z-10"
            title="Arrastrar para redimensionar"
          />

          {/* Edge Handles */}
          <div
            onMouseDown={(e) => onResizeMouseDown(e, originalItem.id, 'n')}
            className="resize-handle absolute top-0 left-1/2 -translate-x-1/2 w-8 h-1.5 bg-white border border-gray-800 cursor-ns-resize opacity-70 hover:opacity-100 transition-opacity z-10"
            title="Arrastrar para redimensionar"
          />
          <div
            onMouseDown={(e) => onResizeMouseDown(e, originalItem.id, 's')}
            className="resize-handle absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1.5 bg-white border border-gray-800 cursor-ns-resize opacity-70 hover:opacity-100 transition-opacity z-10"
            title="Arrastrar para redimensionar"
          />
          <div
            onMouseDown={(e) => onResizeMouseDown(e, originalItem.id, 'e')}
            className="resize-handle absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-white border border-gray-800 cursor-ew-resize opacity-70 hover:opacity-100 transition-opacity z-10"
            title="Arrastrar para redimensionar"
          />
          <div
            onMouseDown={(e) => onResizeMouseDown(e, originalItem.id, 'w')}
            className="resize-handle absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-white border border-gray-800 cursor-ew-resize opacity-70 hover:opacity-100 transition-opacity z-10"
            title="Arrastrar para redimensionar"
          />
        </>
      )}
    </div>
  );
}, (prevProps, nextProps) => {
  return (
    prevProps.item.id === nextProps.item.id &&
    prevProps.item.gridX === nextProps.item.gridX &&
    prevProps.item.gridY === nextProps.item.gridY &&
    prevProps.item.w === nextProps.item.w &&
    prevProps.item.h === nextProps.item.h &&
    prevProps.item.name === nextProps.item.name &&
    prevProps.isSelected === nextProps.isSelected &&
    prevProps.isDragging === nextProps.isDragging &&
    prevProps.isResizing === nextProps.isResizing &&
    prevProps.loading === nextProps.loading
  );
});

InventoryItem.displayName = 'InventoryItem';

export default InventoryGrid;
