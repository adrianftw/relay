import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import RowIcon from './RowIcon';
import './AreaRow.css';

/**
 * AreaRow component - Displays area (ZIP code) information in a table row
 * Uses Relay design tokens and existing ProgressBar component
 * 
 * Design specs from Figma:
 * - Width: 820px
 * - Padding: 16px (--relay-space-03)
 * - Border bottom: 1px solid #DADFE4 (--relay-gray-04)
 * - ZIP code: Paragraph/S Link (14px/20px Bold, underlined, purple)
 * - Metrics: Paragraph/S (14px/20px Regular, black)
 * - Progress bar: 124px width, 10px height, blue fill
 */
const AreaRow = ({ 
  zip = '9375',
  qrScans = '5.6%',
  conversion = '.02%',
  progress = 68,
  onZipClick,
  onFocus,
  onPin,
  href,
  className = '',
  ...props 
}) => {
  const classes = [
    'relay-area-row',
    className
  ].filter(Boolean).join(' ');

  const handleZipClick = (e) => {
    if (onZipClick && !href) {
      e.preventDefault();
      onZipClick();
    }
  };

  const zipContent = (
    <span className="relay-area-row__zip-text">
      {zip}
    </span>
  );

  return (
    <div className={classes} {...props}>
      <div className="relay-area-row__content">
        {/* ZIP Code Link */}
        {href ? (
          <a 
            href={href} 
            className="relay-area-row__link"
            onClick={handleZipClick}
          >
            {zipContent}
          </a>
        ) : (
          <button
            type="button"
            className="relay-area-row__link"
            onClick={handleZipClick}
          >
            {zipContent}
          </button>
        )}

        {/* Area Actions - Focus and Pin icons */}
        <div className="relay-area-row__actions">
          <RowIcon icon="focus" type="light" onClick={onFocus} />
          <RowIcon icon="pin" type="light" onClick={onPin} />
        </div>

        {/* QR Scans Percentage */}
        <span className="relay-area-row__metric">{qrScans}</span>

        {/* Conversion Percentage */}
        <span className="relay-area-row__metric">{conversion}</span>

        {/* Progress Bar */}
        <div className="relay-area-row__progress">
          <ProgressBar value={progress} showLabel size="medium" />
        </div>
      </div>
    </div>
  );
};

AreaRow.propTypes = {
  /** ZIP code or area identifier */
  zip: PropTypes.string,
  /** QR Scans percentage */
  qrScans: PropTypes.string,
  /** Conversion rate percentage */
  conversion: PropTypes.string,
  /** Progress percentage (0-100) */
  progress: PropTypes.number,
  /** ZIP code click handler */
  onZipClick: PropTypes.func,
  /** Link URL for ZIP code */
  href: PropTypes.string,
  /** Additional CSS classes */
  className: PropTypes.string,
};

export default AreaRow;
