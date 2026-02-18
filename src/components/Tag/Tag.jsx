import React from 'react';
import PropTypes from 'prop-types';
import './Tag.css';

/**
 * Relay Tag Component
 * Static label component synced from Figma
 * 
 * Variants:
 * - purple: Purple tag (Brand Purple)
 * - blue: Blue tag (Brand Blue)
 * - green: Green tag (Utility Success)
 * - red: Red tag (Utility Red)
 * - gray: Gray tag (Grayscale)
 */
export const Tag = ({ 
  variant = 'purple',
  label = 'Tag',
  ...props 
}) => {
  const baseClass = 'relay-tag';
  const variantClass = `relay-tag--${variant}`;
  
  const classes = [baseClass, variantClass]
    .filter(Boolean)
    .join(' ');

  return (
    <span
      className={classes}
      {...props}
    >
      {label}
    </span>
  );
};

Tag.propTypes = {
  /** Tag color variant from Figma */
  variant: PropTypes.oneOf(['purple', 'blue', 'green', 'red', 'gray']),
  /** Tag label text */
  label: PropTypes.string,
};

Tag.defaultProps = {
  variant: 'purple',
  label: 'Tag',
};
