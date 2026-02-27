import React from 'react';
import PropTypes from 'prop-types';
import { MdCheck } from 'react-icons/md';
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
  const getInnerElement = () => {
    if (!checked) return null;
    
    if (type === 'radio') {
      // Render a filled circle for checked radio
      return <div className="relay-selection-atom__radio-dot" />;
    } else {
      // Render checkmark icon for checked checkbox
      return <MdCheck className="relay-selection-atom__checkmark" />;
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
      {getInnerElement()}
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
