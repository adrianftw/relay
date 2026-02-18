import { useState } from 'react';
import { ProgressBar } from './ProgressBar';

/**
 * Progress Bar component - Custom design with Figma tokens
 * 
 * Design from Figma:
 * - Track: Gray 04 (--relay-gray-04 #DADFE4)
 * - Fill: Purple Base (--relay-purple-base #333366)
 * - Height: 10px
 * - Border radius: 4px
 * - Label: Paragraph/S Bold (14px/20px, Helvetica Bold, Grayscale/08)
 * - Gap: 8px
 * 
 * Perfect for dashboard cards and inline progress indicators
 */
export default {
  title: 'Relay Design System/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Current progress value (0-100)',
    },
    max: {
      control: { type: 'number', min: 1, max: 1000 },
      description: 'Maximum value',
    },
    showLabel: {
      control: 'boolean',
      description: 'Show percentage label',
    },
    label: {
      control: 'text',
      description: 'Custom label text',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size variant',
    },
    variant: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'danger'],
      description: 'Color variant',
    },
  },
};

// Default from Figma (68%)
export const Default = {
  args: {
    value: 68,
    showLabel: true,
  },
};

// Empty/Zero
export const Empty = {
  args: {
    value: 0,
  },
};

// Half complete
export const HalfComplete = {
  args: {
    value: 50,
  },
};

// Complete
export const Complete = {
  args: {
    value: 100,
  },
};

// Without label
export const WithoutLabel = {
  args: {
    value: 75,
    showLabel: false,
  },
};

// Custom label
export const CustomLabel = {
  args: {
    value: 42,
    label: '42 of 100 tasks',
  },
};

// Size variants
export const SizeVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '400px' }}>
      <div>
        <p style={{ fontSize: '12px', color: '#4f5458', marginBottom: '0.5rem' }}>Small</p>
        <ProgressBar value={65} size="small" />
      </div>
      <div>
        <p style={{ fontSize: '12px', color: '#4f5458', marginBottom: '0.5rem' }}>Medium (Default)</p>
        <ProgressBar value={65} size="medium" />
      </div>
      <div>
        <p style={{ fontSize: '12px', color: '#4f5458', marginBottom: '0.5rem' }}>Large</p>
        <ProgressBar value={65} size="large" />
      </div>
    </div>
  ),
};

// Color variants
export const ColorVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '400px' }}>
      <div>
        <p style={{ fontSize: '12px', color: '#4f5458', marginBottom: '0.5rem' }}>Primary (Purple)</p>
        <ProgressBar value={68} variant="primary" />
      </div>
      <div>
        <p style={{ fontSize: '12px', color: '#4f5458', marginBottom: '0.5rem' }}>Success (Green)</p>
        <ProgressBar value={85} variant="success" />
      </div>
      <div>
        <p style={{ fontSize: '12px', color: '#4f5458', marginBottom: '0.5rem' }}>Warning (Yellow)</p>
        <ProgressBar value={45} variant="warning" />
      </div>
      <div>
        <p style={{ fontSize: '12px', color: '#4f5458', marginBottom: '0.5rem' }}>Danger (Red)</p>
        <ProgressBar value={15} variant="danger" />
      </div>
    </div>
  ),
};

// Interactive demo
export const Interactive = {
  render: () => {
    const [value, setValue] = useState(68);

    return (
      <div style={{ maxWidth: '400px' }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <label 
            htmlFor="progress-slider"
            style={{ 
              display: 'block',
              fontSize: '14px', 
              fontWeight: 700,
              color: '#333366', 
              marginBottom: '0.5rem' 
            }}
          >
            Adjust Progress: {value}%
          </label>
          <input
            id="progress-slider"
            type="range"
            min="0"
            max="100"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            style={{ width: '100%' }}
          />
        </div>
        <ProgressBar value={value} />
      </div>
    );
  },
};

// Dashboard card example
export const InDashboardCard = {
  render: () => (
    <div style={{ 
      maxWidth: '400px',
      padding: '1.5rem',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <div style={{ marginBottom: '1rem' }}>
        <h3 style={{ 
          fontSize: '18px', 
          fontWeight: 700,
          color: '#333366',
          margin: '0 0 0.25rem 0'
        }}>
          Project Completion
        </h3>
        <p style={{ 
          fontSize: '14px',
          color: '#4f5458',
          margin: 0
        }}>
          Frontend Development Sprint
        </p>
      </div>
      <ProgressBar value={68} variant="primary" />
      <div style={{ 
        marginTop: '0.75rem',
        fontSize: '13px',
        color: '#74787c'
      }}>
        68 of 100 tasks completed
      </div>
    </div>
  ),
};

// Multiple progress bars (dashboard view)
export const MultipleInCard = {
  render: () => (
    <div style={{ 
      maxWidth: '500px',
      padding: '1.5rem',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{ 
        fontSize: '18px', 
        fontWeight: 700,
        color: '#333366',
        margin: '0 0 1.5rem 0'
      }}>
        Team Progress
      </h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <div>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            marginBottom: '0.5rem'
          }}>
            <span style={{ fontSize: '14px', fontWeight: 700, color: '#232527' }}>
              Design
            </span>
            <span style={{ fontSize: '13px', color: '#74787c' }}>
              28/30 tasks
            </span>
          </div>
          <ProgressBar value={93} showLabel={false} variant="success" />
        </div>
        
        <div>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            marginBottom: '0.5rem'
          }}>
            <span style={{ fontSize: '14px', fontWeight: 700, color: '#232527' }}>
              Development
            </span>
            <span style={{ fontSize: '13px', color: '#74787c' }}>
              42/85 tasks
            </span>
          </div>
          <ProgressBar value={49} showLabel={false} variant="primary" />
        </div>
        
        <div>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            marginBottom: '0.5rem'
          }}>
            <span style={{ fontSize: '14px', fontWeight: 700, color: '#232527' }}>
              Testing
            </span>
            <span style={{ fontSize: '13px', color: '#74787c' }}>
              8/60 tasks
            </span>
          </div>
          <ProgressBar value={13} showLabel={false} variant="danger" />
        </div>
      </div>
    </div>
  ),
};
