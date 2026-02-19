import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Tooltip.css';

/**
 * Tooltip component - Displays helpful text on hover
 * Uses Relay design tokens
 */
export const Tooltip = ({ 
  children,
  content,
  position = 'bottom',
  delay = 200,
  className = '',
  ...props 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = () => {
    const id = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    setTimeoutId(id);
  };

  const handleMouseLeave = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setIsVisible(false);
  };

  const classes = [
    'relay-tooltip',
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={classes}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
      {isVisible && content && (
        <div 
          className={`relay-tooltip__content relay-tooltip__content--${position}`}
          role="tooltip"
        >
          {content}
        </div>
      )}
    </div>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.string.isRequired,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  delay: PropTypes.number,
  className: PropTypes.string,
};
