import React from 'react';
import PropTypes from 'prop-types';
import { MdNotificationsActive } from 'react-icons/md';
import { Tooltip } from '../Tooltip/Tooltip';
import './Navigation.css';

/**
 * Navigation component - Minimal top navigation bar with logo and icons
 * Uses Relay design tokens and Material Design icons
 */
export const Navigation = ({ 
  logoSrc = null,
  logoAlt = 'USPS Logo',
  title = 'Every Door Direct Mail',
  avatarText = 'A',
  onNotificationClick,
  onAvatarClick,
  notificationTooltip = 'Notifications',
  avatarTooltip = 'Account',
  className = '',
  ...props 
}) => {
  const classes = [
    'relay-navigation',
    className
  ].filter(Boolean).join(' ');

  return (
    <nav className={classes} {...props}>
      {/* Left section: Logo and title */}
      <div className="relay-navigation__left">
        {logoSrc && (
          <img 
            src={logoSrc} 
            alt={logoAlt} 
            className="relay-navigation__logo"
          />
        )}
        <span className="relay-navigation__title">{title}</span>
      </div>

      {/* Right section: Action icons */}
      <div className="relay-navigation__right">
        {/* Notification icon with tooltip */}
        <Tooltip content={notificationTooltip} position="bottom">
          <button
            className="relay-navigation__icon-button"
            onClick={onNotificationClick}
            aria-label={notificationTooltip}
          >
            <MdNotificationsActive size={24} />
          </button>
        </Tooltip>

        {/* Avatar with tooltip */}
        <Tooltip content={avatarTooltip} position="bottom">
          <button
            className="relay-navigation__avatar"
            onClick={onAvatarClick}
            aria-label={avatarTooltip}
          >
            {avatarText}
          </button>
        </Tooltip>
      </div>
    </nav>
  );
};

Navigation.propTypes = {
  logoSrc: PropTypes.string,
  logoAlt: PropTypes.string,
  title: PropTypes.string,
  avatarText: PropTypes.string,
  onNotificationClick: PropTypes.func,
  onAvatarClick: PropTypes.func,
  notificationTooltip: PropTypes.string,
  avatarTooltip: PropTypes.string,
  className: PropTypes.string,
};
