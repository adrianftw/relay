import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import './FilterDropdown.css';

/**
 * FilterDropdown Component
 * Custom dropdown filter component with open/closed states
 * 
 * Design from Figma:
 * - Button text: Paragraph/S (14px/20px, Helvetica Regular, Purple)
 * - Dropdown background: White (--relay-gray-01)
 * - Dropdown border: Gray 03 (--relay-gray-03)
 * - Item text: Paragraph/XS (12px/16px, Helvetica Regular, Purple)
 * - Item divider: Gray 04 (--relay-gray-04)
 * - Gap: 4px, Padding: 8px (--relay-space-02)
 * - Border radius: 4px (--relay-radius-01)
 */
export const FilterDropdown = ({ 
  label = 'Filter',
  options = ['Selection 1', 'Selection 2', 'Selection 3', 'Selection 4'],
  value = null,
  onChange,
  className = '',
  ...props 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    if (onChange) {
      onChange(option);
    }
    setIsOpen(false);
  };

  const classes = [
    'relay-filter-dropdown',
    isOpen ? 'relay-filter-dropdown--open' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} ref={dropdownRef} {...props}>
      <button
        type="button"
        className="relay-filter-dropdown__button"
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="relay-filter-dropdown__label">{label}</span>
        {isOpen ? (
          <MdKeyboardArrowUp size={24} className="relay-filter-dropdown__icon" />
        ) : (
          <MdKeyboardArrowDown size={24} className="relay-filter-dropdown__icon" />
        )}
      </button>

      {isOpen && (
        <div className="relay-filter-dropdown__menu" role="listbox">
          {options.map((option, index) => (
            <button
              key={index}
              type="button"
              className="relay-filter-dropdown__item"
              onClick={() => handleSelect(option)}
              role="option"
              aria-selected={value === option}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

FilterDropdown.propTypes = {
  /** Dropdown label */
  label: PropTypes.string,
  /** Array of options to display */
  options: PropTypes.arrayOf(PropTypes.string),
  /** Currently selected value */
  value: PropTypes.string,
  /** Callback when selection changes */
  onChange: PropTypes.func,
  /** Additional CSS classes */
  className: PropTypes.string,
};

FilterDropdown.defaultProps = {
  label: 'Filter',
  options: ['Selection 1', 'Selection 2', 'Selection 3', 'Selection 4'],
  value: null,
  onChange: undefined,
  className: '',
};
