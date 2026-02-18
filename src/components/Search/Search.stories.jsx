import { Search } from './Search';

/**
 * Search component based on USWDS with Figma customizations
 * 
 * Customizations from Figma:
 * - Border radius: 8px (--relay-space-02)
 * - Button color: Purple Dark (--relay-purple-dark #25254B)
 * - Input border: Gray 05 (--relay-gray-05 #BDC3C9)
 * - Height: 42px
 * - Width: 290px (max-width)
 */
export default {
  title: 'Relay Design System/Search',
  component: Search,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the search input',
    },
    size: {
      control: 'select',
      options: ['small'],
      description: 'Size variant from Figma',
    },
    onSubmit: {
      action: 'searched',
      description: 'Callback fired when form is submitted',
    },
  },
};

// Default story
export const Default = {
  args: {
    placeholder: 'Search',
  },
};

// Small size (from Figma)
export const Small = {
  args: {
    size: 'small',
    placeholder: 'Search',
  },
};

// Custom placeholder
export const CustomPlaceholder = {
  args: {
    placeholder: 'Search documentation...',
  },
};

// With submit handler example
export const WithSubmitHandler = {
  args: {
    placeholder: 'Search',
    onSubmit: (value) => {
      console.log('Search submitted:', value);
      alert(`Searching for: ${value}`);
    },
  },
};

// Interactive example
export const Interactive = {
  render: () => {
    const handleSubmit = (searchValue) => {
      console.log('Search value:', searchValue);
    };

    return (
      <div style={{ padding: '2rem' }}>
        <h3 style={{ marginBottom: '1rem', fontFamily: 'Helvetica, Arial, sans-serif' }}>
          Try searching:
        </h3>
        <Search 
          placeholder="Type and press enter..." 
          onSubmit={handleSubmit}
        />
      </div>
    );
  },
};
