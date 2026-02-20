import React from 'react';
import PropTypes from 'prop-types';
import './DonutChart.css';

/**
 * DonutChart Component
 * Renders a donut chart visualization with SVG paths
 * 
 * @param {Array} data - Array of objects with label, value, and color
 * @param {number} size - Diameter of the chart in pixels
 * @param {number} strokeWidth - Width of the donut ring
 */
export const DonutChart = ({ 
  data = [],
  size = 112,
  strokeWidth = 20,
  className = '',
  ...props 
}) => {
  // Calculate total value
  const total = data.reduce((sum, item) => sum + item.value, 0);
  
  // Calculate center and radius
  const center = size / 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  
  // Generate SVG paths for each segment
  let currentAngle = -90; // Start at top
  
  const segments = data.map((item, index) => {
    const percentage = (item.value / total) * 100;
    const segmentAngle = (item.value / total) * 360;
    
    // Calculate start and end points
    const startAngle = currentAngle;
    const endAngle = currentAngle + segmentAngle;
    
    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;
    
    const x1 = center + radius * Math.cos(startRad);
    const y1 = center + radius * Math.sin(startRad);
    const x2 = center + radius * Math.cos(endRad);
    const y2 = center + radius * Math.sin(endRad);
    
    const largeArcFlag = segmentAngle > 180 ? 1 : 0;
    
    const pathData = [
      `M ${x1} ${y1}`,
      `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`
    ].join(' ');
    
    currentAngle = endAngle;
    
    return {
      path: pathData,
      color: item.color,
      percentage,
    };
  });
  
  const classes = [
    'relay-donut-chart',
    className
  ].filter(Boolean).join(' ');
  
  return (
    <svg 
      className={classes}
      width={size} 
      height={size} 
      viewBox={`0 0 ${size} ${size}`}
      {...props}
    >
      {segments.map((segment, index) => (
        <path
          key={index}
          d={segment.path}
          fill="none"
          stroke={segment.color}
          strokeWidth={strokeWidth}
          strokeLinecap="butt"
        />
      ))}
    </svg>
  );
};

DonutChart.propTypes = {
  /** Array of data objects with label, value, and color */
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
  /** Diameter of the chart in pixels */
  size: PropTypes.number,
  /** Width of the donut ring */
  strokeWidth: PropTypes.number,
  /** Additional CSS classes */
  className: PropTypes.string,
};

DonutChart.defaultProps = {
  size: 112,
  strokeWidth: 20,
  className: '',
};
