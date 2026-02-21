import React from 'react';
import PropTypes from 'prop-types';
import { MdGpsFixed, MdPushPin } from 'react-icons/md';
import './RowIcon.css';

/**
 * RowIcon component - Small icon for row actions
 * Design specs from Figma:
 * - Size: 23px × 23px
 * - Variants: Focus (GPS) or Pin
 * - Types: Light (on white background) or Dark (on purple background)
 * - Uses Google Material Icons
 */
const RowIcon = ({
  icon = 'focus',
  type = 'light',
  className = '',
  onClick,
  ...props
}) => {
  const classes = [
    'relay-row-icon',
    `relay-row-icon--${type}`,
    className
  ].filter(Boolean).join(' ');

  const IconComponent = icon === 'pin' ? MdPushPin : MdGpsFixed;

  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
      aria-label={icon === 'pin' ? 'Pin row' : 'Focus on row'}
      {...props}
    >
      <IconComponent className="relay-row-icon__svg" size={15} />
    </button>
  );
};

RowIcon.propTypes = {
  /** Icon variant - 'focus' or 'pin' */
  icon: PropTypes.oneOf(['focus', 'pin']),
  /** Type variant - 'light' (default) or 'dark' (for purple backgrounds) */
  type: PropTypes.oneOf(['light', 'dark']),
  /** Additional CSS classes */
  className: PropTypes.string,
  /** Click handler */
  onClick: PropTypes.func,
};

export default RowIcon;
