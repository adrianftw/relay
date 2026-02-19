import React from 'react';
import PropTypes from 'prop-types';
import './DonutChart.css';

/**
 * DonutChart Component
 * SVG-based donut chart for data visualization
 * Uses SVG path elements to render segments
 */
export const DonutChart = ({ 
  data = [],
  size = 160,
  thickness = 24,
  className = '',
  ...props 
}) => {
  // Calculate total value
  const total = data.reduce((sum, item) => sum + item.value, 0);
  
  if (total === 0) {
    return null;
  }

  const center = size / 2;
  const radius = (size / 2) - (thickness / 2);
  
  // Helper function to calculate arc path
  const describeArc = (startAngle, endAngle) => {
    const startRadians = (startAngle - 90) * Math.PI / 180;
    const endRadians = (endAngle - 90) * Math.PI / 180;
    
    const startX = center + radius * Math.cos(startRadians);
    const startY = center + radius * Math.sin(startRadians);
    const endX = center + radius * Math.cos(endRadians);
    const endY = center + radius * Math.sin(endRadians);
    
    const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;
    
    return [
      `M ${startX} ${startY}`,
      `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`
    ].join(' ');
  };

  // Calculate segments
  let currentAngle = 0;
  const segments = data.map((item) => {
    const angle = (item.value / total) * 360;
    const segment = {
      ...item,
      startAngle: currentAngle,
      endAngle: currentAngle + angle,
      path: describeArc(currentAngle, currentAngle + angle)
    };
    currentAngle += angle;
    return segment;
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
      {segments.map((segment, index) => (
        <path
          key={index}
          className="relay-donut-chart__segment"
          d={segment.path}
          fill="none"
          stroke={segment.color}
          strokeWidth={thickness}
          strokeLinecap="butt"
        />
      ))}
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
  /** Additional CSS classes */
  className: PropTypes.string,
};

DonutChart.defaultProps = {
  data: [],
  size: 160,
  thickness: 24,
  className: '',
};
