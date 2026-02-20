import React from 'react';
import PropTypes from 'prop-types';
import { MdQrCode2 } from 'react-icons/md';
import './IconLockup.css';

/**
 * IconLockup Component
 * Small icon with label for dashboard cards
 * 
 * Design from Figma:
 * - Two variants: Light (purple bg) and Dark (dark purple bg)
 * - Icon: 16px QR code with 4px padding, rounded corners
 * - Text: 12px/16px Helvetica Regular
 * - Gap: 8px between icon and text
 */
export const IconLockup = ({ 
  icon: Icon = MdQrCode2,
  label = 'QR Scans',
  variant = 'light',
  className = '',
  ...props 
}) => {
  const classes = [
    'relay-icon-lockup',
    `relay-icon-lockup--${variant}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      <div className="relay-icon-lockup__icon-wrapper">
        <Icon className="relay-icon-lockup__icon" />
      </div>
      <p className="relay-icon-lockup__label">{label}</p>
    </div>
  );
};

IconLockup.propTypes = {
  /** Icon component from react-icons */
  icon: PropTypes.elementType,
  /** Label text */
  label: PropTypes.string,
  /** Visual variant */
  variant: PropTypes.oneOf(['light', 'dark']),
  /** Additional CSS classes */
  className: PropTypes.string,
};

IconLockup.defaultProps = {
  icon: MdQrCode2,
  label: 'QR Scans',
  variant: 'light',
  className: '',
};
