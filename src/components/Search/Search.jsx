import React from 'react';
import PropTypes from 'prop-types';
import './Search.css';

/**
 * Relay Search Component
 * Based on USWDS Search component with Figma customizations
 * 
 * Customizations from Figma:
 * - Border radius: 8px (--relay-space-02)
 * - Button color: Purple Dark (--relay-purple-dark)
 * - Border color: Gray 05 (--relay-gray-05)
 * 
 * Size: Small (42px height)
 */
export const Search = ({ 
  onSubmit,
  placeholder = 'Search',
  size = 'small',
  role = 'search',
  ...props 
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      const formData = new FormData(e.target);
      const searchValue = formData.get('search');
      onSubmit(searchValue);
    }
  };

  return (
    <form
      className={`usa-search usa-search--${size}`}
      role={role}
      onSubmit={handleSubmit}
      {...props}
    >
      <label className="usa-sr-only" htmlFor="search-field">
        Search
      </label>
      <input
        className="usa-input"
        id="search-field"
        type="search"
        name="search"
        placeholder={placeholder}
      />
      <button className="usa-button" type="submit">
        <span className="usa-search__submit-text">Search</span>
        <svg
          className="usa-icon"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-hidden="true"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </svg>
      </button>
    </form>
  );
};

Search.propTypes = {
  /** Callback when search is submitted */
  onSubmit: PropTypes.func,
  /** Placeholder text for the input */
  placeholder: PropTypes.string,
  /** Size variant from Figma */
  size: PropTypes.oneOf(['small']),
  /** ARIA role for the form */
  role: PropTypes.string,
};

Search.defaultProps = {
  placeholder: 'Search',
  size: 'small',
  role: 'search',
};
