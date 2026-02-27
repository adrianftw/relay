import React, { useState } from 'react';
import Radio from './Radio';

export default {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the radio is checked',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the radio is disabled',
    },
    label: {
      control: 'text',
      description: 'Label text for the radio button',
    },
  },
};

// Default story
export const Default = {
  args: {
    name: 'example',
    value: 'option1',
    label: 'Radio option',
    checked: false,
  },
};

// Checked state
export const Checked = {
  args: {
    name: 'example',
    value: 'option1',
    label: 'Selected option',
    checked: true,
  },
};

// Disabled states
export const Disabled = {
  args: {
    name: 'example',
    value: 'option1',
    label: 'Disabled option',
    disabled: true,
    checked: false,
  },
};

export const DisabledChecked = {
  args: {
    name: 'example',
    value: 'option1',
    label: 'Disabled selected option',
    disabled: true,
    checked: true,
  },
};

// Radio group example
export const RadioGroup = () => {
  const [selected, setSelected] = useState('option1');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
        <legend style={{ 
          fontSize: '1.125rem', 
          fontWeight: 'bold', 
          marginBottom: '16px',
          color: 'var(--relay-gray-08)'
        }}>
          Select an option
        </legend>
        
        <Radio
          name="demo-group"
          value="option1"
          label="First option"
          checked={selected === 'option1'}
          onChange={(e) => setSelected(e.target.value)}
        />
        
        <Radio
          name="demo-group"
          value="option2"
          label="Second option"
          checked={selected === 'option2'}
          onChange={(e) => setSelected(e.target.value)}
        />
        
        <Radio
          name="demo-group"
          value="option3"
          label="Third option"
          checked={selected === 'option3'}
          onChange={(e) => setSelected(e.target.value)}
        />
        
        <Radio
          name="demo-group"
          value="option4"
          label="Disabled option"
          disabled
          checked={selected === 'option4'}
          onChange={(e) => setSelected(e.target.value)}
        />
      </fieldset>
      
      <div style={{ 
        marginTop: '16px', 
        padding: '16px', 
        background: 'var(--relay-gray-02)', 
        borderRadius: '8px',
        fontSize: '0.875rem',
        color: 'var(--relay-gray-07)'
      }}>
        Selected value: <strong>{selected}</strong>
      </div>
    </div>
  );
};

// Long label example
export const LongLabel = {
  args: {
    name: 'example',
    value: 'option1',
    label: 'This is a radio button with a much longer label that demonstrates how the text wraps when it exceeds the available width.',
    checked: false,
  },
};

// Multiple radio groups
export const MultipleGroups = () => {
  const [delivery, setDelivery] = useState('standard');
  const [notification, setNotification] = useState('email');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
        <legend style={{ 
          fontSize: '1.125rem', 
          fontWeight: 'bold', 
          marginBottom: '16px',
          color: 'var(--relay-gray-08)'
        }}>
          Delivery method
        </legend>
        
        <Radio
          name="delivery"
          value="standard"
          label="Standard Mail (5-7 business days)"
          checked={delivery === 'standard'}
          onChange={(e) => setDelivery(e.target.value)}
        />
        
        <Radio
          name="delivery"
          value="express"
          label="Express Mail (2-3 business days)"
          checked={delivery === 'express'}
          onChange={(e) => setDelivery(e.target.value)}
        />
        
        <Radio
          name="delivery"
          value="overnight"
          label="Overnight Delivery (next business day)"
          checked={delivery === 'overnight'}
          onChange={(e) => setDelivery(e.target.value)}
        />
      </fieldset>

      <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
        <legend style={{ 
          fontSize: '1.125rem', 
          fontWeight: 'bold', 
          marginBottom: '16px',
          color: 'var(--relay-gray-08)'
        }}>
          Notification preference
        </legend>
        
        <Radio
          name="notification"
          value="email"
          label="Email notifications"
          checked={notification === 'email'}
          onChange={(e) => setNotification(e.target.value)}
        />
        
        <Radio
          name="notification"
          value="sms"
          label="SMS text messages"
          checked={notification === 'sms'}
          onChange={(e) => setNotification(e.target.value)}
        />
        
        <Radio
          name="notification"
          value="none"
          label="No notifications"
          checked={notification === 'none'}
          onChange={(e) => setNotification(e.target.value)}
        />
      </fieldset>
    </div>
  );
};
