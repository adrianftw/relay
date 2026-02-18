import React from 'react';
import PropTypes from 'prop-types';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import './LinkButton.css';

/**
 * LinkButton component - A text link with optional arrow icons
 * Uses Relay design tokens and Material Design icons
 */
const LinkButton = ({ 
  children = 'Link',
  size = 'medium',
  icon = 'none',
  href,
  onClick,
  disabled = false,
  className = '',
  ...props 
}) => {
  const classes = [
    'relay-link-button',
    `relay-link-button--${size}`,
    disabled && 'relay-link-button--disabled',
    className
  ].filter(Boolean).join(' ');

  // Determine icon size based on button size
  const iconSize = ['xs', 'small'].includes(size) ? 16 : 24;

  const content = (
    <>
      {icon === 'left' && <MdArrowBack size={iconSize} className="relay-link-button__icon" />}
      <span className="relay-link-button__text">{children}</span>
      {icon === 'right' && <MdArrowForward size={iconSize} className="relay-link-button__icon" />}
    </>
  );

  // Render as anchor tag if href is provided
  if (href) {
    return (
      <a
        href={href}
        className={classes}
        aria-disabled={disabled}
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
      {...props}
    >
      {content}
    </button>
  );
};

LinkButton.propTypes = {
  /** Button text content */
  children: PropTypes.node,
  /** Size variant */
  size: PropTypes.oneOf(['xs', 'small', 'medium', 'large']),
  /** Icon position */
  icon: PropTypes.oneOf(['none', 'left', 'right']),
  /** Link URL (renders as anchor tag) */
  href: PropTypes.string,
  /** Click handler (for button variant) */
  onClick: PropTypes.func,
  /** Disabled state */
  disabled: PropTypes.bool,
  /** Additional CSS classes */
  className: PropTypes.string,
};

export default LinkButton;
