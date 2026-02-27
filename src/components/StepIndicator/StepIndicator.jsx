import React from 'react';
import PropTypes from 'prop-types';
import './StepIndicator.css';

/**
 * StepIndicator - Progress tracking component using USWDS Step Indicator
 * Styled with Relay design tokens
 * 
 * Uses USWDS component structure with custom Relay styling
 * States:
 * - complete: Step has been finished (purple background)
 * - current: Active step (blue text)
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

  const getSegmentClass = (stepIndex) => {
    const stepNumber = stepIndex + 1;
    if (stepNumber < currentStep) return 'usa-step-indicator__segment--complete';
    if (stepNumber === currentStep) return 'usa-step-indicator__segment--current';
    return '';
  };

  const containerClasses = [
    'usa-step-indicator',
    !showLabels && 'usa-step-indicator--no-labels',
    centered && 'usa-step-indicator--centered',
    counters !== 'default' && `usa-step-indicator--counters-${counters}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClasses} aria-label="progress" {...props}>
      <ol className="usa-step-indicator__segments">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCurrent = stepNumber === currentStep;
          const segmentClass = getSegmentClass(index);

          return (
            <li
              key={index}
              className={`usa-step-indicator__segment ${segmentClass}`}
              aria-current={isCurrent ? 'step' : undefined}
            >
              {showLabels && (
                <span className="usa-step-indicator__segment-label">
                  {counters === 'default' && (
                    <span className="usa-step-indicator__segment-number">
                      {stepNumber}
                    </span>
                  )}
                  <HeadingTag className="usa-step-indicator__heading">
                    {step.label || `Step ${stepNumber}`}
                  </HeadingTag>
                </span>
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
