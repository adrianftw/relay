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
      <h1>Relay Design System Colors</h1>
      
      {/* Brand Colors */}
      <section className="color-palette__section">
        <h2>Brand Colors</h2>
        
        <h3>USPS Purple</h3>
        <div className="color-palette__grid">
          <ColorSwatch
            name="Purple Darkest"
            variable="--relay-purple-darkest"
            hex="#191935"
          />
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

        <h3>USPS Blue</h3>
        <div className="color-palette__grid">
          <ColorSwatch
            name="Blue Darkest"
            variable="--relay-blue-darkest"
            hex="#1E1E1E"
          />
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

      {/* Utility Colors */}
      <section className="color-palette__section">
        <h2>Utility Colors</h2>
        
        <h3>USPS Red</h3>
        <div className="color-palette__grid">
          <ColorSwatch
            name="Red Darkest"
            variable="--relay-red-darkest"
            hex="#69140D"
          />
          <ColorSwatch
            name="Red Dark"
            variable="--relay-red-dark"
            hex="#A6281F"
          />
          <ColorSwatch
            name="Red Base"
            variable="--relay-red-base"
            hex="#DA291C"
          />
          <ColorSwatch
            name="Red Light"
            variable="--relay-red-light"
            hex="#F9695E"
          />
          <ColorSwatch
            name="Red Lightest"
            variable="--relay-red-lightest"
            hex="#FF9991"
          />
        </div>

        <h3>Success (Green)</h3>
        <div className="color-palette__grid">
          <ColorSwatch
            name="Success Dark"
            variable="--relay-success-dark"
            hex="#196B2C"
          />
          <ColorSwatch
            name="Success Base"
            variable="--relay-success-base"
            hex="#24A041"
          />
          <ColorSwatch
            name="Success Light"
            variable="--relay-success-light"
            hex="#41D764"
          />
          <ColorSwatch
            name="Success Lightest"
            variable="--relay-success-lightest"
            hex="#56EB79"
          />
        </div>

        <h3>Warning (Yellow)</h3>
        <div className="color-palette__grid">
          <ColorSwatch
            name="Warning Dark"
            variable="--relay-warning-dark"
            hex="#D4B431"
          />
          <ColorSwatch
            name="Warning Base"
            variable="--relay-warning-base"
            hex="#F3CD35"
          />
          <ColorSwatch
            name="Warning Light"
            variable="--relay-warning-light"
            hex="#FBDB57"
          />
          <ColorSwatch
            name="Warning Lightest"
            variable="--relay-warning-lightest"
            hex="#FFEB9B"
          />
        </div>
      </section>

      {/* Grayscale */}
      <section className="color-palette__section">
        <h2>Grayscale</h2>
        <div className="color-palette__grid">
          <ColorSwatch
            name="Gray 01"
            variable="--relay-gray-01"
            hex="#FFFFFF"
            description="White"
          />
          <ColorSwatch
            name="Gray 02"
            variable="--relay-gray-02"
            hex="#F3F6FA"
          />
          <ColorSwatch
            name="Gray 03"
            variable="--relay-gray-03"
            hex="#E8EBEE"
          />
          <ColorSwatch
            name="Gray 04"
            variable="--relay-gray-04"
            hex="#DADFE4"
          />
          <ColorSwatch
            name="Gray 05"
            variable="--relay-gray-05"
            hex="#BDC3C9"
          />
          <ColorSwatch
            name="Gray 06"
            variable="--relay-gray-06"
            hex="#74787C"
          />
          <ColorSwatch
            name="Gray 07"
            variable="--relay-gray-07"
            hex="#4F5458"
          />
          <ColorSwatch
            name="Gray 08"
            variable="--relay-gray-08"
            hex="#232527"
            description="Black"
          />
        </div>
      </section>
    </div>
  );
};
