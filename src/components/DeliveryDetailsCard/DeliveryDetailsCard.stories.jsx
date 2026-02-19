import React from 'react';
import { DeliveryDetailsCard } from './DeliveryDetailsCard';

export default {
  title: 'Components/DeliveryDetailsCard',
  component: DeliveryDetailsCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Delivery details card with real SVG-based donut chart visualization. Displays delivery statistics across 4 categories. Uses Relay design tokens.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Card title',
    },
    totalCount: {
      control: 'number',
      description: 'Total count number',
    },
    subtitle: {
      control: 'text',
      description: 'Subtitle description',
    },
    deliveryData: {
      control: 'object',
      description: 'Array of delivery data objects',
    },
  },
};

// Default story - From Figma
export const Default = {
  args: {
    title: 'Delivery Details',
    totalCount: 102137103,
    subtitle: 'Parcels being delivered across 2 regions',
    deliveryData: [
      { label: 'Enroute', value: 3452, color: '#6ED0F6' },
      { label: 'Processing', value: 3452, color: '#D8D8D8' },
      { label: 'Delivered', value: 3452, color: '#333366' },
      { label: 'Returned', value: 3452, color: '#EC221F' },
    ],
  },
};

// Different data distribution
export const UnevenDistribution = {
  args: {
    title: 'Delivery Details',
    totalCount: 15230,
    subtitle: 'Parcels being delivered across 3 regions',
    deliveryData: [
      { label: 'Enroute', value: 8234, color: '#6ED0F6' },
      { label: 'Processing', value: 2340, color: '#D8D8D8' },
      { label: 'Delivered', value: 4120, color: '#333366' },
      { label: 'Returned', value: 536, color: '#EC221F' },
    ],
  },
};

// High volume
export const HighVolume = {
  args: {
    title: 'National Delivery Statistics',
    totalCount: 987654321,
    subtitle: 'Parcels being delivered across 50 regions',
    deliveryData: [
      { label: 'Enroute', value: 456789, color: '#6ED0F6' },
      { label: 'Processing', value: 234567, color: '#D8D8D8' },
      { label: 'Delivered', value: 789012, color: '#333366' },
      { label: 'Returned', value: 98765, color: '#EC221F' },
    ],
  },
};

// Mostly delivered
export const MostlyDelivered = {
  args: {
    title: 'Campaign Results',
    totalCount: 50000,
    subtitle: 'Direct mail campaign across 12 zip codes',
    deliveryData: [
      { label: 'Enroute', value: 1200, color: '#6ED0F6' },
      { label: 'Processing', value: 350, color: '#D8D8D8' },
      { label: 'Delivered', value: 47800, color: '#333366' },
      { label: 'Returned', value: 650, color: '#EC221F' },
    ],
  },
};

// Small numbers
export const SmallVolume = {
  args: {
    title: 'Test Campaign',
    totalCount: 100,
    subtitle: 'Pilot program in 1 region',
    deliveryData: [
      { label: 'Enroute', value: 25, color: '#6ED0F6' },
      { label: 'Processing', value: 15, color: '#D8D8D8' },
      { label: 'Delivered', value: 55, color: '#333366' },
      { label: 'Returned', value: 5, color: '#EC221F' },
    ],
  },
};

// Custom colors using Relay tokens
export const CustomColors = {
  args: {
    title: 'Delivery Status',
    totalCount: 25000,
    subtitle: 'Regional distribution',
    deliveryData: [
      { label: 'Enroute', value: 6250, color: 'var(--relay-blue-base)' },
      { label: 'Processing', value: 5000, color: 'var(--relay-warning-base)' },
      { label: 'Delivered', value: 12500, color: 'var(--relay-success-base)' },
      { label: 'Returned', value: 1250, color: 'var(--relay-red-base)' },
    ],
  },
};

// Multiple cards in a grid
export const MultipleCards = () => (
  <div style={{ 
    display: 'grid', 
    gridTemplateColumns: 'repeat(2, 1fr)', 
    gap: '24px',
    padding: '24px',
    background: 'var(--relay-gray-02)'
  }}>
    <DeliveryDetailsCard
      title="East Region"
      totalCount={45678}
      subtitle="Parcels across 15 states"
      deliveryData={[
        { label: 'Enroute', value: 12000, color: '#6ED0F6' },
        { label: 'Processing', value: 8000, color: '#D8D8D8' },
        { label: 'Delivered', value: 23000, color: '#333366' },
        { label: 'Returned', value: 2678, color: '#EC221F' },
      ]}
    />
    <DeliveryDetailsCard
      title="West Region"
      totalCount={38922}
      subtitle="Parcels across 12 states"
      deliveryData={[
        { label: 'Enroute', value: 9500, color: '#6ED0F6' },
        { label: 'Processing', value: 6200, color: '#D8D8D8' },
        { label: 'Delivered', value: 21500, color: '#333366' },
        { label: 'Returned', value: 1722, color: '#EC221F' },
      ]}
    />
  </div>
);

MultipleCards.parameters = {
  layout: 'fullscreen',
};
