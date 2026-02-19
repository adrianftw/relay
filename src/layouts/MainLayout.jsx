import React from 'react';
import { Navigation } from '../components/Navigation/Navigation';
import Menu from '../components/Menu/Menu';
import './MainLayout.css';

/**
 * MainLayout - Primary application layout with navigation and menu
 * Wraps page content with consistent Navigation header and side Menu
 */
export const MainLayout = ({ children }) => {
  const handleNotificationClick = () => {
    console.log('Notification clicked');
    // Add your notification logic here
  };

  const handleAvatarClick = () => {
    console.log('Avatar clicked');
    // Add your profile/account logic here
  };

  return (
    <div className="main-layout">
      {/* Top Navigation */}
      <Navigation
        logoSrc="http://localhost:3845/assets/90a55255a065ff32c2e312ff48b05a5fc5be5fb6.svg"
        logoAlt="USPS Logo"
        title="Every Door Direct Mail"
        avatarText="A"
        notificationTooltip="Notifications"
        avatarTooltip="Account"
        onNotificationClick={handleNotificationClick}
        onAvatarClick={handleAvatarClick}
      />

      {/* Content wrapper with Menu and Page content */}
      <div className="main-layout__content">
        {/* Left Menu */}
        <Menu />

        {/* Main page content area */}
        <main className="main-layout__page">
          {children}
        </main>
      </div>
    </div>
  );
};
