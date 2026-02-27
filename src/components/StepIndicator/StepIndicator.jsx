import React from 'react';
import PropTypes from 'prop-types';
import './StepIndicator.css';

/**
 * StepIndicator - Progress tracking component following USWDS patterns
 * Displays a horizontal progress indicator with labeled steps
 * 
 * States:
 * - complete: Step has been finished (purple background)
 * - active: Current step (blue text, partial progress)
 * - default: Not yet started (gray)
 * 
 * @see https://designsystem.digital.gov/components/step-indicator/
 */
const StepIndicator = ({
  steps = [],
  currentStep = 1,
  showLabels = true,
  centered = false,
  counters = 'default',
  headingLevel = 'h4',
  className = '',
  ...props
}) => {
  const HeadingTag = headingLevel;

  const getStepState = (stepIndex) => {
    const stepNumber = stepIndex + 1;
    if (stepNumber < currentStep) return 'complete';
    if (stepNumber === currentStep) return 'active';
    return 'default';
  };

  const classNames = [
    'relay-step-indicator',
    centered && 'relay-step-indicator--centered',
    !showLabels && 'relay-step-indicator--no-labels',
    counters !== 'default' && `relay-step-indicator--counters-${counters}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classNames} aria-label="progress" {...props}>
      <ol className="relay-step-indicator__list">
        {steps.map((step, index) => {
          const state = getStepState(index);
          const stepNumber = index + 1;
          const isCurrent = stepNumber === currentStep;

          return (
            <li
              key={index}
              className={`relay-step-indicator__segment relay-step-indicator__segment--${state}`}
              aria-current={isCurrent ? 'step' : null}
            >
              <div className="relay-step-indicator__segment-bar"></div>
              {showLabels && (
                <div className="relay-step-indicator__segment-label">
                  {counters === 'default' && (
                    <span className="relay-step-indicator__segment-counter">
                      {stepNumber}
                    </span>
                  )}
                  <HeadingTag className="relay-step-indicator__segment-heading">
                    {step.label || `Step ${stepNumber}`}
                  </HeadingTag>
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

StepIndicator.propTypes = {
  /** Array of step objects with label property */
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
    })
  ).isRequired,
  
  /** Current active step number (1-indexed) */
  currentStep: PropTypes.number,
  
  /** Whether to show step labels */
  showLabels: PropTypes.bool,
  
  /** Center-align step labels */
  centered: PropTypes.bool,
  
  /** Counter display mode: 'default' (numbers), 'small' (compact), or 'none' */
  counters: PropTypes.oneOf(['default', 'small', 'none']),
  
  /** HTML heading level for step labels */
  headingLevel: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  
  /** Additional CSS class names */
  className: PropTypes.string,
};

export default StepIndicator;
