import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

/**
 * Relay Button Component
 * Synced from Figma design - pill-shaped button with design tokens
 * 
 * Token mappings:
 * - Primary: --Brand-Purple-Base → --relay-purple-base (#333366)
 * - Secondary: --Brand-Blue-Base → --relay-blue-base (#004B87)
 * - Outline: --Brand-Purple-Base → --relay-purple-base (#333366)
 * 
 * Design specs from Figma:
 * - Border radius: 40px (pill shape)
 * - Padding: 12px vertical, 24px horizontal
 * - Font: 16px, Bold, white text
 */
export const Button = ({ 
  variant = 'primary',
  size = 'medium',
  children,
  disabled = false,
  onClick,
  ...props 
}) => {
  const classes = [
    styles.button,
    styles[`button-${variant}`],
    size !== 'medium' ? styles[`button-${size}`] : ''
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
  /** Button variant - maps to Figma component variants and design tokens */
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  /** Button size */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Button contents */
  children: PropTypes.node.isRequired,
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
