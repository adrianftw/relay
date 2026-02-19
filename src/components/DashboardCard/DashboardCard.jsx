import React from 'react';
import PropTypes from 'prop-types';
import './DashboardCard.css';

/**
 * DashboardCard Component
 * Simple stat card for displaying metrics on dashboard
 * 
 * Design from Figma:
 * - Background: White (--relay-gray-01)
 * - Border: Gray 03 (--relay-gray-03)
 * - Border radius: 8px (--relay-radius-02)
 * - Padding: 24px/40px (--relay-space-04/--relay-space-05)
 * - Title: Paragraph/Baseline Bold (16px/22px, Helvetica Bold)
 * - Value: Header/H1 (36px/42px, Helvetica Bold, Purple)
 */
export const DashboardCard = ({ 
  title = 'QR Scans',
  value = '9%',
  className = '',
  ...props 
}) => {
  const classes = [
    'relay-dashboard-card',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      <h3 className="relay-dashboard-card__title">
        {title}
      </h3>
      <div className="relay-dashboard-card__value-container">
        <p className="relay-dashboard-card__value">
          {value}
        </p>
      </div>
    </div>
  );
};

DashboardCard.propTypes = {
  /** Card title/label */
  title: PropTypes.string,
  /** Card value/metric */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Additional CSS classes */
  className: PropTypes.string,
};

DashboardCard.defaultProps = {
  title: 'QR Scans',
  value: '9%',
  className: '',
};
