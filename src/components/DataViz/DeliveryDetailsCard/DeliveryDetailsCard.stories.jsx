import React from 'react';
import { DeliveryDetailsCard } from './DeliveryDetailsCard';

export default {
  title: 'Data Viz/DeliveryDetailsCard',
  component: DeliveryDetailsCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

// Default story - Exact Figma data
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

// Uneven distribution
export const UnevenDistribution = {
  args: {
    title: 'Delivery Details',
    totalCount: 15230,
    subtitle: 'Active deliveries in progress',
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
    title: 'Delivery Details',
    totalCount: 987654321,
    subtitle: 'Total parcels processed this year',
    deliveryData: [
      { label: 'Enroute', value: 456789123, color: '#6ED0F6' },
      { label: 'Processing', value: 234567890, color: '#D8D8D8' },
      { label: 'Delivered', value: 789012345, color: '#333366' },
      { label: 'Returned', value: 98765432, color: '#EC221F' },
    ],
  },
};

// Mostly delivered
export const MostlyDelivered = {
  args: {
    title: 'Delivery Details',
    totalCount: 50000,
    subtitle: 'Completed campaign deliveries',
    deliveryData: [
      { label: 'Enroute', value: 1200, color: '#6ED0F6' },
      { label: 'Processing', value: 350, color: '#D8D8D8' },
      { label: 'Delivered', value: 47800, color: '#333366' },
      { label: 'Returned', value: 650, color: '#EC221F' },
    ],
  },
};

// Small volume test
export const SmallVolume = {
  args: {
    title: 'Test Campaign',
    totalCount: 100,
    subtitle: 'Small batch test delivery',
    deliveryData: [
      { label: 'Enroute', value: 25, color: '#6ED0F6' },
      { label: 'Processing', value: 15, color: '#D8D8D8' },
      { label: 'Delivered', value: 55, color: '#333366' },
      { label: 'Returned', value: 5, color: '#EC221F' },
    ],
  },
};

// Using Relay colors
export const CustomColors = {
  args: {
    title: 'Status Overview',
    totalCount: 25000,
    subtitle: 'Multi-region delivery status',
    deliveryData: [
      { label: 'In Transit', value: 8500, color: 'var(--relay-blue-base)' },
      { label: 'Pending', value: 3200, color: 'var(--relay-warning-base)' },
      { label: 'Complete', value: 12800, color: 'var(--relay-success-base)' },
      { label: 'Failed', value: 500, color: 'var(--relay-red-base)' },
    ],
  },
};

// Multiple cards comparison
export const MultipleCards = () => (
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
    <DeliveryDetailsCard
      title="East Region"
      totalCount={45000}
      subtitle="Deliveries in eastern territory"
      deliveryData={[
        { label: 'Enroute', value: 12000, color: '#6ED0F6' },
        { label: 'Processing', value: 8000, color: '#D8D8D8' },
        { label: 'Delivered', value: 23500, color: '#333366' },
        { label: 'Returned', value: 1500, color: '#EC221F' },
      ]}
    />
    <DeliveryDetailsCard
      title="West Region"
      totalCount={57000}
      subtitle="Deliveries in western territory"
      deliveryData={[
        { label: 'Enroute', value: 15000, color: '#6ED0F6' },
        { label: 'Processing', value: 10000, color: '#D8D8D8' },
        { label: 'Delivered', value: 30000, color: '#333366' },
        { label: 'Returned', value: 2000, color: '#EC221F' },
      ]}
    />
  </div>
);
