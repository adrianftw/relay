import React from 'react';
import PropTypes from 'prop-types';
import { MdKeyboardArrowDown } from 'react-icons/md';
import './Select.css';

/**
 * Select - Dropdown select field using USWDS with Relay design tokens
 * Styled to match TextInput component with custom Material Design icon
 * 
 * Based on USWDS Select component
 * @see https://designsystem.digital.gov/components/select/
 */
const Select = ({
  id,
  name,
  label,
  hint,
  value,
  defaultValue,
  options = [],
  placeholder,
  disabled = false,
  required = false,
  error = false,
  success = false,
  errorMessage,
  successMessage,
  className = '',
  selectClassName = '',
  onChange,
  onBlur,
  onFocus,
  ...props
}) => {
  const selectId = id || `select-${name || Math.random().toString(36).substr(2, 9)}`;
  const hintId = hint ? `${selectId}-hint` : undefined;
  const messageId = (errorMessage || successMessage) ? `${selectId}-message` : undefined;

  const wrapperClasses = [
    'relay-select',
    error && 'relay-select--error',
    success && 'relay-select--success',
    disabled && 'relay-select--disabled',
    className
  ].filter(Boolean).join(' ');

  const selectClasses = [
    'usa-select',
    'relay-select-input',
    error && 'usa-select--error',
    success && 'usa-select--success',
    selectClassName
  ].filter(Boolean).join(' ');

  const ariaDescribedBy = [hintId, messageId].filter(Boolean).join(' ') || undefined;

  return (
    <div className={wrapperClasses}>
      {label && (
        <label 
          htmlFor={selectId} 
          className="usa-label relay-label"
        >
          {label}
          {required && <span className="relay-label__required"> *</span>}
        </label>
      )}
      
      {hint && (
        <div id={hintId} className="usa-hint relay-hint">
          {hint}
        </div>
      )}

      <div className="relay-select-wrapper">
        <select
          id={selectId}
          name={name}
          className={selectClasses}
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
          required={required}
          aria-describedby={ariaDescribedBy}
          aria-invalid={error ? 'true' : undefined}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option, index) => {
            if (typeof option === 'string') {
              return (
                <option key={index} value={option}>
                  {option}
                </option>
              );
            }
            return (
              <option 
                key={index} 
                value={option.value} 
                disabled={option.disabled}
              >
                {option.label}
              </option>
            );
          })}
        </select>
        <MdKeyboardArrowDown className="relay-select-icon" aria-hidden="true" />
      </div>

      {errorMessage && (
        <div id={messageId} className="usa-error-message relay-error-message" role="alert">
          {errorMessage}
        </div>
      )}

      {successMessage && !error && (
        <div id={messageId} className="usa-success-message relay-success-message">
          {successMessage}
        </div>
      )}
    </div>
  );
};

Select.propTypes = {
  /** Unique identifier for the select */
  id: PropTypes.string,
  
  /** Name attribute for the select */
  name: PropTypes.string,
  
  /** Label text displayed above the select */
  label: PropTypes.string,
  
  /** Helper text displayed below the label */
  hint: PropTypes.string,
  
  /** Controlled value */
  value: PropTypes.string,
  
  /** Default uncontrolled value */
  defaultValue: PropTypes.string,
  
  /** Array of options - can be strings or objects with {label, value, disabled} */
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        disabled: PropTypes.bool,
      })
    ])
  ).isRequired,
  
  /** Placeholder text for first disabled option */
  placeholder: PropTypes.string,
  
  /** Whether the select is disabled */
  disabled: PropTypes.bool,
  
  /** Whether the select is required */
  required: PropTypes.bool,
  
  /** Whether the select has an error */
  error: PropTypes.bool,
  
  /** Whether the select has a success state */
  success: PropTypes.bool,
  
  /** Error message to display */
  errorMessage: PropTypes.string,
  
  /** Success message to display */
  successMessage: PropTypes.string,
  
  /** Additional CSS class for wrapper */
  className: PropTypes.string,
  
  /** Additional CSS class for select element */
  selectClassName: PropTypes.string,
  
  /** Change handler */
  onChange: PropTypes.func,
  
  /** Blur handler */
  onBlur: PropTypes.func,
  
  /** Focus handler */
  onFocus: PropTypes.func,
};

export default Select;
