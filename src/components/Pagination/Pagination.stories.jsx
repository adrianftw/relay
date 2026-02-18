import { useState } from 'react';
import { Pagination } from './Pagination';

/**
 * Pagination component based on USWDS with Figma customizations
 * 
 * Customizations from Figma:
 * - Typography: Paragraph/S Bold (Helvetica Bold, 14px, 20px line-height)
 * - Selected button: Purple Dark (--relay-purple-dark #25254B)
 * - Unselected border: Gray 04 (--relay-gray-04 #DADFE4)
 * - Text color: Purple Base (--relay-purple-base #333366)
 * - Button size: 40px x 40px
 * - Border radius: 4px
 * - Gap: 7px between buttons
 */
export default {
  title: 'Relay Design System/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    currentPage: {
      control: { type: 'number', min: 1, max: 20 },
      description: 'Current active page number',
    },
    totalPages: {
      control: { type: 'number', min: 1, max: 100 },
      description: 'Total number of pages',
    },
    maxSlots: {
      control: { type: 'number', min: 5, max: 15 },
      description: 'Maximum number of page slots to show',
    },
    onPageChange: {
      action: 'page-changed',
      description: 'Callback fired when page changes',
    },
  },
};

// Default pagination - first page
export const FirstPage = {
  args: {
    currentPage: 1,
    totalPages: 9,
  },
};

// Middle page selected
export const MiddlePage = {
  args: {
    currentPage: 3,
    totalPages: 9,
  },
};

// Last page selected
export const LastPage = {
  args: {
    currentPage: 9,
    totalPages: 9,
  },
};

// Few pages (no ellipsis needed)
export const FewPages = {
  args: {
    currentPage: 2,
    totalPages: 5,
  },
};

// Many pages
export const ManyPages = {
  args: {
    currentPage: 1,
    totalPages: 50,
  },
};

// Interactive example with state
export const Interactive = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 9;

    return (
      <div style={{ padding: '2rem' }}>
        <div style={{ marginBottom: '1rem', fontFamily: 'Helvetica, Arial, sans-serif' }}>
          <p style={{ fontSize: '14px', color: '#333366', marginBottom: '0.5rem' }}>
            Current page: <strong>{currentPage}</strong> of {totalPages}
          </p>
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    );
  },
};

// Controlled pagination example
export const Controlled = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 15;

    const handlePageChange = (page) => {
      console.log('Page changed to:', page);
      setCurrentPage(page);
    };

    return (
      <div style={{ padding: '2rem', maxWidth: '600px' }}>
        <div style={{ 
          marginBottom: '1.5rem', 
          padding: '1rem', 
          backgroundColor: '#f3f6fa',
          borderRadius: '4px',
          fontFamily: 'Helvetica, Arial, sans-serif'
        }}>
          <h3 style={{ fontSize: '16px', marginTop: 0, marginBottom: '0.5rem', color: '#333366' }}>
            Pagination Controls
          </h3>
          <p style={{ fontSize: '14px', margin: '0.5rem 0', color: '#4f5458' }}>
            Page {currentPage} of {totalPages}
          </p>
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
            <button
              onClick={() => setCurrentPage(1)}
              style={{
                padding: '0.5rem 1rem',
                fontSize: '14px',
                backgroundColor: '#333366',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Go to first
            </button>
            <button
              onClick={() => setCurrentPage(totalPages)}
              style={{
                padding: '0.5rem 1rem',
                fontSize: '14px',
                backgroundColor: '#333366',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Go to last
            </button>
          </div>
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    );
  },
};
