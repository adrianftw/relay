import React, { useState } from 'react';
import { Search } from './Search';

/**
 * Search component - Updated design from Figma
 * 
 * Design specs:
 * - Width: 303px
 * - Height: 42px
 * - Border: 1px solid #DADFE4 (--relay-gray-04)
 * - Border radius: 8px
 * - Background: White
 * - Icon: Material Design Search (16px)
 * - Font: Helvetica Regular, 12px/16px
 */
export default {
  title: 'Relay Design System/Search',
  component: Search,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'Current input value',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the search input',
    },
    onChange: {
      action: 'changed',
      description: 'Callback fired when input value changes',
    },
    onSubmit: {
      action: 'submitted',
      description: 'Callback fired when Enter key is pressed',
    },
  },
};

// Default story with state management
export const Default = () => {
  const [value, setValue] = useState('');
  
  return (
    <Search 
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onSubmit={(val) => console.log('Search submitted:', val)}
    />
  );
};

// With default placeholder
export const WithPlaceholder = () => {
  const [value, setValue] = useState('');
  
  return (
    <Search 
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Search Cities, ZIPs, Counties"
    />
  );
};

// Custom placeholder
export const CustomPlaceholder = () => {
  const [value, setValue] = useState('');
  
  return (
    <Search 
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Type to search..."
    />
  );
};

// With initial value
export const WithValue = () => {
  const [value, setValue] = useState('Seattle');
  
  return (
    <Search 
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

// With submit handler
export const WithSubmitHandler = () => {
  const [value, setValue] = useState('');
  const [submitted, setSubmitted] = useState('');
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Search 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onSubmit={(val) => {
          setSubmitted(val);
          console.log('Submitted:', val);
        }}
      />
      {submitted && (
        <div style={{ 
          padding: '8px 16px', 
          background: '#F0F0F0', 
          borderRadius: '4px',
          fontSize: '12px',
          fontFamily: 'Helvetica'
        }}>
          Last search: <strong>{submitted}</strong>
        </div>
      )}
    </div>
  );
};

// Interactive example with mock results
export const Interactive = () => {
  const [searchValue, setSearchValue] = useState('');
  const [results, setResults] = useState([]);
  
  const mockResults = [
    'Seattle, WA',
    'Portland, OR',
    'San Francisco, CA',
    'Los Angeles, CA',
  ];
  
  const handleSearch = (value) => {
    if (value) {
      const filtered = mockResults.filter(item => 
        item.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  };
  
  return (
    <div style={{ width: '303px' }}>
      <Search 
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
          handleSearch(e.target.value);
        }}
        onSubmit={handleSearch}
        placeholder="Search Cities, ZIPs, Counties"
      />
      {results.length > 0 && (
        <div style={{
          marginTop: '8px',
          border: '1px solid #DADFE4',
          borderRadius: '8px',
          background: 'white',
          overflow: 'hidden'
        }}>
          {results.map((result, index) => (
            <div 
              key={index}
              style={{
                padding: '12px 16px',
                borderBottom: index < results.length - 1 ? '1px solid #F0F0F0' : 'none',
                fontSize: '12px',
                fontFamily: 'Helvetica',
                cursor: 'pointer'
              }}
              onClick={() => {
                setSearchValue(result);
                setResults([]);
              }}
            >
              {result}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
