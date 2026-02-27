import React from 'react';
import PropTypes from 'prop-types';
import SelectionAtom from '../SelectionAtom/SelectionAtom';
import './Checkbox.css';

/**
 * Checkbox - Checkbox component following USWDS patterns
 * Uses SelectionAtom for the visual indicator
 */
const Checkbox = ({ 
  id,
  name,
  value,
  label,
  checked = false,
  disabled = false,
  onChange,
  className = '',
  ...props 
}) => {
  const inputId = id || `checkbox-${name || 'default'}-${value || 'default'}`;

  const handleChange = (e) => {
    if (!disabled && onChange) {
      onChange(e);
    }
  };

  const classNames = [
    'relay-checkbox',
    disabled ? 'relay-checkbox--disabled' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classNames}>
      <input
        type="checkbox"
        id={inputId}
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        className="relay-checkbox__input"
        {...props}
      />
      <label htmlFor={inputId} className="relay-checkbox__label">
        <div className="relay-checkbox__icon-container">
          <SelectionAtom 
            type="checkbox" 
            checked={checked} 
            disabled={disabled}
            className="relay-checkbox__atom"
          />
        </div>
        <div className="relay-checkbox__text-container">
          {label && <span className="relay-checkbox__text">{label}</span>}
        </div>
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  /** Unique identifier for the checkbox */
  id: PropTypes.string,
  /** Name attribute */
  name: PropTypes.string,
  /** Value attribute */
  value: PropTypes.string,
  /** Label text */
  label: PropTypes.string,
  /** Whether the checkbox is checked */
  checked: PropTypes.bool,
  /** Whether the checkbox is disabled */
  disabled: PropTypes.bool,
  /** Change handler */
  onChange: PropTypes.func,
  /** Additional CSS classes */
  className: PropTypes.string,
};

export default Checkbox;
