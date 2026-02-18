import { Tag } from './Tag';

/**
 * Tag component synced from Figma
 * Static label component with 5 color variants
 * 
 * Variants from Figma:
 * - Purple: Light purple background (#DDDDFF) with purple text (#333366)
 * - Blue: Light blue background (#CEF1FF) with blue text (#004B87)
 * - Green: Light green background (#B6FFC7) with green text (#196B2C)
 * - Red: Light red background (#FFD8D5) with red text (#DA291C)
 * - Gray: Light gray background (#E8EBEE) with dark gray text (#232527)
 * 
 * Specs:
 * - Font: Helvetica Regular 12px / 16px line-height
 * - Padding: 8px horizontal, 4px vertical
 * - Border radius: 4px
 */
export default {
  title: 'Relay Design System/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['purple', 'blue', 'green', 'red', 'gray'],
      description: 'Tag color variant from Figma',
    },
    label: {
      control: 'text',
      description: 'Tag label text',
    },
  },
};

// Purple variant (default)
export const Purple = {
  args: {
    variant: 'purple',
    label: 'Tag',
  },
};

// Blue variant
export const Blue = {
  args: {
    variant: 'blue',
    label: 'Tag',
  },
};

// Green variant
export const Green = {
  args: {
    variant: 'green',
    label: 'Tag',
  },
};

// Red variant
export const Red = {
  args: {
    variant: 'red',
    label: 'Tag',
  },
};

// Gray variant
export const Gray = {
  args: {
    variant: 'gray',
    label: 'Tag',
  },
};

// All variants showcase - matches Figma layout
export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Tag variant="purple" label="Tag" />
      <Tag variant="blue" label="Tag" />
      <Tag variant="green" label="Tag" />
      <Tag variant="red" label="Tag" />
      <Tag variant="gray" label="Tag" />
    </div>
  ),
};

// Custom labels example
export const CustomLabels = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Tag variant="purple" label="New" />
      <Tag variant="blue" label="Info" />
      <Tag variant="green" label="Success" />
      <Tag variant="red" label="Error" />
      <Tag variant="gray" label="Inactive" />
    </div>
  ),
};

// Long label example
export const LongLabel = {
  args: {
    variant: 'purple',
    label: 'This is a longer tag label',
  },
};
