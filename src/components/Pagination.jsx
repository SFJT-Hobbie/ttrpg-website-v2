import React from 'react';

/**
 * Reusable Pagination component
 * @param {number} currentPage - Current page number (1-indexed)
 * @param {number} totalPages - Total number of pages
 * @param {Function} onPageChange - Callback when page changes
 * @param {number} itemsPerPage - Items per page
 * @param {number} totalItems - Total number of items
 * @param {Function} onItemsPerPageChange - Optional callback to change items per page
 */
const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  itemsPerPage,
  totalItems,
  onItemsPerPageChange
}) => {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      // Show all pages if total is less than max visible
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show first page
      pages.push(1);
      
      if (currentPage > 3) {
        pages.push('...');
      }
      
      // Show pages around current
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      
      if (currentPage < totalPages - 2) {
        pages.push('...');
      }
      
      // Show last page
      pages.push(totalPages);
    }
    
    return pages;
  };

  const pageNumbers = getPageNumbers();
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-6 p-4 border-t border-white border-opacity-20">
      <div className="text-white montserrat text-sm">
        Mostrando {startItem}-{endItem} de {totalItems}
      </div>
      
      <div className="flex items-center gap-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-slate-800 text-white rounded border border-white border-opacity-20 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed montserrat text-sm transition-all duration-300"
          aria-label="Página anterior"
        >
          Anterior
        </button>
        
        <div className="flex gap-1">
          {pageNumbers.map((page, index) => {
            if (page === '...') {
              return (
                <span key={`ellipsis-${index}`} className="px-2 text-white montserrat">
                  ...
                </span>
              );
            }
            
            return (
              <button
                key={page}
                onClick={() => onPageChange(page)}
                className={`px-3 py-1 rounded border border-white border-opacity-20 montserrat text-sm transition-all duration-300 ${
                  currentPage === page
                    ? 'bg-yellow-500 text-black font-bold'
                    : 'bg-slate-800 text-white hover:bg-slate-600'
                }`}
                aria-label={`Ir a página ${page}`}
                aria-current={currentPage === page ? 'page' : undefined}
              >
                {page}
              </button>
            );
          })}
        </div>
        
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-slate-800 text-white rounded border border-white border-opacity-20 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed montserrat text-sm transition-all duration-300"
          aria-label="Página siguiente"
        >
          Siguiente
        </button>
      </div>
      
      {onItemsPerPageChange && (
        <div className="flex items-center gap-2">
          <label className="text-white montserrat text-sm">
            Por página:
          </label>
          <select
            value={itemsPerPage}
            onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
            className="px-2 py-1 bg-slate-800 text-white rounded border border-white border-opacity-20 montserrat text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default Pagination;



