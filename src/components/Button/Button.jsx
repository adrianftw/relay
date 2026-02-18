import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

/**
 * Relay Button Component
 * Ready to be styled from Figma design
 */
export const Button = ({ 
  variant = 'primary',
  size = 'medium',
  label,
  disabled = false,
  onClick,
  ...props 
}) => {
  return (
    <button
      className={`relay-button relay-button--${variant} relay-button--${size}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /** Button variant */
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  /** Button size */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
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
