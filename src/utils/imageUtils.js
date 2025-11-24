/**
 * Utility functions for optimizing Supabase Storage images
 * Uses Supabase Storage image transformations API
 */

/**
 * Get optimized image URL from Supabase Storage
 * @param {string} imageUrl - Original Supabase Storage URL
 * @param {Object} options - Transformation options
 * @param {number} options.width - Desired width in pixels
 * @param {number} options.height - Desired height in pixels
 * @param {number} options.quality - Image quality (1-100, default: 80)
 * @param {string} options.format - Output format ('webp', 'avif', 'jpeg', 'png', default: 'webp')
 * @param {boolean} options.resize - Resize mode ('cover', 'contain', 'fill', default: 'cover')
 * @returns {string} Optimized image URL
 */
export const getOptimizedImageUrl = (imageUrl, options = {}) => {
  if (!imageUrl) return '';
  
  // If it's not a Supabase Storage URL, return as-is
  if (!imageUrl.includes('supabase.co/storage/v1/object/public/')) {
    return imageUrl;
  }

  const {
    width,
    height,
    quality = 80,
    format = 'webp',
    resize = 'cover'
  } = options;

  // Build transformation query string
  const transformations = [];
  
  if (width) transformations.push(`width=${width}`);
  if (height) transformations.push(`height=${height}`);
  if (quality) transformations.push(`quality=${quality}`);
  if (format) transformations.push(`format=${format}`);
  if (resize) transformations.push(`resize=${resize}`);

  if (transformations.length === 0) {
    return imageUrl;
  }

  // Add transformations to URL
  const separator = imageUrl.includes('?') ? '&' : '?';
  return `${imageUrl}${separator}${transformations.join('&')}`;
};

/**
 * Get optimized avatar image URL (for character pictures)
 * @param {string} imageUrl - Original image URL
 * @param {number} size - Size in pixels (default: 200)
 * @returns {string} Optimized avatar URL
 */
export const getAvatarUrl = (imageUrl, size = 200) => {
  return getOptimizedImageUrl(imageUrl, {
    width: size,
    height: size,
    quality: 85,
    format: 'webp',
    resize: 'cover'
  });
};

/**
 * Get optimized thumbnail image URL
 * @param {string} imageUrl - Original image URL
 * @param {number} width - Width in pixels (default: 400)
 * @param {number} height - Height in pixels (default: 300)
 * @returns {string} Optimized thumbnail URL
 */
export const getThumbnailUrl = (imageUrl, width = 400, height = 300) => {
  return getOptimizedImageUrl(imageUrl, {
    width,
    height,
    quality: 75,
    format: 'webp',
    resize: 'cover'
  });
};

/**
 * Get optimized map image URL
 * @param {string} imageUrl - Original image URL
 * @param {number} width - Width in pixels (default: 1200)
 * @param {number} height - Height in pixels (default: 800)
 * @returns {string} Optimized map URL
 */
export const getMapImageUrl = (imageUrl, width = 1200, height = 800) => {
  return getOptimizedImageUrl(imageUrl, {
    width,
    height,
    quality: 85,
    format: 'webp',
    resize: 'contain'
  });
};



