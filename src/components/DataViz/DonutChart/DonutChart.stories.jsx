import React from 'react';
import { DonutChart } from './DonutChart';

export default {
  title: 'Data Viz/DonutChart',
  component: DonutChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

// Default story with 4 segments
export const Default = {
  args: {
    size: 160,
    thickness: 24,
    data: [
      { label: 'Delivered', value: 3452, color: '#333366' },
      { label: 'Enroute', value: 2100, color: '#6ED0F6' },
      { label: 'Processing', value: 1800, color: '#D8D8D8' },
      { label: 'Returned', value: 650, color: '#EC221F' },
    ],
  },
};

// Two segments
export const TwoSegments = {
  args: {
    size: 160,
    thickness: 24,
    data: [
      { label: 'Complete', value: 75, color: '#333366' },
      { label: 'Incomplete', value: 25, color: '#D8D8D8' },
    ],
  },
};

// Three segments
export const ThreeSegments = {
  args: {
    size: 160,
    thickness: 24,
    data: [
      { label: 'Success', value: 60, color: '#00A91C' },
      { label: 'Warning', value: 30, color: '#FFBE2E' },
      { label: 'Error', value: 10, color: '#EC221F' },
    ],
  },
};

// Large chart
export const LargeSize = {
  args: {
    size: 240,
    thickness: 32,
    data: [
      { label: 'Category A', value: 40, color: '#333366' },
      { label: 'Category B', value: 30, color: '#6ED0F6' },
      { label: 'Category C', value: 20, color: '#6464B7' },
      { label: 'Category D', value: 10, color: '#EC221F' },
    ],
  },
};

// Small chart
export const SmallSize = {
  args: {
    size: 100,
    thickness: 16,
    data: [
      { label: 'Yes', value: 65, color: '#00A91C' },
      { label: 'No', value: 35, color: '#EC221F' },
    ],
  },
};

// Thin donut
export const ThinDonut = {
  args: {
    size: 160,
    thickness: 12,
    data: [
      { label: 'Delivered', value: 3452, color: '#333366' },
      { label: 'Enroute', value: 2100, color: '#6ED0F6' },
      { label: 'Processing', value: 1800, color: '#D8D8D8' },
      { label: 'Returned', value: 650, color: '#EC221F' },
    ],
  },
};

// Thick donut
export const ThickDonut = {
  args: {
    size: 160,
    thickness: 40,
    data: [
      { label: 'Delivered', value: 3452, color: '#333366' },
      { label: 'Enroute', value: 2100, color: '#6ED0F6' },
      { label: 'Processing', value: 1800, color: '#D8D8D8' },
      { label: 'Returned', value: 650, color: '#EC221F' },
    ],
  },
};

// Using Relay token colors
export const RelayColors = {
  args: {
    size: 160,
    thickness: 24,
    data: [
      { label: 'Purple', value: 4000, color: 'var(--relay-purple-base)' },
      { label: 'Blue', value: 3000, color: 'var(--relay-blue-base)' },
      { label: 'Success', value: 2000, color: 'var(--relay-success-base)' },
      { label: 'Warning', value: 1000, color: 'var(--relay-warning-base)' },
    ],
  },
};

// Multiple charts comparison
export const MultipleCharts = () => (
  <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
    <div style={{ textAlign: 'center' }}>
      <DonutChart
        size={120}
        thickness={20}
        data={[
          { label: 'Complete', value: 85, color: '#00A91C' },
          { label: 'Incomplete', value: 15, color: '#D8D8D8' },
        ]}
      />
      <p style={{ marginTop: '8px', fontSize: '14px', color: 'var(--relay-gray-07)' }}>Region A</p>
    </div>
    <div style={{ textAlign: 'center' }}>
      <DonutChart
        size={120}
        thickness={20}
        data={[
          { label: 'Complete', value: 65, color: '#00A91C' },
          { label: 'Incomplete', value: 35, color: '#D8D8D8' },
        ]}
      />
      <p style={{ marginTop: '8px', fontSize: '14px', color: 'var(--relay-gray-07)' }}>Region B</p>
    </div>
    <div style={{ textAlign: 'center' }}>
      <DonutChart
        size={120}
        thickness={20}
        data={[
          { label: 'Complete', value: 92, color: '#00A91C' },
          { label: 'Incomplete', value: 8, color: '#D8D8D8' },
        ]}
      />
      <p style={{ marginTop: '8px', fontSize: '14px', color: 'var(--relay-gray-07)' }}>Region C</p>
    </div>
  </div>
);
