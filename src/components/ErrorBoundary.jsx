import React from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

/**
 * Improved Error Boundary component with better UI and error reporting
 */
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-4">
      <div className="max-w-2xl w-full bg-slate-900 border border-red-500 rounded-lg p-8 text-center">
        <h1 className="cinzel text-4xl md:text-6xl text-red-500 mb-4">
          ¡Algo salió mal!
        </h1>
        <p className="montserrat text-lg mb-6 text-gray-300">
          Lo sentimos, ha ocurrido un error inesperado.
        </p>
        <div className="bg-black border border-gray-700 rounded p-4 mb-6 text-left">
          <p className="montserrat text-sm text-red-400 mb-2">Detalles del error:</p>
          <pre className="montserrat text-xs text-gray-400 overflow-auto max-h-40">
            {error.message}
          </pre>
          {error.stack && (
            <details className="mt-4">
              <summary className="montserrat text-xs text-gray-500 cursor-pointer hover:text-gray-400">
                Ver stack trace
              </summary>
              <pre className="montserrat text-xs text-gray-500 overflow-auto max-h-60 mt-2">
                {error.stack}
              </pre>
            </details>
          )}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={resetErrorBoundary}
            className="px-6 py-3 bg-yellow-500 text-black rounded-lg montserrat font-bold hover:bg-yellow-600 transition-all duration-300"
          >
            Reintentar
          </button>
          <button
            onClick={() => window.location.href = '/landing'}
            className="px-6 py-3 bg-slate-700 text-white rounded-lg montserrat font-bold hover:bg-slate-600 transition-all duration-300"
          >
            Ir al Inicio
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * Log error to console and optionally to an error reporting service
 */
function logErrorToService(error, errorInfo) {
  console.error('Error caught by boundary:', error, errorInfo);
  // TODO: Add error reporting service integration (e.g., Sentry)
  // if (window.Sentry) {
  //   window.Sentry.captureException(error, { contexts: { react: errorInfo } });
  // }
}

/**
 * Enhanced Error Boundary wrapper
 */
export function ErrorBoundary({ children, fallback, onError }) {
  return (
    <ReactErrorBoundary
      FallbackComponent={fallback || ErrorFallback}
      onError={onError || logErrorToService}
      onReset={() => {
        // Reset app state if needed
        window.location.reload();
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
}

export default ErrorBoundary;



