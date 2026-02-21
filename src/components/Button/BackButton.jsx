import React from 'react';
import PropTypes from 'prop-types';
import { MdArrowBackIosNew } from 'react-icons/md';
import './BackButton.css';

/**
 * BackButton component - A specialized button for back navigation
 * Uses Relay design tokens and Material Design icons
 */
const BackButton = ({ 
  children = 'Back',
  size = 'medium',
  href,
  onClick,
  disabled = false,
  className = '',
  ...props 
}) => {
  const classes = [
    'relay-back-button',
    `relay-back-button--${size}`,
    disabled && 'relay-back-button--disabled',
    className
  ].filter(Boolean).join(' ');

  // Determine icon size based on button size
  const iconSize = size === 'small' ? 16 : 20;

  const content = (
    <>
      <MdArrowBackIosNew size={iconSize} className="relay-back-button__icon" />
      <span className="relay-back-button__text">{children}</span>
    </>
  );

  // Render as anchor tag if href is provided
  if (href) {
    return (
      <a
        href={href}
        className={classes}
        aria-disabled={disabled}
        aria-label={typeof children === 'string' ? children : 'Go back'}
        {...props}
      >
        {content}
      </a>
    );
  }

  // Otherwise render as button
  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={typeof children === 'string' ? children : 'Go back'}
      {...props}
    >
      {content}
    </button>
  );
};

BackButton.propTypes = {
  /** Button text content */
  children: PropTypes.node,
  /** Button size */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** URL to navigate to (renders as anchor tag) */
  href: PropTypes.string,
  /** Click handler (renders as button) */
  onClick: PropTypes.func,
  /** Whether the button is disabled */
  disabled: PropTypes.bool,
  /** Additional CSS class names */
  className: PropTypes.string,
};

export { BackButton };
