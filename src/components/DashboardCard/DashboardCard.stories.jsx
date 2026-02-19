import React from 'react';
import { DashboardCard } from './DashboardCard';

export default {
  title: 'Components/DashboardCard',
  component: DashboardCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Dashboard card component for displaying key metrics and statistics. Uses Relay design tokens for consistent styling.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Card title/label',
    },
    value: {
      control: 'text',
      description: 'Card value/metric',
    },
  },
};

// Default story
export const Default = {
  args: {
    title: 'QR Scans',
    value: '9%',
  },
};

// Different metrics
export const ActiveCampaigns = {
  args: {
    title: 'Active Campaigns',
    value: '12',
  },
};

export const InProgress = {
  args: {
    title: 'In Progress',
    value: '8',
  },
};

export const Completed = {
  args: {
    title: 'Completed',
    value: '47',
  },
};

export const TotalScans = {
  args: {
    title: 'Total Scans',
    value: '1,234',
  },
};

export const ConversionRate = {
  args: {
    title: 'Conversion Rate',
    value: '24%',
  },
};

export const AvgDeliveryTime = {
  args: {
    title: 'Avg. Delivery Time',
    value: '3.2d',
  },
};

// Multiple cards in a grid
export const MultipleCards = () => (
  <div style={{ 
    display: 'grid', 
    gridTemplateColumns: 'repeat(3, 1fr)', 
    gap: '24px',
    padding: '24px',
    background: 'var(--relay-gray-02)'
  }}>
    <DashboardCard title="QR Scans" value="9%" />
    <DashboardCard title="Active Campaigns" value="12" />
    <DashboardCard title="In Progress" value="8" />
    <DashboardCard title="Completed" value="47" />
    <DashboardCard title="Total Scans" value="1,234" />
    <DashboardCard title="Conversion Rate" value="24%" />
  </div>
);

MultipleCards.parameters = {
  layout: 'fullscreen',
};
