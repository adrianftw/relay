import React from 'react';
import PropTypes from 'prop-types';
import { MdSearch } from 'react-icons/md';
import './Search.css';

/**
 * Relay Search Component
 * Updated design from Figma
 * 
 * Design specs:
 * - Width: 303px
 * - Height: 42px
 * - Border: 1px solid #DADFE4 (--relay-gray-04)
 * - Border radius: 8px (--relay-radius-02)
 * - Background: White (--relay-gray-01)
 * - Padding: 8px 16px (--relay-space-02, --relay-space-03)
 * - Text: Helvetica Regular, 12px/16px (Paragraph/XS)
 * - Text color: #74787C (--relay-gray-06)
 * - Icon: Material Design Search, 16px
 */
export const Search = ({ 
  value,
  onChange,
  onSubmit,
  placeholder = 'Search Cities, ZIPs, Counties',
  ...props 
}) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && onSubmit) {
      e.preventDefault();
      onSubmit(e.target.value);
    }
  };

  return (
    <div className="relay-search" {...props}>
      <input
        className="relay-search__input"
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        aria-label="Search"
      />
      <MdSearch className="relay-search__icon" aria-hidden="true" />
    </div>
  );
};

Search.propTypes = {
  /** Current input value */
  value: PropTypes.string,
  /** Callback when input value changes */
  onChange: PropTypes.func,
  /** Callback when search is submitted (Enter key pressed) */
  onSubmit: PropTypes.func,
  /** Placeholder text for the input */
  placeholder: PropTypes.string,
};

Search.defaultProps = {
  placeholder: 'Search Cities, ZIPs, Counties',
};
