import React from 'react';
import RowIcon from './RowIcon';
import './RowIcon.css';

export default {
  title: 'Components/Row/RowIcon',
  component: RowIcon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Small icon button for row actions. Supports Focus (GPS) and Pin icons with Light and Dark variants.',
      },
    },
  },
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: ['focus', 'pin'],
      description: 'Icon variant',
    },
    type: {
      control: { type: 'select' },
      options: ['light', 'dark'],
      description: 'Background/color variant',
    },
    onClick: { action: 'clicked' },
  },
};

const Template = (args) => <RowIcon {...args} />;

export const FocusLight = Template.bind({});
FocusLight.args = {
  icon: 'focus',
  type: 'light',
};

export const FocusDark = Template.bind({});
FocusDark.args = {
  icon: 'focus',
  type: 'dark',
};
FocusDark.parameters = {
  backgrounds: { default: 'dark' },
};

export const PinLight = Template.bind({});
PinLight.args = {
  icon: 'pin',
  type: 'light',
};

export const PinDark = Template.bind({});
PinDark.args = {
  icon: 'pin',
  type: 'dark',
};
PinDark.parameters = {
  backgrounds: { default: 'dark' },
};

export const AllVariants = () => (
  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
      <RowIcon icon="focus" type="light" />
      <span style={{ fontSize: '12px' }}>Focus Light</span>
    </div>
    
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
      <RowIcon icon="pin" type="light" />
      <span style={{ fontSize: '12px' }}>Pin Light</span>
    </div>
    
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center', padding: '16px', background: '#333366', borderRadius: '8px' }}>
      <RowIcon icon="focus" type="dark" />
      <span style={{ fontSize: '12px', color: 'white' }}>Focus Dark</span>
    </div>
    
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center', padding: '16px', background: '#333366', borderRadius: '8px' }}>
      <RowIcon icon="pin" type="dark" />
      <span style={{ fontSize: '12px', color: 'white' }}>Pin Dark</span>
    </div>
  </div>
);
