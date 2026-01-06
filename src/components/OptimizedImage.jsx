import React, { useState, useRef, useEffect } from 'react';

/**
 * OptimizedImage Component
 * ========================
 * A performance-optimized image component with:
 * - Lazy loading via IntersectionObserver
 * - Skeleton loading animation
 * - Smooth fade-in transition
 * - WebP format with fallback
 * - Blur-up effect
 */
const OptimizedImage = ({
  src,
  alt = '',
  className = '',
  containerClassName = '',
  aspectRatio = 'aspect-square', // aspect-square, aspect-video, aspect-4/3, etc.
  objectFit = 'cover', // cover, contain, fill
  priority = false, // Set true for above-the-fold images
  onLoad = null,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);
  const containerRef = useRef(null);

  // Convert PNG/JPG paths to WebP
  const getWebPSrc = (imageSrc) => {
    if (!imageSrc) return '';
    // If already webp, return as is
    if (imageSrc.toLowerCase().endsWith('.webp')) return imageSrc;
    // Replace extension with webp
    return imageSrc.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  };

  const webpSrc = getWebPSrc(src);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) return; // Skip for priority images

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '100px', // Start loading 100px before visible
        threshold: 0.01,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  const handleError = () => {
    setHasError(true);
    // Fallback to original src if webp fails
    if (imgRef.current && webpSrc !== src) {
      imgRef.current.src = src;
    }
  };

  const objectFitClass = {
    cover: 'object-cover',
    contain: 'object-contain',
    fill: 'object-fill',
  }[objectFit] || 'object-cover';

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden bg-gray-100 ${aspectRatio} ${containerClassName}`}
    >
      {/* Skeleton - Only render when NOT loaded */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200" />
      )}

      {/* Actual Image */}
      {isInView && (
        <img
          ref={imgRef}
          src={webpSrc}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full ${objectFitClass} ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          {...props}
        />
      )}

      {/* Error State */}
      {hasError && !isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <span className="text-gray-400 text-sm">Image unavailable</span>
        </div>
      )}
    </div>
  );
};

/**
 * Shimmer animation keyframes (add to your CSS or index.css)
 * 
 * @keyframes shimmer {
 *   0% { background-position: -200% 0; }
 *   100% { background-position: 200% 0; }
 * }
 */

export default OptimizedImage;

