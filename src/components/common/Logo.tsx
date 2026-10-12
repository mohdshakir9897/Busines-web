import React from 'react';
import { Link } from 'wouter';

export interface LogoProps {
  /**
   * 'horizontal': 4:1 banner with hexagon mark + HEXBYTE typography
   * 'icon': 1:1 square hexagon mark with inner pixelated 'H' & HEXBYTE accent
   */
  variant?: 'horizontal' | 'icon';
  /**
   * Whether to use transparent asset or dark background asset
   * @default true
   */
  transparent?: boolean;
  /**
   * Height in pixels or custom class override
   */
  height?: number | string;
  width?: number | string;
  className?: string;
  imageClassName?: string;
  /**
   * Alt text for accessibility
   * @default "HEXBYTE logo"
   */
  alt?: string;
  /**
   * Wrap in a link
   */
  href?: string;
  /**
   * Priority loading
   */
  priority?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'horizontal',
  transparent = true,
  height,
  width,
  className = '',
  imageClassName = '',
  alt = 'HEXBYTE logo',
  href,
  priority = false,
}) => {
  const isHorizontal = variant === 'horizontal';

  // Determine image source based on variant & transparency
  const src = isHorizontal
    ? transparent
      ? '/brand/hexbyte-logo-4x1-transparent.png'
      : '/brand/hexbyte-logo-4x1.png'
    : transparent
      ? '/brand/hexbyte-logo-1x1-transparent.png'
      : '/brand/hexbyte-logo-1x1.png';

  // Default responsive sizing:
  // For navbar horizontal: 40px (32px on mobile) as requested in brief
  const defaultHeightClasses = isHorizontal
    ? 'h-8 sm:h-10 w-auto'
    : 'h-10 w-10 sm:h-12 sm:w-12';

  const style: React.CSSProperties = {
    ...(height ? { height: typeof height === 'number' ? `${height}px` : height } : {}),
    ...(width ? { width: typeof width === 'number' ? `${width}px` : width } : {}),
  };

  const imageElement = (
    <div className={`inline-flex items-center shrink-0 ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        style={style}
        className={`object-contain transition-opacity duration-200 select-none ${
          !height ? defaultHeightClasses : ''
        } ${imageClassName}`}
      />
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex items-center shrink-0 hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded">
        {imageElement}
      </Link>
    );
  }

  return imageElement;
};

export default Logo;
