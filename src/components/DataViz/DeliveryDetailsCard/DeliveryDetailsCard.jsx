import React from 'react';
import PropTypes from 'prop-types';
import { DonutChart } from '../DataViz/DonutChart/DonutChart';
import './DeliveryDetailsCard.css';

/**
 * DeliveryDetailsCard Component
 * Card displaying delivery statistics with donut chart visualization
 * 
 * Design from Figma:
 * - Card: 488px × 260px, white background, gray-03 border
 * - Title: 18px/28px Helvetica Bold
 * - Total count: 31px/44px Helvetica Bold, Purple
 * - Legend items: 12px labels, 14px values
 * - 4 status categories with color indicators
 * - DonutChart: 160px visualization
 */
export const DeliveryDetailsCard = ({ 
  title = 'Delivery Details',
  totalCount = 102137103,
  subtitle = 'Parcels being delivered across 2 regions',
  deliveryData = [
    { label: 'Enroute', value: 3452, color: '#6ED0F6' },
    { label: 'Processing', value: 3452, color: '#D8D8D8' },
    { label: 'Delivered', value: 3452, color: '#333366' },
    { label: 'Returned', value: 3452, color: '#EC221F' },
  ],
  className = '',
  ...props 
}) => {
  const classes = [
    'relay-delivery-details-card',
    className
  ].filter(Boolean).join(' ');

  // Format large numbers with commas
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <div className={classes} {...props}>
      {/* Card Title */}
      <h2 className="relay-delivery-details-card__title">{title}</h2>
      
      <div className="relay-delivery-details-card__content">
        {/* Left Section: Statistics */}
        <div className="relay-delivery-details-card__stats">
          {/* Total Count */}
          <div className="relay-delivery-details-card__total">
            <p className="relay-delivery-details-card__count">
              {formatNumber(totalCount)}
            </p>
            <p className="relay-delivery-details-card__subtitle">{subtitle}</p>
          </div>

          {/* Legend */}
          <div className="relay-delivery-details-card__legend">
            {/* Row 1 */}
            <div className="relay-delivery-details-card__legend-row">
              <div className="relay-delivery-details-card__legend-item">
                <div className="relay-delivery-details-card__legend-indicator-wrapper">
                  <div 
                    className="relay-delivery-details-card__legend-indicator"
                    style={{ backgroundColor: deliveryData[0].color }}
                  />
                </div>
                <div className="relay-delivery-details-card__legend-text">
                  <p className="relay-delivery-details-card__legend-label">{deliveryData[0].label}</p>
                  <p className="relay-delivery-details-card__legend-value">{formatNumber(deliveryData[0].value)}</p>
                </div>
              </div>
              <div className="relay-delivery-details-card__legend-item">
                <div className="relay-delivery-details-card__legend-indicator-wrapper">
                  <div 
                    className="relay-delivery-details-card__legend-indicator"
                    style={{ backgroundColor: deliveryData[1].color }}
                  />
                </div>
                <div className="relay-delivery-details-card__legend-text">
                  <p className="relay-delivery-details-card__legend-label">{deliveryData[1].label}</p>
                  <p className="relay-delivery-details-card__legend-value">{formatNumber(deliveryData[1].value)}</p>
                </div>
              </div>
            </div>
            
            {/* Row 2 */}
            <div className="relay-delivery-details-card__legend-row">
              <div className="relay-delivery-details-card__legend-item">
                <div className="relay-delivery-details-card__legend-indicator-wrapper">
                  <div 
                    className="relay-delivery-details-card__legend-indicator"
                    style={{ backgroundColor: deliveryData[2].color }}
                  />
                </div>
                <div className="relay-delivery-details-card__legend-text">
                  <p className="relay-delivery-details-card__legend-label">{deliveryData[2].label}</p>
                  <p className="relay-delivery-details-card__legend-value">{formatNumber(deliveryData[2].value)}</p>
                </div>
              </div>
              <div className="relay-delivery-details-card__legend-item">
                <div className="relay-delivery-details-card__legend-indicator-wrapper">
                  <div 
                    className="relay-delivery-details-card__legend-indicator"
                    style={{ backgroundColor: deliveryData[3].color }}
                  />
                </div>
                <div className="relay-delivery-details-card__legend-text">
                  <p className="relay-delivery-details-card__legend-label">{deliveryData[3].label}</p>
                  <p className="relay-delivery-details-card__legend-value">{formatNumber(deliveryData[3].value)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Chart */}
        <div className="relay-delivery-details-card__chart">
          <DonutChart
            data={deliveryData}
            size={160}
            thickness={24}
          />
        </div>
      </div>
    </div>
  );
};

DeliveryDetailsCard.propTypes = {
  /** Card title */
  title: PropTypes.string,
  /** Total count to display */
  totalCount: PropTypes.number,
  /** Subtitle text */
  subtitle: PropTypes.string,
  /** Array of delivery data with label, value, and color */
  deliveryData: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
    })
  ),
  /** Additional CSS classes */
  className: PropTypes.string,
};

DeliveryDetailsCard.defaultProps = {
  title: 'Delivery Details',
  totalCount: 102137103,
  subtitle: 'Parcels being delivered across 2 regions',
  deliveryData: [
    { label: 'Enroute', value: 3452, color: '#6ED0F6' },
    { label: 'Processing', value: 3452, color: '#D8D8D8' },
    { label: 'Delivered', value: 3452, color: '#333366' },
    { label: 'Returned', value: 3452, color: '#EC221F' },
  ],
  className: '',
};
