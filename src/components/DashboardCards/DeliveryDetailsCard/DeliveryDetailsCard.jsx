import React from 'react';
import PropTypes from 'prop-types';
import { MdQrCode2 } from 'react-icons/md';
import { IconLockup } from '../IconLockup';
import { DonutChart } from '../DonutChart';
import './DeliveryDetailsCard.css';

/**
 * DeliveryDetailsCard Component
 * Dashboard card with dark background showing delivery statistics
 * 
 * Design from Figma:
 * - Dark purple background (#333366)
 * - Dark IconLockup at top
 * - Large total number
 * - Donut chart with legend showing breakdown
 * - 350px × 240px fixed size
 */
export const DeliveryDetailsCard = ({ 
  icon = MdQrCode2,
  label = 'QR Scans',
  total = '50,5689',
  data = [
    { label: 'Enroute', value: 3452, color: '#7DB7F1' },
    { label: 'Processing', value: 3452, color: '#FFFFFF' },
    { label: 'Delivered', value: 3452, color: '#A6A6EF' },
    { label: 'Returned', value: 3452, color: '#DA291C' },
  ],
  className = '',
  ...props 
}) => {
  const classes = [
    'relay-delivery-details-card',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      <IconLockup 
        icon={icon} 
        label={label} 
        variant="dark"
      />
      
      <div className="relay-delivery-details-card__content">
        <div className="relay-delivery-details-card__left">
          <div className="relay-delivery-details-card__total">
            <p className="relay-delivery-details-card__total-value">{total}</p>
          </div>
          
          <div className="relay-delivery-details-card__legend">
            {data.map((item, index) => (
              <div key={index} className="relay-delivery-details-card__legend-item">
                <div 
                  className="relay-delivery-details-card__legend-color" 
                  style={{ backgroundColor: item.color }}
                />
                <div className="relay-delivery-details-card__legend-text">
                  <p className="relay-delivery-details-card__legend-label">{item.label}</p>
                  <p className="relay-delivery-details-card__legend-value">
                    {item.value.toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relay-delivery-details-card__chart">
          <DonutChart 
            data={data}
            size={171}
            strokeWidth={20}
          />
        </div>
      </div>
    </div>
  );
};

DeliveryDetailsCard.propTypes = {
  /** Icon component from react-icons */
  icon: PropTypes.elementType,
  /** Label text for icon lockup */
  label: PropTypes.string,
  /** Large total number */
  total: PropTypes.string,
  /** Array of data for donut chart and legend */
  data: PropTypes.arrayOf(
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
  icon: MdQrCode2,
  label: 'QR Scans',
  total: '50,5689',
  data: [
    { label: 'Enroute', value: 3452, color: '#7DB7F1' },
    { label: 'Processing', value: 3452, color: '#FFFFFF' },
    { label: 'Delivered', value: 3452, color: '#A6A6EF' },
    { label: 'Returned', value: 3452, color: '#DA291C' },
  ],
  className: '',
};
