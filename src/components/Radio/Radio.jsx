import React from 'react';
import PropTypes from 'prop-types';
import SelectionAtom from '../SelectionAtom/SelectionAtom';
import './Radio.css';

/**
 * Radio - Radio button component following USWDS patterns
 * Uses SelectionAtom for the visual indicator
 */
const Radio = ({ 
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
  const inputId = id || `radio-${name}-${value}`;

  const handleChange = (e) => {
    if (!disabled && onChange) {
      onChange(e);
    }
  };

  const classNames = [
    'relay-radio',
    disabled ? 'relay-radio--disabled' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classNames}>
      <input
        type="radio"
        id={inputId}
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        className="relay-radio__input"
        {...props}
      />
      <label htmlFor={inputId} className="relay-radio__label">
        <div className="relay-radio__icon-container">
          <SelectionAtom 
            type="radio" 
            checked={checked} 
            disabled={disabled}
            className="relay-radio__atom"
          />
        </div>
        <div className="relay-radio__text-container">
          {label && <span className="relay-radio__text">{label}</span>}
        </div>
      </label>
    </div>
  );
};

Radio.propTypes = {
  /** Unique identifier for the radio button */
  id: PropTypes.string,
  /** Name attribute (groups radio buttons together) */
  name: PropTypes.string.isRequired,
  /** Value attribute */
  value: PropTypes.string.isRequired,
  /** Label text */
  label: PropTypes.string,
  /** Whether the radio is checked */
  checked: PropTypes.bool,
  /** Whether the radio is disabled */
  disabled: PropTypes.bool,
  /** Change handler */
  onChange: PropTypes.func,
  /** Additional CSS classes */
  className: PropTypes.string,
};

export default Radio;
