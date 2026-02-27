import React from 'react';
import SelectionAtom from './SelectionAtom';

export default {
  title: 'Components/SelectionAtom',
  component: SelectionAtom,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['radio', 'checkbox'],
      description: 'Type of selection control',
    },
    checked: {
      control: 'boolean',
      description: 'Whether the control is checked',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the control is disabled',
    },
  },
};

// Default story
export const Default = {
  args: {
    type: 'radio',
    checked: false,
  },
};

// Radio button states
export const RadioUnchecked = {
  args: {
    type: 'radio',
    checked: false,
  },
};

export const RadioChecked = {
  args: {
    type: 'radio',
    checked: true,
  },
};

export const RadioDisabled = {
  args: {
    type: 'radio',
    checked: false,
    disabled: true,
  },
};

export const RadioCheckedDisabled = {
  args: {
    type: 'radio',
    checked: true,
    disabled: true,
  },
};

// Checkbox states
export const CheckboxUnchecked = {
  args: {
    type: 'checkbox',
    checked: false,
  },
};

export const CheckboxChecked = {
  args: {
    type: 'checkbox',
    checked: true,
  },
};

export const CheckboxDisabled = {
  args: {
    type: 'checkbox',
    checked: false,
    disabled: true,
  },
};

export const CheckboxCheckedDisabled = {
  args: {
    type: 'checkbox',
    checked: true,
    disabled: true,
  },
};

// All states overview
export const AllStates = () => (
  <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
      <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '8px' }}>Radio Buttons</div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <SelectionAtom type="radio" checked={false} />
          <div style={{ fontSize: '12px', marginTop: '8px' }}>Unchecked</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <SelectionAtom type="radio" checked={true} />
          <div style={{ fontSize: '12px', marginTop: '8px' }}>Checked</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <SelectionAtom type="radio" checked={false} disabled />
          <div style={{ fontSize: '12px', marginTop: '8px' }}>Disabled</div>
        </div>
      </div>
    </div>
    
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
      <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '8px' }}>Checkboxes</div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <SelectionAtom type="checkbox" checked={false} />
          <div style={{ fontSize: '12px', marginTop: '8px' }}>Unchecked</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <SelectionAtom type="checkbox" checked={true} />
          <div style={{ fontSize: '12px', marginTop: '8px' }}>Checked</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <SelectionAtom type="checkbox" checked={false} disabled />
          <div style={{ fontSize: '12px', marginTop: '8px' }}>Disabled</div>
        </div>
      </div>
    </div>
  </div>
);
