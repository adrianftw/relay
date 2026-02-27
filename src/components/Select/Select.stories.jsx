import Select from './Select';

export default {
  title: 'Components/Select',
  component: Select,
  parameters: {
    docs: {
      description: {
        component: `
Dropdown select field using the **USWDS Select** component with Relay design token overrides.

**Features:**
- Uses actual USWDS markup and functionality
- Matches TextInput component styling for consistency
- Custom Material Design dropdown icon (MdKeyboardArrowDown)
- All USWDS features preserved: accessibility, validation
- **Taller height:** 64px (matches TextInput)
- **Rounded corners:** 8px border-radius
- **Custom typography:** Helvetica font family
- Support for labels, hints, errors, success states, placeholder

**Based on:** [USWDS Select](https://designsystem.digital.gov/components/select/)

**Relay Customizations:**
- **Label:** 18px bold, 28px line height (\`--relay-gray-08\`)
- **Hint:** 14px regular, 20px line height (\`--relay-gray-07\`)
- **Select:** White background (\`--relay-gray-01\`), gray border (\`--relay-gray-05\`)
- **Focus:** Purple border and glow (\`--relay-purple-base\`, \`--relay-purple-light\`)
- **Error:** Red border and message (\`--relay-red-base\`)
- **Success:** Green border and message (\`--relay-success-base\`)
- **Icon:** Material Design down arrow, turns purple on focus
        `,
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text displayed above the select',
    },
    hint: {
      control: 'text',
      description: 'Helper text displayed below the label',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text (first disabled option)',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the select is disabled',
    },
    required: {
      control: 'boolean',
      description: 'Whether the select is required',
    },
    error: {
      control: 'boolean',
      description: 'Whether the select has an error',
    },
    success: {
      control: 'boolean',
      description: 'Whether the select has a success state',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message to display',
    },
    successMessage: {
      control: 'text',
      description: 'Success message to display',
    },
  },
};

// Sample options for stories
const sampleOptions = [
  'Option 1',
  'Option 2',
  'Option 3',
  'Option 4',
];

const stateOptions = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
];

/**
 * Default select dropdown with label and hint text.
 */
export const Default = {
  args: {
    name: 'select-default',
    label: 'Select an option',
    hint: 'Choose one option from the list',
    placeholder: 'Select...',
    options: sampleOptions,
  },
};

/**
 * Select dropdown in focus state (simulated).
 * Shows purple border, glow, and icon color change.
 */
export const Focus = {
  args: {
    name: 'select-focus',
    label: 'Select an option',
    hint: 'Click to see focus state',
    placeholder: 'Select...',
    options: sampleOptions,
    autoFocus: true,
  },
};

/**
 * Select dropdown with an error state.
 * Shows red border and error message.
 */
export const Error = {
  args: {
    name: 'select-error',
    label: 'Select an option',
    hint: 'This field is required',
    placeholder: 'Select...',
    options: sampleOptions,
    error: true,
    errorMessage: 'Please select an option',
  },
};

/**
 * Select dropdown with a success state.
 * Shows green border and success message.
 */
export const Success = {
  args: {
    name: 'select-success',
    label: 'Select an option',
    hint: 'Choose one option',
    placeholder: 'Select...',
    options: sampleOptions,
    defaultValue: 'Option 2',
    success: true,
    successMessage: 'Valid selection',
  },
};

/**
 * Disabled select dropdown.
 * Shows gray background and is non-interactive.
 */
export const Disabled = {
  args: {
    name: 'select-disabled',
    label: 'Select an option',
    hint: 'This field is disabled',
    disabled: true,
    defaultValue: 'Option 2',
    options: sampleOptions,
  },
};

/**
 * Required select dropdown with asterisk.
 */
export const Required = {
  args: {
    name: 'select-required',
    label: 'Select an option',
    hint: 'This field is required',
    placeholder: 'Select...',
    options: sampleOptions,
    required: true,
  },
};

/**
 * Select with pre-selected value.
 */
export const WithDefaultValue = {
  args: {
    name: 'select-default-value',
    label: 'Select an option',
    hint: 'Option 3 is pre-selected',
    defaultValue: 'Option 3',
    options: sampleOptions,
  },
};

/**
 * Select without placeholder (shows first option by default).
 */
export const NoPlaceholder = {
  args: {
    name: 'select-no-placeholder',
    label: 'Select an option',
    hint: 'No placeholder text',
    options: sampleOptions,
  },
};

/**
 * Select with object-based options (custom labels and values).
 */
export const ObjectOptions = {
  args: {
    name: 'select-object-options',
    label: 'Select a fruit',
    hint: 'Options with custom values',
    placeholder: 'Choose a fruit...',
    options: [
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
      { label: 'Cherry', value: 'cherry' },
      { label: 'Date', value: 'date' },
      { label: 'Elderberry', value: 'elderberry' },
    ],
  },
};

/**
 * Select with disabled options.
 */
export const DisabledOptions = {
  args: {
    name: 'select-disabled-options',
    label: 'Select an option',
    hint: 'Some options are disabled',
    placeholder: 'Select...',
    options: [
      { label: 'Available Option 1', value: 'opt1' },
      { label: 'Available Option 2', value: 'opt2' },
      { label: 'Unavailable Option (disabled)', value: 'opt3', disabled: true },
      { label: 'Available Option 3', value: 'opt4' },
      { label: 'Out of Stock (disabled)', value: 'opt5', disabled: true },
    ],
  },
};

/**
 * State selection dropdown.
 */
export const StateSelect = {
  args: {
    name: 'select-state',
    label: 'State',
    hint: 'Select your state',
    placeholder: 'Select a state...',
    options: stateOptions,
  },
};

/**
 * Select without label (hint only).
 */
export const NoLabel = {
  args: {
    name: 'select-no-label',
    hint: 'This select has no label',
    placeholder: 'Select...',
    options: sampleOptions,
  },
};

/**
 * Select without hint (label only).
 */
export const NoHint = {
  args: {
    name: 'select-no-hint',
    label: 'Select an option',
    placeholder: 'Select...',
    options: sampleOptions,
  },
};

/**
 * Minimal select (no label or hint).
 */
export const Minimal = {
  args: {
    name: 'select-minimal',
    placeholder: 'Select...',
    options: sampleOptions,
  },
};

/**
 * Long list of options (scrollable).
 */
export const LongList = {
  args: {
    name: 'select-long-list',
    label: 'Select a country',
    hint: 'Scrollable dropdown with many options',
    placeholder: 'Choose a country...',
    options: [
      'United States',
      'Canada',
      'Mexico',
      'United Kingdom',
      'France',
      'Germany',
      'Italy',
      'Spain',
      'Portugal',
      'Netherlands',
      'Belgium',
      'Switzerland',
      'Austria',
      'Sweden',
      'Norway',
      'Denmark',
      'Finland',
      'Poland',
      'Czech Republic',
      'Hungary',
      'Greece',
      'Turkey',
      'Russia',
      'China',
      'Japan',
      'South Korea',
      'India',
      'Australia',
      'New Zealand',
      'Brazil',
      'Argentina',
      'Chile',
    ],
  },
};

/**
 * Form example with multiple selects.
 */
export const FormExample = {
  render: () => (
    <div style={{ maxWidth: '600px' }}>
      <Select
        name="state"
        label="State"
        hint="Select your state"
        placeholder="Select a state..."
        options={stateOptions}
        required
      />
      <Select
        name="country"
        label="Country"
        hint="Select your country"
        defaultValue="United States"
        options={[
          'United States',
          'Canada',
          'Mexico',
          'United Kingdom',
          'Other',
        ]}
        required
      />
      <Select
        name="preference"
        label="Contact preference"
        hint="How would you like to be contacted?"
        placeholder="Select a method..."
        options={[
          { label: 'Email', value: 'email' },
          { label: 'Phone', value: 'phone' },
          { label: 'Text message', value: 'sms' },
          { label: 'Do not contact', value: 'none' },
        ]}
      />
    </div>
  ),
};

/**
 * Size comparison with TextInput.
 */
export const WithTextInput = {
  render: () => {
    // Import TextInput for comparison
    const TextInput = require('../TextInput/TextInput').default;
    
    return (
      <div style={{ maxWidth: '600px' }}>
        <TextInput
          name="name"
          label="Your name"
          hint="Enter your full name"
          placeholder="John Smith"
        />
        <Select
          name="state"
          label="Your state"
          hint="Select your state"
          placeholder="Select a state..."
          options={stateOptions}
        />
        <p style={{ 
          marginTop: '16px', 
          fontSize: '14px', 
          color: 'var(--relay-gray-07)' 
        }}>
          Note: Both components have matching heights (64px) and styling.
        </p>
      </div>
    );
  },
};
