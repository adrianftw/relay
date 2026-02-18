import React from 'react';
import PropTypes from 'prop-types';
import './ProgressBar.css';

/**
 * Relay Progress Bar Component
 * Custom progress indicator for dashboard cards
 * 
 * Design from Figma:
 * - Track background: Gray 04 (--relay-gray-04)
 * - Progress fill: Purple Base (--relay-purple-base)
 * - Height: 10px
 * - Border radius: 4px
 * - Label: Paragraph/S Bold (14px/20px, Helvetica Bold)
 */
export const ProgressBar = ({ 
  value = 0,
  max = 100,
  showLabel = true,
  label,
  size = 'medium',
  variant = 'primary',
  className = '',
  ...props 
}) => {
  // Calculate percentage
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  const displayLabel = label || `${Math.round(percentage)}%`;

  return (
    <div className={`relay-progress-bar ${className}`} {...props}>
      <div className="relay-progress-bar__wrapper">
        <div 
          className={`relay-progress-bar__track relay-progress-bar__track--${size} relay-progress-bar__track--${variant}`}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
          aria-label={`Progress: ${displayLabel}`}
        >
          <div 
            className={`relay-progress-bar__fill relay-progress-bar__fill--${variant}`}
            style={{ width: `${percentage}%` }}
          />
        </div>
        {showLabel && (
          <span className="relay-progress-bar__label">
            {displayLabel}
          </span>
        )}
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  /** Current progress value */
  value: PropTypes.number,
  /** Maximum value (default 100) */
  max: PropTypes.number,
  /** Show percentage label */
  showLabel: PropTypes.bool,
  /** Custom label text (overrides percentage) */
  label: PropTypes.string,
  /** Size variant */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Color variant */
  variant: PropTypes.oneOf(['primary', 'success', 'warning', 'danger']),
  /** Additional CSS class */
  className: PropTypes.string,
};

ProgressBar.defaultProps = {
  value: 0,
  max: 100,
  showLabel: true,
  size: 'medium',
  variant: 'primary',
  className: '',
};
