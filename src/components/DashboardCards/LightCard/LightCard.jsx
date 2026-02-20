import React from 'react';
import PropTypes from 'prop-types';
import { MdQrCode2 } from 'react-icons/md';
import { IconLockup } from '../IconLockup';
import './LightCard.css';

/**
 * LightCard Component
 * Dashboard card with light purple background for displaying metrics
 * 
 * Design from Figma:
 * - Light purple background (#f3f3ff)
 * - Purple border (#DDDDFF)
 * - Contains IconLockup at top
 * - Large metric value and small description at bottom
 * - 228px × 108px fixed size
 */
export const LightCard = ({ 
  icon = MdQrCode2,
  label = 'QR Scans',
  value = '9%',
  description = '532 scans',
  className = '',
  ...props 
}) => {
  const classes = [
    'relay-light-card',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      <IconLockup 
        icon={icon} 
        label={label} 
        variant="light"
      />
      
      <div className="relay-light-card__stats">
        <p className="relay-light-card__value">{value}</p>
        <p className="relay-light-card__description">{description}</p>
      </div>
    </div>
  );
};

LightCard.propTypes = {
  /** Icon component from react-icons */
  icon: PropTypes.elementType,
  /** Label text for icon lockup */
  label: PropTypes.string,
  /** Large metric value */
  value: PropTypes.string,
  /** Small description text */
  description: PropTypes.string,
  /** Additional CSS classes */
  className: PropTypes.string,
};

LightCard.defaultProps = {
  icon: MdQrCode2,
  label: 'QR Scans',
  value: '9%',
  description: '532 scans',
  className: '',
};
