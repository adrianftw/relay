import TextInput from './TextInput';

export default {
  title: 'Components/TextInput',
  component: TextInput,
  parameters: {
    docs: {
      description: {
        component: `
Text input field using the **USWDS Text Input** component with Relay design token overrides.

**Features:**
- Uses actual USWDS markup and functionality
- All USWDS features preserved: accessibility, validation, input groups
- Styled with Relay design tokens for brand consistency
- **Taller height:** 64px (vs USWDS default 40px)
- **Rounded corners:** 8px border-radius
- **Custom typography:** Helvetica font family
- Support for labels, hints, errors, success states, prefix/suffix

**Based on:** [USWDS Text Input](https://designsystem.digital.gov/components/text-input/)

**Relay Customizations:**
- **Label:** 18px bold, 28px line height (\`--relay-gray-08\`)
- **Hint:** 14px regular, 20px line height (\`--relay-gray-07\`)
- **Input:** White background (\`--relay-gray-01\`), gray border (\`--relay-gray-05\`)
- **Focus:** Purple border and glow (\`--relay-purple-base\`, \`--relay-purple-light\`)
- **Error:** Red border and message (\`--relay-red-base\`)
- **Success:** Green border and message (\`--relay-success-base\`)
        `,
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text displayed above the input',
    },
    hint: {
      control: 'text',
      description: 'Helper text displayed below the label',
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'Input type',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    readOnly: {
      control: 'boolean',
      description: 'Whether the input is read-only',
    },
    required: {
      control: 'boolean',
      description: 'Whether the input is required',
    },
    error: {
      control: 'boolean',
      description: 'Whether the input has an error',
    },
    success: {
      control: 'boolean',
      description: 'Whether the input has a success state',
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

/**
 * Default text input with label and hint text.
 */
export const Default = {
  args: {
    name: 'text-input',
    label: 'Text input label',
    hint: 'Helper text',
    placeholder: 'Enter text',
  },
};

/**
 * Text input in focus state (simulated).
 * Shows purple border and glow with Relay tokens.
 */
export const Focus = {
  args: {
    name: 'text-input-focus',
    label: 'Text input label',
    hint: 'Helper text',
    placeholder: 'Click to focus',
    autoFocus: true,
  },
};

/**
 * Text input with an error state.
 * Shows red border and error message.
 */
export const Error = {
  args: {
    name: 'text-input-error',
    label: 'Text input label',
    hint: 'Helper text',
    placeholder: 'Enter text',
    error: true,
    errorMessage: 'This field has an error',
  },
};

/**
 * Text input with a success state.
 * Shows green border and success message.
 */
export const Success = {
  args: {
    name: 'text-input-success',
    label: 'Text input label',
    hint: 'Helper text',
    placeholder: 'Enter text',
    success: true,
    successMessage: 'This field is valid',
  },
};

/**
 * Disabled text input.
 * Shows gray background and is non-interactive.
 */
export const Disabled = {
  args: {
    name: 'text-input-disabled',
    label: 'Text input label',
    hint: 'Helper text',
    placeholder: 'Cannot edit',
    disabled: true,
    defaultValue: 'Disabled value',
  },
};

/**
 * Read-only text input.
 */
export const ReadOnly = {
  args: {
    name: 'text-input-readonly',
    label: 'Text input label',
    hint: 'This field is read-only',
    readOnly: true,
    defaultValue: 'Read-only value',
  },
};

/**
 * Required text input with asterisk.
 */
export const Required = {
  args: {
    name: 'text-input-required',
    label: 'Text input label',
    hint: 'This field is required',
    placeholder: 'Enter text',
    required: true,
  },
};

/**
 * Text input with prefix.
 * Useful for currency, URLs, etc.
 */
export const WithPrefix = {
  args: {
    name: 'text-input-prefix',
    label: 'Website URL',
    hint: 'Enter your website address',
    placeholder: 'example.com',
    prefix: 'https://',
  },
};

/**
 * Text input with suffix.
 * Useful for units, domains, etc.
 */
export const WithSuffix = {
  args: {
    name: 'text-input-suffix',
    label: 'Weight',
    hint: 'Enter the package weight',
    placeholder: '0',
    suffix: 'lbs',
  },
};

/**
 * Text input with both prefix and suffix.
 */
export const WithPrefixAndSuffix = {
  args: {
    name: 'text-input-prefix-suffix',
    label: 'Price',
    hint: 'Enter the item price',
    placeholder: '0.00',
    prefix: '$',
    suffix: 'USD',
  },
};

/**
 * Email input type.
 */
export const Email = {
  args: {
    name: 'email-input',
    label: 'Email address',
    hint: 'Enter your email',
    type: 'email',
    placeholder: 'name@example.com',
  },
};

/**
 * Password input type.
 */
export const Password = {
  args: {
    name: 'password-input',
    label: 'Password',
    hint: 'Must be at least 8 characters',
    type: 'password',
    placeholder: 'Enter password',
  },
};

/**
 * Search input type.
 */
export const Search = {
  args: {
    name: 'search-input',
    label: 'Search',
    hint: 'Enter keywords to search',
    type: 'search',
    placeholder: 'Search...',
  },
};

/**
 * Number input type.
 */
export const Number = {
  args: {
    name: 'number-input',
    label: 'Quantity',
    hint: 'Enter a number',
    type: 'number',
    placeholder: '0',
    min: 0,
    max: 100,
  },
};

/**
 * Telephone input type.
 */
export const Telephone = {
  args: {
    name: 'tel-input',
    label: 'Phone number',
    hint: 'Format: (555) 555-5555',
    type: 'tel',
    placeholder: '(555) 555-5555',
  },
};

/**
 * Input without label (hint only).
 */
export const NoLabel = {
  args: {
    name: 'text-input-no-label',
    hint: 'This input has no label',
    placeholder: 'Enter text',
  },
};

/**
 * Input without hint (label only).
 */
export const NoHint = {
  args: {
    name: 'text-input-no-hint',
    label: 'Text input label',
    placeholder: 'Enter text',
  },
};

/**
 * Minimal input (no label or hint).
 */
export const Minimal = {
  args: {
    name: 'text-input-minimal',
    placeholder: 'Enter text',
  },
};

/**
 * Form example with multiple inputs.
 */
export const FormExample = {
  render: () => (
    <div style={{ maxWidth: '600px' }}>
      <TextInput
        name="first-name"
        label="First name"
        hint="Enter your legal first name"
        placeholder="John"
        required
      />
      <TextInput
        name="last-name"
        label="Last name"
        hint="Enter your legal last name"
        placeholder="Smith"
        required
      />
      <TextInput
        name="email"
        label="Email address"
        type="email"
        hint="We'll never share your email"
        placeholder="name@example.com"
        required
      />
      <TextInput
        name="zip"
        label="ZIP code"
        hint="5-digit ZIP code"
        placeholder="12345"
        type="text"
        maxLength={5}
      />
    </div>
  ),
};
