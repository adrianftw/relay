import React from 'react';
import PropTypes from 'prop-types';
import MenuIcons from './MenuIcons';
import './MenuTabs.css';

/**
 * MenuTabs component - Navigation tab with icon and text
 * Uses Relay design tokens for consistent styling
 */
const MenuTabs = ({ 
  icon = 'analytics',
  children = 'Analytics',
  active = false,
  onClick,
  href,
  className = '',
  ...props 
}) => {
  const classes = [
    'relay-menu-tab',
    active && 'relay-menu-tab--active',
    className
  ].filter(Boolean).join(' ');

  const content = (
    <>
      <MenuIcons 
        icon={icon} 
        color={active ? 'white' : 'purple'} 
        size={16} 
        className="relay-menu-tab__icon"
      />
      <span className="relay-menu-tab__text">{children}</span>
    </>
  );

  // Render as anchor tag if href is provided
  if (href) {
    return (
      <a
        href={href}
        className={classes}
        aria-current={active ? 'page' : undefined}
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
      aria-pressed={active}
      {...props}
    >
      {content}
    </button>
  );
};

MenuTabs.propTypes = {
  /** Icon type */
  icon: PropTypes.oneOf([
    'campaign',
    'analytics',
    'notifications',
    'settings',
    'account',
    'support'
  ]),
  /** Tab text content */
  children: PropTypes.node,
  /** Active state */
  active: PropTypes.bool,
  /** Click handler (for button variant) */
  onClick: PropTypes.func,
  /** Link URL (renders as anchor tag) */
  href: PropTypes.string,
  /** Additional CSS classes */
  className: PropTypes.string,
};

export default MenuTabs;
