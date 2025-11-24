import React from 'react';

/**
 * Base skeleton loader component
 */
export const SkeletonBase = ({ className = '', width, height }) => (
  <div
    className={`bg-gray-800 animate-pulse rounded ${className}`}
    style={{ width, height }}
  />
);

/**
 * Skeleton loader for text lines
 */
export const SkeletonText = ({ lines = 3, className = '' }) => (
  <div className={`space-y-2 ${className}`}>
    {Array.from({ length: lines }).map((_, i) => (
      <SkeletonBase
        key={i}
        height="1rem"
        className={i === lines - 1 ? 'w-3/4' : 'w-full'}
      />
    ))}
  </div>
);

/**
 * Skeleton loader for cards
 */
export const SkeletonCard = ({ className = '' }) => (
  <div className={`border border-gray-700 rounded-xl p-4 space-y-4 ${className}`}>
    <div className="flex items-center space-x-4">
      <SkeletonBase width="4rem" height="4rem" className="rounded-full" />
      <div className="flex-1 space-y-2">
        <SkeletonBase height="1.5rem" width="60%" />
        <SkeletonBase height="1rem" width="40%" />
      </div>
    </div>
    <SkeletonText lines={2} />
  </div>
);

/**
 * Skeleton loader for character cards
 */
export const SkeletonCharacterCard = () => (
  <div className="flex flex-col md:flex-row items-center justify-between my-4 p-4 rounded-xl border border-gray-700">
    <div className="flex flex-row space-x-4 items-center mb-4 md:mb-0">
      <SkeletonBase width="6rem" height="6rem" className="rounded-full" />
      <div className="flex flex-col space-y-2">
        <SkeletonBase height="1.5rem" width="12rem" />
        <SkeletonBase height="1rem" width="10rem" />
        <SkeletonBase height="1rem" width="8rem" />
      </div>
    </div>
    <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-4">
      <SkeletonBase width="6rem" height="2.5rem" className="rounded-2xl" />
      <SkeletonBase width="6rem" height="2.5rem" className="rounded-2xl" />
    </div>
  </div>
);

/**
 * Skeleton loader for journal entries
 */
export const SkeletonJournalEntry = () => (
  <div className="flex flex-col md:flex-row items-center justify-between my-4 p-4 rounded-xl border border-gray-700">
    <div className="flex flex-row space-x-4 items-center mb-4 md:mb-0">
      <SkeletonBase width="4rem" height="4rem" className="rounded-full" />
      <div className="flex flex-col space-y-2">
        <SkeletonBase height="1.5rem" width="15rem" />
        <SkeletonBase height="1rem" width="12rem" />
        <SkeletonText lines={2} className="w-64" />
      </div>
    </div>
    <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-4">
      <SkeletonBase width="6rem" height="2.5rem" className="rounded-2xl" />
      <SkeletonBase width="6rem" height="2.5rem" className="rounded-2xl" />
    </div>
  </div>
);

/**
 * Skeleton loader for page loading
 */
export const SkeletonPage = () => (
  <div className="min-h-screen flex flex-col items-center text-white bg-black p-4">
    <SkeletonBase height="4rem" width="20rem" className="mb-8" />
    <div className="w-10/12 space-y-8">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  </div>
);

/**
 * Generic skeleton loader
 */
const SkeletonLoader = ({ variant = 'text', lines, className, width, height }) => {
  switch (variant) {
    case 'card':
      return <SkeletonCard className={className} />;
    case 'character':
      return <SkeletonCharacterCard />;
    case 'journal':
      return <SkeletonJournalEntry />;
    case 'page':
      return <SkeletonPage />;
    case 'text':
    default:
      return <SkeletonText lines={lines || 3} className={className} />;
  }
};

export default SkeletonLoader;

