import React from 'react';
import PropTypes from 'prop-types';
import { 
  MdRadioButtonUnchecked, 
  MdRadioButtonChecked, 
  MdCheckBoxOutlineBlank, 
  MdCheckBox 
} from 'react-icons/md';
import './SelectionAtom.css';

/**
 * SelectionAtom - Base component for radio buttons and checkboxes
 * Follows USWDS patterns with Relay design tokens
 */
const SelectionAtom = ({ 
  type = 'radio',
  checked = false,
  disabled = false,
  className = '',
  ...props 
}) => {
  const getIcon = () => {
    if (type === 'radio') {
      return checked ? (
        <MdRadioButtonChecked className="relay-selection-atom__icon" />
      ) : (
        <MdRadioButtonUnchecked className="relay-selection-atom__icon" />
      );
    } else {
      return checked ? (
        <MdCheckBox className="relay-selection-atom__icon" />
      ) : (
        <MdCheckBoxOutlineBlank className="relay-selection-atom__icon" />
      );
    }
  };

  const classNames = [
    'relay-selection-atom',
    `relay-selection-atom--${type}`,
    checked ? 'relay-selection-atom--checked' : '',
    disabled ? 'relay-selection-atom--disabled' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classNames} {...props}>
      {getIcon()}
    </div>
  );
};

SelectionAtom.propTypes = {
  /** Type of selection control */
  type: PropTypes.oneOf(['radio', 'checkbox']),
  /** Whether the control is checked */
  checked: PropTypes.bool,
  /** Whether the control is disabled */
  disabled: PropTypes.bool,
  /** Additional CSS classes */
  className: PropTypes.string,
};

export default SelectionAtom;
