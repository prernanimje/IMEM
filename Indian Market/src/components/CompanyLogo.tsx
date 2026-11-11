import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface CompanyLogoProps {
  height?: number;
  className?: string;
  onClick?: () => void;
  forceVariant?: 'dark' | 'light';
}

export const CompanyLogo: React.FC<CompanyLogoProps> = ({
  height = 44,
  className = '',
  onClick,
  forceVariant
}) => {
  const { isDark } = useTheme();
  const effectiveVariant = forceVariant ? forceVariant : (isDark ? 'dark' : 'light');

  return (
    <div 
      className={`company-logo-container ${className}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      style={{ cursor: onClick ? 'pointer' : 'default', display: 'inline-flex', alignItems: 'center' }}
    >
      <img
        src={effectiveVariant === 'dark' ? "/logo-dark.png" : "/logo-light.png"}
        alt="Indian Market Events & Promotion"
        fetchPriority="high"
        decoding="async"
        style={{
          height: `${height}px`,
          width: 'auto',
          objectFit: 'contain',
          display: 'block'
        }}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src = "/logo.png";
        }}
      />
    </div>
  );
};
