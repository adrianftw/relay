import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

/**
 * Relay Button Component
 * Styled from Figma design specifications
 * 
 * Variants:
 * - primary: Purple (--relay-purple-base)
 * - secondary: Red (--relay-red-base) 
 * - accent-cool: Blue (--relay-blue-base)
 * 
 * Sizes:
 * - medium: 20px horizontal, 12px vertical padding, 16px font
 * - large: 32px horizontal, 16px vertical padding, 22px font
 */
export const Button = ({ 
  variant = 'primary',
  size = 'medium',
  label,
  disabled = false,
  onClick,
  ...props 
}) => {
  const baseClass = 'relay-button';
  const variantClass = `relay-button--${variant}`;
  const sizeClass = `relay-button--${size}`;
  const disabledClass = disabled ? 'relay-button--disabled' : '';
  
  const classes = [baseClass, variantClass, sizeClass, disabledClass]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /** Button variant - maps to Figma color variants */
  variant: PropTypes.oneOf(['primary', 'secondary', 'accent-cool']),
  /** Button size - maps to Figma size variants */
  size: PropTypes.oneOf(['medium', 'large']),
  /** Button label text */
  label: PropTypes.string.isRequired,
  /** Disabled state */
  disabled: PropTypes.bool,
  /** Click handler */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
  disabled: false,
};
