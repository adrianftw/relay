import React from 'react';
import { DonutChart } from './DonutChart';

export default {
  title: 'Dashboard Cards/DonutChart',
  component: DonutChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

// Default - 4 segments
export const Default = {
  args: {
    data: [
      { label: 'Enroute', value: 3452, color: '#7DB7F1' },
      { label: 'Processing', value: 3452, color: '#FFFFFF' },
      { label: 'Delivered', value: 3452, color: '#A6A6EF' },
      { label: 'Returned', value: 3452, color: '#DA291C' },
    ],
    size: 112,
    strokeWidth: 20,
  },
};

// Large size
export const Large = {
  args: {
    data: [
      { label: 'Enroute', value: 3452, color: '#7DB7F1' },
      { label: 'Processing', value: 3452, color: '#FFFFFF' },
      { label: 'Delivered', value: 3452, color: '#A6A6EF' },
      { label: 'Returned', value: 3452, color: '#DA291C' },
    ],
    size: 200,
    strokeWidth: 30,
  },
};

// Small size
export const Small = {
  args: {
    data: [
      { label: 'Enroute', value: 3452, color: '#7DB7F1' },
      { label: 'Processing', value: 3452, color: '#FFFFFF' },
      { label: 'Delivered', value: 3452, color: '#A6A6EF' },
      { label: 'Returned', value: 3452, color: '#DA291C' },
    ],
    size: 80,
    strokeWidth: 12,
  },
};

// Uneven distribution
export const UnevenDistribution = {
  args: {
    data: [
      { label: 'Category A', value: 8900, color: '#7DB7F1' },
      { label: 'Category B', value: 4500, color: '#A6A6EF' },
      { label: 'Category C', value: 1843, color: '#FFFFFF' },
      { label: 'Category D', value: 400, color: '#DA291C' },
    ],
    size: 112,
    strokeWidth: 20,
  },
};

// Three segments
export const ThreeSegments = {
  args: {
    data: [
      { label: 'Active', value: 6000, color: '#A6A6EF' },
      { label: 'Pending', value: 3000, color: '#7DB7F1' },
      { label: 'Inactive', value: 1000, color: '#DA291C' },
    ],
    size: 112,
    strokeWidth: 20,
  },
};

// Two segments
export const TwoSegments = {
  args: {
    data: [
      { label: 'Success', value: 8500, color: '#A6A6EF' },
      { label: 'Failed', value: 1500, color: '#DA291C' },
    ],
    size: 112,
    strokeWidth: 20,
  },
};

// Multiple charts
export const MultipleCharts = () => (
  <div style={{ 
    display: 'flex', 
    gap: '40px',
    flexWrap: 'wrap',
    padding: '20px'
  }}>
    <DonutChart 
      data={[
        { label: 'A', value: 3452, color: '#7DB7F1' },
        { label: 'B', value: 3452, color: '#FFFFFF' },
        { label: 'C', value: 3452, color: '#A6A6EF' },
        { label: 'D', value: 3452, color: '#DA291C' },
      ]}
      size={112}
      strokeWidth={20}
    />
    <DonutChart 
      data={[
        { label: 'Success', value: 8500, color: '#A6A6EF' },
        { label: 'Failed', value: 1500, color: '#DA291C' },
      ]}
      size={112}
      strokeWidth={20}
    />
    <DonutChart 
      data={[
        { label: 'Active', value: 6000, color: '#A6A6EF' },
        { label: 'Pending', value: 3000, color: '#7DB7F1' },
        { label: 'Inactive', value: 1000, color: '#DA291C' },
      ]}
      size={112}
      strokeWidth={20}
    />
  </div>
);
