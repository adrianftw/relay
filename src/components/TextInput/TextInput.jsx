import React from 'react';
import PropTypes from 'prop-types';
import './TextInput.css';

/**
 * TextInput - Text input field using USWDS with Relay design tokens
 * Styled for Relay brand with taller height, custom colors, and rounded corners
 * 
 * Based on USWDS Text Input component
 * @see https://designsystem.digital.gov/components/text-input/
 */
const TextInput = ({
  id,
  name,
  label,
  hint,
  type = 'text',
  value,
  defaultValue,
  placeholder,
  disabled = false,
  readOnly = false,
  required = false,
  error = false,
  success = false,
  errorMessage,
  successMessage,
  prefix,
  suffix,
  className = '',
  inputClassName = '',
  onChange,
  onBlur,
  onFocus,
  ...props
}) => {
  const inputId = id || `text-input-${name || Math.random().toString(36).substr(2, 9)}`;
  const hintId = hint ? `${inputId}-hint` : undefined;
  const messageId = (errorMessage || successMessage) ? `${inputId}-message` : undefined;

  const wrapperClasses = [
    'relay-text-input',
    error && 'relay-text-input--error',
    success && 'relay-text-input--success',
    disabled && 'relay-text-input--disabled',
    className
  ].filter(Boolean).join(' ');

  const hasInputGroup = prefix || suffix;

  const inputClasses = [
    'usa-input',
    'relay-input',
    error && 'usa-input--error',
    success && 'usa-input--success',
    inputClassName
  ].filter(Boolean).join(' ');

  const ariaDescribedBy = [hintId, messageId].filter(Boolean).join(' ') || undefined;

  const renderInput = () => (
    <input
      id={inputId}
      name={name}
      type={type}
      className={inputClasses}
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      disabled={disabled}
      readOnly={readOnly}
      required={required}
      aria-describedby={ariaDescribedBy}
      aria-invalid={error ? 'true' : undefined}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      {...props}
    />
  );

  return (
    <div className={wrapperClasses}>
      {label && (
        <label 
          htmlFor={inputId} 
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

      {hasInputGroup ? (
        <div className={`usa-input-group ${error ? 'usa-input-group--error' : ''} ${success ? 'usa-input-group--success' : ''}`}>
          {prefix && (
            <div className="usa-input-prefix" aria-hidden="true">
              {prefix}
            </div>
          )}
          {renderInput()}
          {suffix && (
            <div className="usa-input-suffix" aria-hidden="true">
              {suffix}
            </div>
          )}
        </div>
      ) : (
        renderInput()
      )}

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

TextInput.propTypes = {
  /** Unique identifier for the input */
  id: PropTypes.string,
  
  /** Name attribute for the input */
  name: PropTypes.string,
  
  /** Label text displayed above the input */
  label: PropTypes.string,
  
  /** Helper text displayed below the label */
  hint: PropTypes.string,
  
  /** Input type (text, email, password, etc.) */
  type: PropTypes.string,
  
  /** Controlled value */
  value: PropTypes.string,
  
  /** Default uncontrolled value */
  defaultValue: PropTypes.string,
  
  /** Placeholder text */
  placeholder: PropTypes.string,
  
  /** Whether the input is disabled */
  disabled: PropTypes.bool,
  
  /** Whether the input is read-only */
  readOnly: PropTypes.bool,
  
  /** Whether the input is required */
  required: PropTypes.bool,
  
  /** Whether the input has an error */
  error: PropTypes.bool,
  
  /** Whether the input has a success state */
  success: PropTypes.bool,
  
  /** Error message to display */
  errorMessage: PropTypes.string,
  
  /** Success message to display */
  successMessage: PropTypes.string,
  
  /** Prefix text or icon */
  prefix: PropTypes.node,
  
  /** Suffix text or icon */
  suffix: PropTypes.node,
  
  /** Additional CSS class for wrapper */
  className: PropTypes.string,
  
  /** Additional CSS class for input element */
  inputClassName: PropTypes.string,
  
  /** Change handler */
  onChange: PropTypes.func,
  
  /** Blur handler */
  onBlur: PropTypes.func,
  
  /** Focus handler */
  onFocus: PropTypes.func,
};

export default TextInput;
