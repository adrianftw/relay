import React from 'react';
import { Navigation } from '../components/Navigation/Navigation';
import './DetailLayout.css';

/**
 * DetailLayout - Layout for detail pages without side menu
 * Full-width layout with only top navigation
 */
export const DetailLayout = ({ children }) => {
  const handleNotificationClick = () => {
    console.log('Notification clicked');
    // Add your notification logic here
  };

  const handleAvatarClick = () => {
    console.log('Avatar clicked');
    // Add your profile/account logic here
  };

  return (
    <div className="detail-layout">
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

      {/* Main page content - full width, no side menu */}
      <main className="detail-layout__page">
        {children}
      </main>
    </div>
  );
};
