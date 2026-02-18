import React from 'react';
import PropTypes from 'prop-types';
import './Typography.css';

/**
 * Typography Demo Component
 * Displays the Relay Design System typography scale
 */

export const Typography = () => {
  return (
    <div className="typography-demo">
      <h1>Relay Design System Typography</h1>
      
      <section className="typography-section">
        <h2>Headings</h2>
        
        <div className="typography-example">
          <h1 className="relay-h1">Header 1</h1>
          <div className="typography-specs">
            <code>relay-h1</code>
            <span>Regular • 36px / 2.25rem • Line height: 34px</span>
          </div>
        </div>

        <div className="typography-example">
          <h2 className="relay-h2">Header 2</h2>
          <div className="typography-specs">
            <code>relay-h2</code>
            <span>Regular • 31px / 1.9375rem • Line height: 44px</span>
          </div>
        </div>

        <div className="typography-example">
          <h3 className="relay-h3">Header 3</h3>
          <div className="typography-specs">
            <code>relay-h3</code>
            <span>Regular • 25px / 1.5625rem • Line height: 34px</span>
          </div>
        </div>

        <div className="typography-example">
          <h4 className="relay-h4">Header 4</h4>
          <div className="typography-specs">
            <code>relay-h4</code>
            <span>Regular • 22px / 1.375rem • Line height: 34px</span>
          </div>
        </div>

        <div className="typography-example">
          <h5 className="relay-h5">Header 5</h5>
          <div className="typography-specs">
            <code>relay-h5</code>
            <span>Bold • 20px / 1.25rem • Line height: 24px</span>
          </div>
        </div>

        <div className="typography-example">
          <h6 className="relay-h6">Header 6</h6>
          <div className="typography-specs">
            <code>relay-h6</code>
            <span>Bold • 18px / 1.125rem • Line height: 24px</span>
          </div>
        </div>
      </section>

      <section className="typography-section">
        <h2>Paragraphs</h2>
        
        <div className="typography-example">
          <p className="relay-paragraph-xl">
            Paragraph XL: The quick brown fox jumps over the lazy dog. Regular weight, 18px font size.
          </p>
          <div className="typography-specs">
            <code>relay-paragraph-xl</code>
            <span>Regular • 18px / 1.125rem • Line height: 28px</span>
          </div>
        </div>

        <div className="typography-example">
          <p className="relay-paragraph-xl-bold">
            Paragraph XL Bold: The quick brown fox jumps over the lazy dog.
          </p>
          <div className="typography-specs">
            <code>relay-paragraph-xl-bold</code>
            <span>Bold • 18px / 1.125rem • Line height: 28px</span>
          </div>
        </div>

        <div className="typography-example">
          <a href="#" className="relay-paragraph-xl-link">
            Paragraph XL Link: Click here for more information
          </a>
          <div className="typography-specs">
            <code>relay-paragraph-xl-link</code>
            <span>Regular • 18px / 1.125rem • Line height: 28px • Underlined</span>
          </div>
        </div>

        <div className="typography-example">
          <p className="relay-paragraph-baseline">
            Paragraph Baseline: The quick brown fox jumps over the lazy dog. This is the standard body text size.
          </p>
          <div className="typography-specs">
            <code>relay-paragraph-baseline</code>
            <span>Regular • 16px / 1rem • Line height: 28px</span>
          </div>
        </div>

        <div className="typography-example">
          <p className="relay-paragraph-baseline-bold">
            Paragraph Baseline Bold: The quick brown fox jumps over the lazy dog.
          </p>
          <div className="typography-specs">
            <code>relay-paragraph-baseline-bold</code>
            <span>Bold • 16px / 1rem • Line height: 28px</span>
          </div>
        </div>

        <div className="typography-example">
          <a href="#" className="relay-paragraph-baseline-link">
            Paragraph Baseline Link: Click here for more information
          </a>
          <div className="typography-specs">
            <code>relay-paragraph-baseline-link</code>
            <span>Bold • 16px / 1rem • Line height: 28px • Underlined</span>
          </div>
        </div>

        <div className="typography-example">
          <p className="relay-paragraph-s">
            Paragraph S: Smaller text for supplementary information and captions.
          </p>
          <div className="typography-specs">
            <code>relay-paragraph-s</code>
            <span>Regular • 14px / 0.875rem • Line height: 28px</span>
          </div>
        </div>

        <div className="typography-example">
          <p className="relay-paragraph-s-bold">
            Paragraph S Bold: Smaller text with bold weight.
          </p>
          <div className="typography-specs">
            <code>relay-paragraph-s-bold</code>
            <span>Bold • 14px / 0.875rem • Line height: 28px</span>
          </div>
        </div>

        <div className="typography-example">
          <p className="relay-paragraph-xs">
            Paragraph XS: Very small text for footnotes and legal copy.
          </p>
          <div className="typography-specs">
            <code>relay-paragraph-xs</code>
            <span>Regular • 12px / 0.75rem • Line height: 28px</span>
          </div>
        </div>

        <div className="typography-example">
          <p className="relay-paragraph-xs-bold">
            Paragraph XS Bold: Very small text with bold weight.
          </p>
          <div className="typography-specs">
            <code>relay-paragraph-xs-bold</code>
            <span>Bold • 12px / 0.75rem • Line height: 28px</span>
          </div>
        </div>
      </section>
    </div>
  );
};

Typography.propTypes = {};
