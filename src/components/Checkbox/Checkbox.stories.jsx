import React, { useState } from 'react';
import Checkbox from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
    },
    label: {
      control: 'text',
      description: 'Label text for the checkbox',
    },
  },
};

// Default story
export const Default = {
  args: {
    name: 'example',
    value: 'option1',
    label: 'Checkbox option',
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

// Multiple checkboxes example
export const CheckboxGroup = () => {
  const [selected, setSelected] = useState({
    email: true,
    sms: false,
    push: false,
    postal: false,
  });

  const handleChange = (key) => (e) => {
    setSelected(prev => ({
      ...prev,
      [key]: e.target.checked
    }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
        <legend style={{ 
          fontSize: '1.125rem', 
          fontWeight: 'bold', 
          marginBottom: '16px',
          color: 'var(--relay-gray-08)'
        }}>
          Choose your notification preferences
        </legend>
        
        <Checkbox
          name="notifications"
          value="email"
          label="Email notifications"
          checked={selected.email}
          onChange={handleChange('email')}
        />
        
        <Checkbox
          name="notifications"
          value="sms"
          label="SMS text messages"
          checked={selected.sms}
          onChange={handleChange('sms')}
        />
        
        <Checkbox
          name="notifications"
          value="push"
          label="Push notifications"
          checked={selected.push}
          onChange={handleChange('push')}
        />
        
        <Checkbox
          name="notifications"
          value="postal"
          label="Postal mail updates"
          disabled
          checked={selected.postal}
          onChange={handleChange('postal')}
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
        Selected: <strong>{Object.keys(selected).filter(k => selected[k]).join(', ') || 'None'}</strong>
      </div>
    </div>
  );
};

// Long label example
export const LongLabel = {
  args: {
    name: 'example',
    value: 'option1',
    label: 'This is a checkbox with a much longer label that demonstrates how the text wraps when it exceeds the available width.',
    checked: false,
  },
};

// Terms and conditions example
export const TermsAndConditions = () => {
  const [agreed, setAgreed] = useState(false);

  return (
    <div style={{ 
      maxWidth: '600px',
      padding: '24px',
      background: 'var(--relay-gray-01)',
      borderRadius: '8px',
      border: '1px solid var(--relay-gray-04)'
    }}>
      <h3 style={{ 
        fontSize: '1.25rem',
        marginBottom: '16px',
        color: 'var(--relay-gray-08)'
      }}>
        Complete your registration
      </h3>
      
      <div style={{ 
        marginBottom: '24px',
        padding: '16px',
        background: 'var(--relay-gray-02)',
        borderRadius: '8px',
        fontSize: '0.875rem',
        lineHeight: '1.6',
        color: 'var(--relay-gray-07)'
      }}>
        <p style={{ marginBottom: '12px' }}>
          By creating an account, you agree to our Terms of Service and Privacy Policy. 
          We'll use your information to provide you with the best possible service.
        </p>
        <p>
          You can update your preferences at any time in your account settings.
        </p>
      </div>
      
      <Checkbox
        name="terms"
        value="agreed"
        label="I agree to the Terms of Service and Privacy Policy"
        checked={agreed}
        onChange={(e) => setAgreed(e.target.checked)}
      />
      
      <button
        disabled={!agreed}
        style={{
          marginTop: '24px',
          padding: '12px 24px',
          background: agreed ? 'var(--relay-purple-base)' : 'var(--relay-gray-04)',
          color: 'var(--relay-gray-01)',
          border: 'none',
          borderRadius: '8px',
          fontSize: '1rem',
          fontWeight: 'bold',
          cursor: agreed ? 'pointer' : 'not-allowed',
          transition: 'background 0.2s',
          width: '100%'
        }}
      >
        Create Account
      </button>
    </div>
  );
};

// Select all example
export const SelectAll = () => {
  const [items, setItems] = useState({
    item1: false,
    item2: false,
    item3: false,
    item4: false,
  });

  const allChecked = Object.values(items).every(Boolean);
  const someChecked = Object.values(items).some(Boolean) && !allChecked;

  const handleSelectAll = (e) => {
    const newValue = e.target.checked;
    setItems({
      item1: newValue,
      item2: newValue,
      item3: newValue,
      item4: newValue,
    });
  };

  const handleItemChange = (key) => (e) => {
    setItems(prev => ({
      ...prev,
      [key]: e.target.checked
    }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
        <legend style={{ 
          fontSize: '1.125rem', 
          fontWeight: 'bold', 
          marginBottom: '16px',
          color: 'var(--relay-gray-08)'
        }}>
          Mail campaign recipients
        </legend>
        
        <Checkbox
          name="select-all"
          value="all"
          label="Select all"
          checked={allChecked}
          onChange={handleSelectAll}
          style={{ fontWeight: someChecked ? 'bold' : 'normal' }}
        />
        
        <div style={{ 
          marginLeft: '32px',
          paddingLeft: '16px',
          borderLeft: '2px solid var(--relay-gray-04)'
        }}>
          <Checkbox
            name="items"
            value="item1"
            label="New customers (2,543 recipients)"
            checked={items.item1}
            onChange={handleItemChange('item1')}
          />
          
          <Checkbox
            name="items"
            value="item2"
            label="Active subscribers (18,291 recipients)"
            checked={items.item2}
            onChange={handleItemChange('item2')}
          />
          
          <Checkbox
            name="items"
            value="item3"
            label="Lapsed customers (5,847 recipients)"
            checked={items.item3}
            onChange={handleItemChange('item3')}
          />
          
          <Checkbox
            name="items"
            value="item4"
            label="VIP members (892 recipients)"
            checked={items.item4}
            onChange={handleItemChange('item4')}
          />
        </div>
      </fieldset>
      
      <div style={{ 
        marginTop: '16px', 
        padding: '16px', 
        background: 'var(--relay-gray-02)', 
        borderRadius: '8px',
        fontSize: '0.875rem',
        color: 'var(--relay-gray-07)'
      }}>
        Total recipients: <strong>
          {items.item1 ? 2543 : 0 + items.item2 ? 18291 : 0 + items.item3 ? 5847 : 0 + items.item4 ? 892 : 0}
        </strong>
      </div>
    </div>
  );
};
