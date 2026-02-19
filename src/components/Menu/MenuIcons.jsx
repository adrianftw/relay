import React from 'react';
import PropTypes from 'prop-types';
import { 
  MdCampaign, 
  MdAnalytics, 
  MdNotifications, 
  MdSettings,
  MdAccountCircle,
  MdSupport 
} from 'react-icons/md';
import './MenuIcons.css';

/**
 * MenuIcons component - Icon set for menu navigation items
 * Uses Material Design icons with Relay design tokens
 */
const MenuIcons = ({ 
  icon = 'analytics',
  color = 'purple',
  size = 16,
  className = '',
  ...props 
}) => {
  const iconComponents = {
    campaign: MdCampaign,
    analytics: MdAnalytics,
    notifications: MdNotifications,
    settings: MdSettings,
    account: MdAccountCircle,
    support: MdSupport,
  };

  const IconComponent = iconComponents[icon] || MdAnalytics;

  const classes = [
    'relay-menu-icon',
    `relay-menu-icon--${color}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <span className={classes} {...props}>
      <IconComponent size={size} />
    </span>
  );
};

MenuIcons.propTypes = {
  /** Icon type */
  icon: PropTypes.oneOf([
    'campaign',
    'analytics',
    'notifications',
    'settings',
    'account',
    'support'
  ]),
  /** Icon color variant */
  color: PropTypes.oneOf(['purple', 'white']),
  /** Icon size in pixels */
  size: PropTypes.number,
  /** Additional CSS classes */
  className: PropTypes.string,
};

export default MenuIcons;
