import React from 'react';
import PropTypes from 'prop-types';

/**
 * Relay Button Component - Based on USWDS Button
 * Customizable button component that extends USWDS design system
 */
export const Button = ({ 
  variant = 'default',
  size = 'medium',
  children,
  outline = false,
  disabled = false,
  onClick,
  ...props 
}) => {
  const baseClass = 'usa-button';
  const variantClass = variant !== 'default' ? `usa-button--${variant}` : '';
  const sizeClass = size === 'big' ? 'usa-button--big' : '';
  const outlineClass = outline ? 'usa-button--outline' : '';
  const disabledClass = disabled ? 'usa-button--disabled' : '';
  
  const classes = [
    baseClass,
    variantClass,
    sizeClass,
    outlineClass,
    disabledClass
  ].filter(Boolean).join(' ');

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  /** Button variant - determines color scheme */
  variant: PropTypes.oneOf(['default', 'secondary', 'accent-cool', 'accent-warm', 'base', 'outline', 'inverse']),
  /** Button size */
  size: PropTypes.oneOf(['medium', 'big']),
  /** Button contents */
  children: PropTypes.node.isRequired,
  /** Use outline style */
  outline: PropTypes.bool,
  /** Disabled state */
  disabled: PropTypes.bool,
  /** Click handler */
  onClick: PropTypes.func,
};
