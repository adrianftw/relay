import React from 'react';
import { Breadcrumb } from './Breadcrumb';

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    onItemClick: { action: 'clicked' },
  },
};

// Two items
export const TwoItems = {
  args: {
    items: [
      'Campaigns',
      'Spring Mail Campaign',
    ],
  },
};

// Three items
export const ThreeItems = {
  args: {
    items: [
      'Campaigns',
      'Spring Mail Campaign',
      'Seattle, WA',
    ],
  },
};

// Four items (default from Figma)
export const FourItems = {
  args: {
    items: [
      'Campaigns',
      'Spring Mail Campaign',
      'Seattle, WA',
      '9375',
    ],
  },
};

// With href links
export const WithLinks = {
  args: {
    items: [
      { label: 'Campaigns', href: '/campaigns' },
      { label: 'Spring Mail Campaign', href: '/campaigns/spring-mail' },
      { label: 'Seattle, WA', href: '/campaigns/spring-mail/seattle' },
      { label: '9375' },
    ],
  },
};

// Long breadcrumb
export const LongBreadcrumb = {
  args: {
    items: [
      'Home',
      'Products',
      'Electronics',
      'Computers',
      'Laptops',
      'Gaming Laptops',
      'ASUS ROG',
    ],
  },
};

// With click handler
export const WithClickHandler = {
  args: {
    items: [
      'Dashboard',
      'Reports',
      'Analytics',
      'Current Report',
    ],
  },
  render: (args) => {
    const handleClick = (item, index) => {
      alert(`Clicked: ${typeof item === 'string' ? item : item.label} at index ${index}`);
    };

    return <Breadcrumb {...args} onItemClick={handleClick} />;
  },
};

// Single item (edge case)
export const SingleItem = {
  args: {
    items: ['Home'],
  },
};

// Real-world examples
export const CampaignDetail = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
    <div>
      <h3 style={{ marginBottom: '8px', color: 'var(--relay-gray-08)' }}>Campaign Overview</h3>
      <Breadcrumb items={['Campaigns', 'Spring Mail Campaign']} />
    </div>
    <div>
      <h3 style={{ marginBottom: '8px', color: 'var(--relay-gray-08)' }}>Region Detail</h3>
      <Breadcrumb items={['Campaigns', 'Spring Mail Campaign', 'Seattle, WA']} />
    </div>
    <div>
      <h3 style={{ marginBottom: '8px', color: 'var(--relay-gray-08)' }}>Specific Entry</h3>
      <Breadcrumb items={['Campaigns', 'Spring Mail Campaign', 'Seattle, WA', '9375']} />
    </div>
  </div>
);
