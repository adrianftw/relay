import React from 'react';
import { LightCard } from './LightCard';
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
  title: 'Dashboard Cards/LightCard',
  component: LightCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

// Default - QR Scans
export const Default = {
  args: {
    icon: MdQrCode2,
    label: 'QR Scans',
    value: '9%',
    description: '532 scans',
  },
};

// Campaign metrics
export const Campaigns = {
  args: {
    icon: MdCampaign,
    label: 'Active Campaigns',
    value: '24',
    description: '8 pending',
  },
};

// Shipping metrics
export const InTransit = {
  args: {
    icon: MdLocalShipping,
    label: 'In Transit',
    value: '156',
    description: '94 delivered',
  },
};

// Completion rate
export const CompletionRate = {
  args: {
    icon: MdCheckCircle,
    label: 'Completed',
    value: '94%',
    description: '1,243 total',
  },
};

// Growth metrics
export const Growth = {
  args: {
    icon: MdTrendingUp,
    label: 'Growth Rate',
    value: '+23%',
    description: 'vs last month',
  },
};

// User metrics
export const TotalUsers = {
  args: {
    icon: MdPeople,
    label: 'Total Users',
    value: '8.2K',
    description: '+142 today',
  },
};

// Email metrics
export const EmailsSent = {
  args: {
    icon: MdEmail,
    label: 'Emails Sent',
    value: '45K',
    description: '98% delivered',
  },
};

// Analytics
export const Analytics = {
  args: {
    icon: MdBarChart,
    label: 'Analytics',
    value: '2.4M',
    description: 'page views',
  },
};

// Multiple cards in a grid
export const MultipleCards = () => (
  <div style={{ 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, 228px)', 
    gap: '24px',
    padding: '20px'
  }}>
    <LightCard 
      icon={MdQrCode2} 
      label="QR Scans" 
      value="9%" 
      description="532 scans" 
    />
    <LightCard 
      icon={MdCampaign} 
      label="Active Campaigns" 
      value="24" 
      description="8 pending" 
    />
    <LightCard 
      icon={MdLocalShipping} 
      label="In Transit" 
      value="156" 
      description="94 delivered" 
    />
    <LightCard 
      icon={MdCheckCircle} 
      label="Completed" 
      value="94%" 
      description="1,243 total" 
    />
    <LightCard 
      icon={MdTrendingUp} 
      label="Growth Rate" 
      value="+23%" 
      description="vs last month" 
    />
    <LightCard 
      icon={MdPeople} 
      label="Total Users" 
      value="8.2K" 
      description="+142 today" 
    />
  </div>
);
