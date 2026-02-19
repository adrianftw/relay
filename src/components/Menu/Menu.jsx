import React from 'react';
import PropTypes from 'prop-types';
import MenuTabs from './MenuTabs';
import './Menu.css';

/**
 * Menu component - Left-hand navigation menu
 * Uses Relay design tokens for consistent styling
 */
const Menu = ({ 
  activeItem = 'campaigns',
  onNavigate,
  topMenuItems = [
    { id: 'campaigns', icon: 'campaign', label: 'Campaigns' },
    { id: 'analytics', icon: 'analytics', label: 'Analytics' },
    { id: 'notifications', icon: 'notifications', label: 'Notifications' },
  ],
  bottomMenuItems = [
    { id: 'account', icon: 'account', label: 'Account' },
    { id: 'support', icon: 'support', label: 'Support' },
  ],
  showHelpSection = true,
  helpText = 'Get help with a real expert',
  helpAvatar,
  onHelpClick,
  className = '',
  ...props 
}) => {
  const classes = [
    'relay-menu',
    className
  ].filter(Boolean).join(' ');

  const handleItemClick = (itemId) => {
    if (onNavigate) {
      onNavigate(itemId);
    }
  };

  return (
    <nav className={classes} {...props}>
      <div className="relay-menu__container">
        {/* Top menu items */}
        <div className="relay-menu__section relay-menu__section--top">
          {topMenuItems.map(item => (
            <MenuTabs
              key={item.id}
              icon={item.icon}
              active={activeItem === item.id}
              onClick={() => handleItemClick(item.id)}
              href={item.href}
            >
              {item.label}
            </MenuTabs>
          ))}
        </div>

        {/* Bottom section with account/support and help */}
        <div className="relay-menu__section relay-menu__section--bottom">
          <div className="relay-menu__bottom-items">
            {bottomMenuItems.map(item => (
              <MenuTabs
                key={item.id}
                icon={item.icon}
                active={activeItem === item.id}
                onClick={() => handleItemClick(item.id)}
                href={item.href}
              >
                {item.label}
              </MenuTabs>
            ))}
          </div>

          {/* Help section */}
          {showHelpSection && (
            <button 
              className="relay-menu__help"
              onClick={onHelpClick}
              type="button"
            >
              <div className="relay-menu__help-avatar">
                {helpAvatar ? (
                  <img src={helpAvatar} alt="Expert" className="relay-menu__help-avatar-img" />
                ) : (
                  <div className="relay-menu__help-avatar-placeholder">?</div>
                )}
              </div>
              <span className="relay-menu__help-text">{helpText}</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

Menu.propTypes = {
  /** Currently active menu item ID */
  activeItem: PropTypes.string,
  /** Navigation callback function */
  onNavigate: PropTypes.func,
  /** Top menu items array */
  topMenuItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
    })
  ),
  /** Bottom menu items array */
  bottomMenuItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
    })
  ),
  /** Show help section */
  showHelpSection: PropTypes.bool,
  /** Help section text */
  helpText: PropTypes.string,
  /** Help section avatar image URL */
  helpAvatar: PropTypes.string,
  /** Help section click handler */
  onHelpClick: PropTypes.func,
  /** Additional CSS classes */
  className: PropTypes.string,
};

export default Menu;
