import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.css';

/**
 * Relay Pagination Component
 * Based on USWDS Pagination component with Figma customizations
 * 
 * Customizations from Figma:
 * - Typography: Paragraph/S Bold (Helvetica Bold, 14px, 700 weight, 20px line-height)
 * - Selected button: Purple Dark (--relay-purple-dark)
 * - Button border: Gray 04 (--relay-gray-04)
 * - Text color: Purple Base (--relay-purple-base)
 * - Button size: 40px x 40px
 * - Border radius: 4px
 */
export const Pagination = ({ 
  currentPage = 1,
  totalPages = 9,
  onPageChange,
  maxSlots = 7,
  ariaLabel = 'Pagination',
  ...props 
}) => {
  const handlePageClick = (page) => {
    if (page !== currentPage && onPageChange) {
      onPageChange(page);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1 && onPageChange) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages && onPageChange) {
      onPageChange(currentPage + 1);
    }
  };

  // Calculate which page numbers to show
  const getPageNumbers = () => {
    const pages = [];
    const showFirstPages = 5;
    const showLastPage = true;
    
    if (totalPages <= maxSlots) {
      // Show all pages if total is less than max slots
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show first 5 pages
      for (let i = 1; i <= Math.min(showFirstPages, totalPages); i++) {
        pages.push(i);
      }
      
      // Add ellipsis if there's a gap
      if (totalPages > showFirstPages + 1) {
        pages.push('ellipsis');
      }
      
      // Add last page
      if (showLastPage && totalPages > showFirstPages) {
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  const pages = getPageNumbers();

  return (
    <nav
      className="usa-pagination"
      aria-label={ariaLabel}
      {...props}
    >
      <ul className="usa-pagination__list">
        {pages.map((page, index) => {
          if (page === 'ellipsis') {
            return (
              <li key={`ellipsis-${index}`} className="usa-pagination__item usa-pagination__overflow">
                <span className="usa-pagination__button usa-pagination__overflow-text" aria-label="ellipsis indicating non-visible pages">
                  …
                </span>
              </li>
            );
          }

          return (
            <li key={page} className="usa-pagination__item usa-pagination__page-no">
              <button
                className={`usa-pagination__button ${
                  currentPage === page ? 'usa-current' : ''
                }`}
                aria-label={`Page ${page}`}
                aria-current={currentPage === page ? 'page' : undefined}
                onClick={() => handlePageClick(page)}
              >
                {page}
              </button>
            </li>
          );
        })}
        
        <li className="usa-pagination__item usa-pagination__arrow">
          <button
            className="usa-pagination__link usa-pagination__next-page"
            aria-label="Next page"
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            <span className="usa-pagination__link-text">Next</span>
            <svg
              className="usa-icon"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  /** Current active page number */
  currentPage: PropTypes.number,
  /** Total number of pages */
  totalPages: PropTypes.number,
  /** Callback when page changes */
  onPageChange: PropTypes.func,
  /** Maximum number of page slots to show */
  maxSlots: PropTypes.number,
  /** ARIA label for the pagination nav */
  ariaLabel: PropTypes.string,
};

Pagination.defaultProps = {
  currentPage: 1,
  totalPages: 9,
  maxSlots: 7,
  ariaLabel: 'Pagination',
};
