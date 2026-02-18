import React from 'react';
import './Tokens.css';

/**
 * Spacing Token Demo Component
 * Displays the Relay Design System spacing scale
 */
export const SpacingTokens = () => {
  const spacingTokens = [
    { token: '01', cssVar: '--relay-space-01', value: '0.25rem', px: '4px' },
    { token: '02', cssVar: '--relay-space-02', value: '0.5rem', px: '8px' },
    { token: '03', cssVar: '--relay-space-03', value: '1rem', px: '16px' },
    { token: '04', cssVar: '--relay-space-04', value: '1.5rem', px: '24px' },
    { token: '05', cssVar: '--relay-space-05', value: '2rem', px: '32px' },
    { token: '06', cssVar: '--relay-space-06', value: '2.5rem', px: '40px' },
    { token: '07', cssVar: '--relay-space-07', value: '3.5rem', px: '56px' },
    { token: '08', cssVar: '--relay-space-08', value: '4rem', px: '64px' },
    { token: '09', cssVar: '--relay-space-09', value: '5rem', px: '80px' },
    { token: '10', cssVar: '--relay-space-10', value: '6.75rem', px: '108px' },
    { token: '11', cssVar: '--relay-space-11', value: '13rem', px: '208px' },
  ];

  return (
    <div className="tokens-demo">
      <h1>Spacing Scale</h1>
      <p className="tokens-intro">
        Use these spacing tokens for consistent margins, padding, and gaps throughout the design system.
      </p>

      <div className="tokens-list">
        {spacingTokens.map(({ token, cssVar, value, px }) => (
          <div key={token} className="token-item">
            <div className="token-info">
              <div className="token-label">Token {token}</div>
              <code className="token-var">{cssVar}</code>
              <div className="token-values">
                <span>{value}</span>
                <span className="token-px">({px})</span>
              </div>
            </div>
            <div className="token-visual">
              <div 
                className="spacing-bar"
                style={{ height: `var(${cssVar})` }}
              />
            </div>
          </div>
        ))}
      </div>

      <section className="usage-section">
        <h2>Usage Examples</h2>
        <div className="usage-example">
          <h3>Margin</h3>
          <code>.relay-m-03 {'{ margin: var(--relay-space-03); }'}</code>
        </div>
        <div className="usage-example">
          <h3>Padding</h3>
          <code>.relay-p-04 {'{ padding: var(--relay-space-04); }'}</code>
        </div>
        <div className="usage-example">
          <h3>Gap</h3>
          <code>.relay-gap-02 {'{ gap: var(--relay-space-02); }'}</code>
        </div>
      </section>
    </div>
  );
};

/**
 * Border Radius Token Demo Component
 * Displays the Relay Design System border radius scale
 */
export const BorderRadiusTokens = () => {
  const radiusTokens = [
    { token: '01', cssVar: '--relay-radius-01', value: '0.25rem', px: '4px' },
    { token: '02', cssVar: '--relay-radius-02', value: '0.5rem', px: '8px' },
    { token: '03', cssVar: '--relay-radius-03', value: '1rem', px: '16px' },
    { token: '04', cssVar: '--relay-radius-04', value: '2rem', px: '32px' },
    { token: 'full', cssVar: '--relay-radius-full', value: '9999px', description: 'Pill shape' },
    { token: 'circle', cssVar: '--relay-radius-circle', value: '50%', description: 'Perfect circle' },
  ];

  return (
    <div className="tokens-demo">
      <h1>Border Radius Scale</h1>
      <p className="tokens-intro">
        Use these border radius tokens for consistent rounded corners throughout the design system.
      </p>

      <div className="tokens-list">
        {radiusTokens.map(({ token, cssVar, value, px, description }) => (
          <div key={token} className="token-item">
            <div className="token-info">
              <div className="token-label">Token {token}</div>
              <code className="token-var">{cssVar}</code>
              <div className="token-values">
                <span>{value}</span>
                {px && <span className="token-px">({px})</span>}
                {description && <span className="token-description">{description}</span>}
              </div>
            </div>
            <div className="token-visual">
              <div 
                className="radius-box"
                style={{ borderRadius: `var(${cssVar})` }}
              />
            </div>
          </div>
        ))}
      </div>

      <section className="usage-section">
        <h2>Usage Examples</h2>
        <div className="usage-example">
          <h3>Subtle Rounding</h3>
          <code>.card {'{ border-radius: var(--relay-radius-02); }'}</code>
        </div>
        <div className="usage-example">
          <h3>Pill Button</h3>
          <code>.button {'{ border-radius: var(--relay-radius-full); }'}</code>
        </div>
        <div className="usage-example">
          <h3>Avatar</h3>
          <code>.avatar {'{ border-radius: var(--relay-radius-circle); }'}</code>
        </div>
      </section>
    </div>
  );
};
