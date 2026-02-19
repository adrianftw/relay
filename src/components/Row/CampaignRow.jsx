import React from 'react';
import PropTypes from 'prop-types';
import { MdMoreVert } from 'react-icons/md';
import { Tag } from '../Tag/Tag';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import './CampaignRow.css';

/**
 * CampaignRow component - Displays campaign information in a table row
 * Uses Relay design tokens and existing components
 */
const CampaignRow = ({ 
  campaignName = 'Spring Mail Campaign',
  date = '8/16',
  status = 'Delivery In Progress',
  statusVariant = 'blue',
  progress = 68,
  onCampaignClick,
  onMenuClick,
  href,
  className = '',
  ...props 
}) => {
  const classes = [
    'relay-campaign-row',
    className
  ].filter(Boolean).join(' ');

  const handleCampaignClick = (e) => {
    if (onCampaignClick && !href) {
      e.preventDefault();
      onCampaignClick();
    }
  };

  const campaignContent = (
    <span className="relay-campaign-row__name">
      {campaignName}
    </span>
  );

  return (
    <div className={classes} {...props}>
      <div className="relay-campaign-row__content">
        {/* Campaign Name */}
        {href ? (
          <a 
            href={href} 
            className="relay-campaign-row__link"
            onClick={handleCampaignClick}
          >
            {campaignContent}
          </a>
        ) : (
          <button
            type="button"
            className="relay-campaign-row__link"
            onClick={handleCampaignClick}
          >
            {campaignContent}
          </button>
        )}

        {/* Date */}
        <span className="relay-campaign-row__date">{date}</span>

        {/* Status Tag */}
        <div className="relay-campaign-row__status">
          <Tag variant={statusVariant} label={status} />
        </div>

        {/* Progress Bar */}
        <div className="relay-campaign-row__progress">
          <ProgressBar value={progress} showLabel size="medium" />
        </div>

        {/* More Menu Icon */}
        <button
          type="button"
          className="relay-campaign-row__menu"
          onClick={onMenuClick}
          aria-label="More options"
        >
          <MdMoreVert size={32} />
        </button>
      </div>
    </div>
  );
};

CampaignRow.propTypes = {
  /** Campaign name */
  campaignName: PropTypes.string,
  /** Date or count display */
  date: PropTypes.string,
  /** Status text */
  status: PropTypes.string,
  /** Status tag color variant */
  statusVariant: PropTypes.oneOf(['purple', 'blue', 'green', 'red', 'gray']),
  /** Progress percentage (0-100) */
  progress: PropTypes.number,
  /** Campaign click handler */
  onCampaignClick: PropTypes.func,
  /** Menu click handler */
  onMenuClick: PropTypes.func,
  /** Link URL for campaign */
  href: PropTypes.string,
  /** Additional CSS classes */
  className: PropTypes.string,
};

export default CampaignRow;
