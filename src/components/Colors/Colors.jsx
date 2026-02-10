import React from 'react';
import PropTypes from 'prop-types';
import './Colors.css';

/**
 * Color Swatch Component - Displays a single color from the Relay brand palette
 */
export const ColorSwatch = ({ name, variable, hex, description }) => {
  return (
    <div className="color-swatch">
      <div 
        className="color-swatch__preview" 
        style={{ backgroundColor: `var(${variable})` }}
      />
      <div className="color-swatch__info">
        <h4 className="color-swatch__name">{name}</h4>
        <code className="color-swatch__variable">{variable}</code>
        <span className="color-swatch__hex">{hex}</span>
        {description && <p className="color-swatch__description">{description}</p>}
      </div>
    </div>
  );
};

ColorSwatch.propTypes = {
  name: PropTypes.string.isRequired,
  variable: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired,
  description: PropTypes.string,
};

/**
 * Color Palette Component - Displays the full Relay brand color system
 */
export const ColorPalette = () => {
  return (
    <div className="color-palette">
      <section className="color-palette__section">
        <h2>USPS Purple</h2>
        <div className="color-palette__grid">
          <ColorSwatch
            name="Purple Dark"
            variable="--relay-purple-dark"
            hex="#25254B"
          />
          <ColorSwatch
            name="Purple Base"
            variable="--relay-purple-base"
            hex="#333366"
          />
          <ColorSwatch
            name="Purple Light"
            variable="--relay-purple-light"
            hex="#6464B7"
          />
          <ColorSwatch
            name="Purple Lightest"
            variable="--relay-purple-lightest"
            hex="#B2B2F2"
          />
        </div>
      </section>

      <section className="color-palette__section">
        <h2>USPS Blue</h2>
        <div className="color-palette__grid">
          <ColorSwatch
            name="Blue Dark"
            variable="--relay-blue-dark"
            hex="#043359"
          />
          <ColorSwatch
            name="Blue Base"
            variable="--relay-blue-base"
            hex="#004B87"
          />
          <ColorSwatch
            name="Blue Light"
            variable="--relay-blue-light"
            hex="#3573B1"
          />
          <ColorSwatch
            name="Blue Lightest"
            variable="--relay-blue-lightest"
            hex="#6ED0F6"
          />
        </div>
      </section>
    </div>
  );
};
