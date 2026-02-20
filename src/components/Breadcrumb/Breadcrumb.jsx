import React from 'react';
import PropTypes from 'prop-types';
import './Breadcrumb.css';

/**
 * BreadcrumbSeparator - Custom "/" separator icon
 */
const BreadcrumbSeparator = () => (
  <svg 
    className="relay-breadcrumb__separator-icon" 
    width="8" 
    height="14" 
    viewBox="0 0 8 14" 
    fill="none"
  >
    <path 
      d="M1 1L7 7L1 13" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Breadcrumb Component
 * Navigation breadcrumb trail with custom separator
 * 
 * Design from Figma:
 * - Text: Purple (#333366) using Paragraph/XS Bold (12px/16px Helvetica Bold)
 * - Separator: Custom "/" icon in 24px container with 8px padding
 * - Links clickable, last item is current page
 */
export const Breadcrumb = ({ 
  items = [],
  className = '',
  onItemClick,
  ...props 
}) => {
  const classes = [
    'relay-breadcrumb',
    className
  ].filter(Boolean).join(' ');

  const handleClick = (item, index) => {
    if (onItemClick && index < items.length - 1) {
      onItemClick(item, index);
    }
  };

  return (
    <nav className={classes} aria-label="Breadcrumb" {...props}>
      <ol className="relay-breadcrumb__list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const label = typeof item === 'string' ? item : item.label;
          const href = typeof item === 'string' ? undefined : item.href;

          return (
            <React.Fragment key={index}>
              <li className="relay-breadcrumb__item">
                {isLast ? (
                  <span 
                    className="relay-breadcrumb__text relay-breadcrumb__text--current"
                    aria-current="page"
                  >
                    {label}
                  </span>
                ) : href ? (
                  <a 
                    href={href}
                    className="relay-breadcrumb__link"
                    onClick={(e) => {
                      if (onItemClick) {
                        e.preventDefault();
                        handleClick(item, index);
                      }
                    }}
                  >
                    {label}
                  </a>
                ) : (
                  <button
                    type="button"
                    className="relay-breadcrumb__button"
                    onClick={() => handleClick(item, index)}
                  >
                    {label}
                  </button>
                )}
              </li>
              {!isLast && (
                <li className="relay-breadcrumb__separator" aria-hidden="true">
                  <BreadcrumbSeparator />
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

Breadcrumb.propTypes = {
  /** Array of breadcrumb items (strings or objects with label and href) */
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        href: PropTypes.string,
      })
    ])
  ).isRequired,
  /** Callback when a breadcrumb item is clicked */
  onItemClick: PropTypes.func,
  /** Additional CSS classes */
  className: PropTypes.string,
};

Breadcrumb.defaultProps = {
  items: [],
  className: '',
  onItemClick: undefined,
};
