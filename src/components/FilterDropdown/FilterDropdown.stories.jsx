import React, { useState } from 'react';
import { FilterDropdown } from './FilterDropdown';

export default {
  title: 'Components/FilterDropdown',
  component: FilterDropdown,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Custom filter dropdown component with open/closed states. Built with Relay design tokens.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Dropdown label',
    },
    options: {
      control: 'object',
      description: 'Array of options to display',
    },
    value: {
      control: 'text',
      description: 'Currently selected value',
    },
    onChange: {
      action: 'changed',
      description: 'Callback when selection changes',
    },
  },
};

// Default story
export const Default = {
  args: {
    label: 'Filter',
    options: ['Selection 1', 'Selection 2', 'Selection 3', 'Selection 4'],
  },
};

// Controlled component
export const Controlled = () => {
  const [value, setValue] = useState(null);
  
  return (
    <div>
      <FilterDropdown
        label="Filter"
        options={['Selection 1', 'Selection 2', 'Selection 3', 'Selection 4']}
        value={value}
        onChange={setValue}
      />
      <p style={{ marginTop: '16px', fontSize: '14px', color: 'var(--relay-gray-07)' }}>
        Selected: {value || 'None'}
      </p>
    </div>
  );
};

// Custom options
export const StatusFilter = () => {
  const [value, setValue] = useState(null);
  
  return (
    <FilterDropdown
      label="Status"
      options={['All', 'Active', 'In Progress', 'Completed', 'Paused']}
      value={value}
      onChange={setValue}
    />
  );
};

export const DateRangeFilter = () => {
  const [value, setValue] = useState(null);
  
  return (
    <FilterDropdown
      label="Date Range"
      options={['Today', 'Last 7 days', 'Last 30 days', 'Last 90 days', 'Custom']}
      value={value}
      onChange={setValue}
    />
  );
};

export const CampaignTypeFilter = () => {
  const [value, setValue] = useState(null);
  
  return (
    <FilterDropdown
      label="Campaign Type"
      options={['All Types', 'Direct Mail', 'Email', 'Social Media', 'Print']}
      value={value}
      onChange={setValue}
    />
  );
};

// Multiple dropdowns
export const MultipleFilters = () => {
  const [status, setStatus] = useState(null);
  const [date, setDate] = useState(null);
  const [type, setType] = useState(null);
  
  return (
    <div style={{ 
      display: 'flex', 
      gap: '24px',
      padding: '24px',
      background: 'var(--relay-gray-02)',
      borderRadius: '8px'
    }}>
      <FilterDropdown
        label="Status"
        options={['All', 'Active', 'Completed']}
        value={status}
        onChange={setStatus}
      />
      <FilterDropdown
        label="Date"
        options={['Today', 'Last 7 days', 'Last 30 days']}
        value={date}
        onChange={setDate}
      />
      <FilterDropdown
        label="Type"
        options={['All Types', 'Direct Mail', 'Email']}
        value={type}
        onChange={setType}
      />
    </div>
  );
};

MultipleFilters.parameters = {
  layout: 'padded',
};
