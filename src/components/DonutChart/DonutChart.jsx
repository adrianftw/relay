import React from 'react';
import PropTypes from 'prop-types';
import './DonutChart.css';

/**
 * DonutChart Component
 * SVG-based donut chart for data visualization
 * Follows Material Design principles for data visualization
 * 
 * Design specs:
 * - Size: 160px × 160px
 * - Donut thickness: 24px
 * - Smooth animations
 * - Responsive to data changes
 */
export const DonutChart = ({ 
  data = [],
  size = 160,
  thickness = 24,
  showAnimation = true,
  className = '',
  ...props 
}) => {
  // Calculate total value
  const total = data.reduce((sum, item) => sum + item.value, 0);
  
  // Calculate percentages and cumulative angles
  const radius = (size / 2) - (thickness / 2);
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;
  
  let cumulativePercent = 0;
  
  const segments = data.map((item, index) => {
    const percent = (item.value / total) * 100;
    const angle = (item.value / total) * 360;
    const startAngle = cumulativePercent * 3.6; // Convert percent to degrees
    
    cumulativePercent += percent;
    
    return {
      ...item,
      percent,
      angle,
      startAngle,
      strokeDasharray: circumference,
      strokeDashoffset: circumference * (1 - percent / 100),
    };
  });

  const classes = [
    'relay-donut-chart',
    showAnimation ? 'relay-donut-chart--animated' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <svg
      className={classes}
      width={size}
      height={size}
      style={{ overflow: 'visible' }}
      {...props}
    >
      {/* Background circle */}
      <circle
        className="relay-donut-chart__background"
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        stroke="var(--relay-gray-03)"
        strokeWidth={thickness}
      />
      
      {/* Data segments */}
      {segments.map((segment, index) => {
        const rotation = segments
          .slice(0, index)
          .reduce((sum, s) => sum + s.angle, -90); // Start from top (-90deg)
        
        return (
          <circle
            key={index}
            className="relay-donut-chart__segment"
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke={segment.color}
            strokeWidth={thickness}
            strokeDasharray={`${segment.percent * circumference / 100} ${circumference}`}
            strokeDashoffset={0}
            transform={`rotate(${rotation} ${center} ${center})`}
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
};

DonutChart.propTypes = {
  /** Array of data objects with value, color, and label */
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
  /** Chart size in pixels */
  size: PropTypes.number,
  /** Donut ring thickness in pixels */
  thickness: PropTypes.number,
  /** Enable animations */
  showAnimation: PropTypes.bool,
  /** Additional CSS classes */
  className: PropTypes.string,
};

DonutChart.defaultProps = {
  data: [],
  size: 160,
  thickness: 24,
  showAnimation: true,
  className: '',
};
