import StepIndicator from './StepIndicator';

export default {
  title: 'Components/StepIndicator',
  component: StepIndicator,
  parameters: {
    docs: {
      description: {
        component: `
Progress tracking component using the **USWDS Step Indicator** component with Relay design token overrides.

**Features:**
- Uses actual USWDS Step Indicator markup and functionality
- All USWDS features preserved: responsive behavior, accessibility, semantic HTML
- Styled with Relay design tokens for brand consistency
- Three states: complete (purple), current (blue), default (gray)
- Fully responsive (horizontal on desktop, vertical on mobile per USWDS)

**Based on:** [USWDS Step Indicator](https://designsystem.digital.gov/components/step-indicator/)

**Relay Token Overrides:**
- **Complete:** Purple background (\`--relay-purple-base\` #333366)
- **Current:** Blue text (\`--relay-blue-base\` #004B87), half-filled progress bar  
- **Default:** Gray (\`--relay-gray-04\` #DADFE4 background, \`--relay-gray-06\` text)
        `,
      },
    },
  },
  argTypes: {
    currentStep: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Current active step (1-indexed)',
    },
    showLabels: {
      control: 'boolean',
      description: 'Whether to show step labels',
    },
    centered: {
      control: 'boolean',
      description: 'Center-align step labels',
    },
    counters: {
      control: { type: 'select' },
      options: ['default', 'small', 'none'],
      description: 'Counter display mode',
    },
    headingLevel: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'HTML heading level for step labels',
    },
  },
};

// Default 5-step process
const defaultSteps = [
  { label: 'Personal information' },
  { label: 'Household status' },
  { label: 'Supporting documents' },
  { label: 'Signature' },
  { label: 'Review and submit' },
];

/**
 * Default step indicator showing progress through a 5-step process.
 * Currently on step 3.
 */
export const Default = {
  args: {
    steps: defaultSteps,
    currentStep: 3,
    showLabels: true,
    centered: false,
    counters: 'none',
    headingLevel: 'h4',
  },
};

/**
 * Step indicator at the beginning of a process (step 1).
 */
export const FirstStep = {
  args: {
    steps: defaultSteps,
    currentStep: 1,
    showLabels: true,
    centered: false,
    counters: 'none',
    headingLevel: 'h4',
  },
};

/**
 * Step indicator at the end of a process (last step).
 */
export const LastStep = {
  args: {
    steps: defaultSteps,
    currentStep: 5,
    showLabels: true,
    centered: false,
    counters: 'none',
    headingLevel: 'h4',
  },
};

/**
 * Step indicator with centered labels.
 * Better for symmetrical layouts.
 */
export const Centered = {
  args: {
    steps: defaultSteps,
    currentStep: 3,
    showLabels: true,
    centered: true,
    counters: 'none',
    headingLevel: 'h4',
  },
};

/**
 * Step indicator with numeric counters shown above labels.
 */
export const WithCounters = {
  args: {
    steps: defaultSteps,
    currentStep: 3,
    showLabels: true,
    centered: false,
    counters: 'default',
    headingLevel: 'h4',
  },
};

/**
 * Step indicator with small counters.
 */
export const SmallCounters = {
  args: {
    steps: defaultSteps,
    currentStep: 3,
    showLabels: true,
    centered: false,
    counters: 'small',
    headingLevel: 'h4',
  },
};

/**
 * Step indicator without labels (progress bar only).
 * Useful for compact layouts.
 */
export const NoLabels = {
  args: {
    steps: defaultSteps,
    currentStep: 3,
    showLabels: false,
    centered: false,
    counters: 'none',
    headingLevel: 'h4',
  },
};

/**
 * Simple 3-step process.
 */
export const ThreeSteps = {
  args: {
    steps: [
      { label: 'Step 1' },
      { label: 'Step 2' },
      { label: 'Step 3' },
    ],
    currentStep: 2,
    showLabels: true,
    centered: false,
    counters: 'none',
    headingLevel: 'h4',
  },
};

/**
 * Campaign creation workflow with 4 steps.
 */
export const CampaignWorkflow = {
  args: {
    steps: [
      { label: 'Campaign details' },
      { label: 'Target audience' },
      { label: 'Design materials' },
      { label: 'Review and launch' },
    ],
    currentStep: 2,
    showLabels: true,
    centered: false,
    counters: 'none',
    headingLevel: 'h3',
  },
};

/**
 * Delivery tracking with 6 steps.
 */
export const DeliveryTracking = {
  args: {
    steps: [
      { label: 'Order placed' },
      { label: 'Processing' },
      { label: 'Shipped' },
      { label: 'In transit' },
      { label: 'Out for delivery' },
      { label: 'Delivered' },
    ],
    currentStep: 4,
    showLabels: true,
    centered: true,
    counters: 'default',
    headingLevel: 'h4',
  },
};

/**
 * Long step labels to test text wrapping.
 */
export const LongLabels = {
  args: {
    steps: [
      { label: 'Provide your personal information and contact details' },
      { label: 'Upload required supporting documentation' },
      { label: 'Review your submission and digitally sign' },
      { label: 'Submit your completed application for review' },
    ],
    currentStep: 2,
    showLabels: true,
    centered: false,
    counters: 'none',
    headingLevel: 'h4',
  },
};
