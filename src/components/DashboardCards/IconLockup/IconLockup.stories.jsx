import React from 'react';
import { IconLockup } from './IconLockup';
import { 
  MdQrCode2, 
  MdCampaign, 
  MdLocalShipping, 
  MdCheckCircle,
  MdTrendingUp,
  MdPeople,
  MdEmail,
  MdBarChart
} from 'react-icons/md';

export default {
  title: 'Dashboard Cards/IconLockup',
  component: IconLockup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['light', 'dark'],
    },
  },
};

// Default - Light variant
export const Light = {
  args: {
    icon: MdQrCode2,
    label: 'QR Scans',
    variant: 'light',
  },
};

// Dark variant
export const Dark = {
  args: {
    icon: MdQrCode2,
    label: 'QR Scans',
    variant: 'dark',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

// Different icons - Light
export const CampaignIcon = {
  args: {
    icon: MdCampaign,
    label: 'Active Campaigns',
    variant: 'light',
  },
};

export const ShippingIcon = {
  args: {
    icon: MdLocalShipping,
    label: 'In Transit',
    variant: 'light',
  },
};

export const CompletedIcon = {
  args: {
    icon: MdCheckCircle,
    label: 'Completed',
    variant: 'light',
  },
};

export const TrendingIcon = {
  args: {
    icon: MdTrendingUp,
    label: 'Growth Rate',
    variant: 'light',
  },
};

// Different icons - Dark
export const PeopleIconDark = {
  args: {
    icon: MdPeople,
    label: 'Total Users',
    variant: 'dark',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const EmailIconDark = {
  args: {
    icon: MdEmail,
    label: 'Emails Sent',
    variant: 'dark',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const ChartIconDark = {
  args: {
    icon: MdBarChart,
    label: 'Analytics',
    variant: 'dark',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

// Multiple icons side by side
export const MultipleLight = () => (
  <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
    <IconLockup icon={MdQrCode2} label="QR Scans" variant="light" />
    <IconLockup icon={MdCampaign} label="Campaigns" variant="light" />
    <IconLockup icon={MdLocalShipping} label="In Transit" variant="light" />
    <IconLockup icon={MdCheckCircle} label="Completed" variant="light" />
  </div>
);

export const MultipleDark = () => (
  <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', padding: '20px', background: 'var(--relay-gray-08)' }}>
    <IconLockup icon={MdQrCode2} label="QR Scans" variant="dark" />
    <IconLockup icon={MdCampaign} label="Campaigns" variant="dark" />
    <IconLockup icon={MdLocalShipping} label="In Transit" variant="dark" />
    <IconLockup icon={MdCheckCircle} label="Completed" variant="dark" />
  </div>
);

MultipleDark.parameters = {
  backgrounds: { default: 'dark' },
};
