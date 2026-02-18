/**
 * Design Token Mapping
 * Maps Figma variable names to code CSS custom properties
 * 
 * This file serves as the source of truth for design tokens
 * across Figma and code implementation.
 */

export const designTokens = {
  colors: {
    // Brand Purple
    '--Brand-Purple-Darkest': {
      cssVar: '--relay-purple-darkest',
      value: '#191935',
      figmaVar: '--Brand-Purple-Darkest'
    },
    '--Brand-Purple-Dark': {
      cssVar: '--relay-purple-dark',
      value: '#25254B',
      figmaVar: '--Brand-Purple-Dark'
    },
    '--Brand-Purple-Base': {
      cssVar: '--relay-purple-base',
      value: '#333366',
      figmaVar: '--Brand-Purple-Base'
    },
    '--Brand-Purple-Light': {
      cssVar: '--relay-purple-light',
      value: '#6464B7',
      figmaVar: '--Brand-Purple-Light'
    },
    '--Brand-Purple-Lightest': {
      cssVar: '--relay-purple-lightest',
      value: '#B2B2F2',
      figmaVar: '--Brand-Purple-Lightest'
    },
    
    // Brand Blue
    '--Brand-Blue-Darkest': {
      cssVar: '--relay-blue-darkest',
      value: '#1E1E1E',
      figmaVar: '--Brand-Blue-Darkest'
    },
    '--Brand-Blue-Dark': {
      cssVar: '--relay-blue-dark',
      value: '#043359',
      figmaVar: '--Brand-Blue-Dark'
    },
    '--Brand-Blue-Base': {
      cssVar: '--relay-blue-base',
      value: '#004B87',
      figmaVar: '--Brand-Blue-Base'
    },
    '--Brand-Blue-Light': {
      cssVar: '--relay-blue-light',
      value: '#3573B1',
      figmaVar: '--Brand-Blue-Light'
    },
    '--Brand-Blue-Lightest': {
      cssVar: '--relay-blue-lightest',
      value: '#6ED0F6',
      figmaVar: '--Brand-Blue-Lightest'
    },
    
    // Utility Red
    '--Utility-Red-Darkest': {
      cssVar: '--relay-red-darkest',
      value: '#69140D',
      figmaVar: '--Utility-Red-Darkest'
    },
    '--Utility-Red-Dark': {
      cssVar: '--relay-red-dark',
      value: '#A6281F',
      figmaVar: '--Utility-Red-Dark'
    },
    '--Utility-Red-Base': {
      cssVar: '--relay-red-base',
      value: '#DA291C',
      figmaVar: '--Utility-Red-Base'
    },
    '--Utility-Red-Light': {
      cssVar: '--relay-red-light',
      value: '#F9695E',
      figmaVar: '--Utility-Red-Light'
    },
    '--Utility-Red-Lightest': {
      cssVar: '--relay-red-lightest',
      value: '#FF9991',
      figmaVar: '--Utility-Red-Lightest'
    },
    
    // Success Green
    '--Utility-Success-Dark': {
      cssVar: '--relay-success-dark',
      value: '#196B2C',
      figmaVar: '--Utility-Success-Dark'
    },
    '--Utility-Success-Base': {
      cssVar: '--relay-success-base',
      value: '#24A041',
      figmaVar: '--Utility-Success-Base'
    },
    '--Utility-Success-Light': {
      cssVar: '--relay-success-light',
      value: '#41D764',
      figmaVar: '--Utility-Success-Light'
    },
    '--Utility-Success-Lightest': {
      cssVar: '--relay-success-lightest',
      value: '#56EB79',
      figmaVar: '--Utility-Success-Lightest'
    },
    
    // Warning Yellow
    '--Utility-Warning-Dark': {
      cssVar: '--relay-warning-dark',
      value: '#D4B431',
      figmaVar: '--Utility-Warning-Dark'
    },
    '--Utility-Warning-Base': {
      cssVar: '--relay-warning-base',
      value: '#F3CD35',
      figmaVar: '--Utility-Warning-Base'
    },
    '--Utility-Warning-Light': {
      cssVar: '--relay-warning-light',
      value: '#FBDB57',
      figmaVar: '--Utility-Warning-Light'
    },
    '--Utility-Warning-Lightest': {
      cssVar: '--relay-warning-lightest',
      value: '#FFEB9B',
      figmaVar: '--Utility-Warning-Lightest'
    },
    
    // Grayscale
    '--Grayscale-01': {
      cssVar: '--relay-gray-01',
      value: '#FFFFFF',
      figmaVar: '--Grayscale-01'
    },
    '--Grayscale-02': {
      cssVar: '--relay-gray-02',
      value: '#F3F6FA',
      figmaVar: '--Grayscale-02'
    },
    '--Grayscale-03': {
      cssVar: '--relay-gray-03',
      value: '#E8EBEE',
      figmaVar: '--Grayscale-03'
    },
    '--Grayscale-04': {
      cssVar: '--relay-gray-04',
      value: '#DADFE4',
      figmaVar: '--Grayscale-04'
    },
    '--Grayscale-05': {
      cssVar: '--relay-gray-05',
      value: '#BDC3C9',
      figmaVar: '--Grayscale-05'
    },
    '--Grayscale-06': {
      cssVar: '--relay-gray-06',
      value: '#74787C',
      figmaVar: '--Grayscale-06'
    },
    '--Grayscale-07': {
      cssVar: '--relay-gray-07',
      value: '#4F5458',
      figmaVar: '--Grayscale-07'
    },
    '--Grayscale-08': {
      cssVar: '--relay-gray-08',
      value: '#232527',
      figmaVar: '--Grayscale-08'
    }
  },
  
  spacing: {
    '01': { cssVar: '--relay-space-01', value: '0.25rem', px: '4px' },
    '02': { cssVar: '--relay-space-02', value: '0.5rem', px: '8px' },
    '03': { cssVar: '--relay-space-03', value: '1rem', px: '16px' },
    '04': { cssVar: '--relay-space-04', value: '1.5rem', px: '24px' },
    '05': { cssVar: '--relay-space-05', value: '2rem', px: '32px' },
    '06': { cssVar: '--relay-space-06', value: '2.5rem', px: '40px' },
    '07': { cssVar: '--relay-space-07', value: '3.5rem', px: '56px' },
    '08': { cssVar: '--relay-space-08', value: '4rem', px: '64px' },
    '09': { cssVar: '--relay-space-09', value: '5rem', px: '80px' },
    '10': { cssVar: '--relay-space-10', value: '6.75rem', px: '108px' },
    '11': { cssVar: '--relay-space-11', value: '13rem', px: '208px' }
  },
  
  borderRadius: {
    '01': { cssVar: '--relay-radius-01', value: '0.25rem', px: '4px' },
    '02': { cssVar: '--relay-radius-02', value: '0.5rem', px: '8px' },
    '03': { cssVar: '--relay-radius-03', value: '1rem', px: '16px' },
    '04': { cssVar: '--relay-radius-04', value: '2rem', px: '32px' },
    'full': { cssVar: '--relay-radius-full', value: '9999px', description: 'Pill shape' },
    'circle': { cssVar: '--relay-radius-circle', value: '50%', description: 'Perfect circle' }
  }
};

/**
 * Helper function to get CSS variable from hex value
 * Useful when Figma MCP returns hex instead of variable name
 */
export function getCSSVarFromHex(hexValue) {
  const normalizedHex = hexValue.toLowerCase();
  
  for (const [key, token] of Object.entries(designTokens.colors)) {
    if (token.value.toLowerCase() === normalizedHex) {
      return token.cssVar;
    }
  }
  
  return null;
}

/**
 * Helper function to get CSS variable from Figma variable name
 */
export function getCSSVarFromFigma(figmaVar) {
  const token = designTokens.colors[figmaVar];
  return token ? token.cssVar : null;
}

/**
 * Reverse lookup: Get Figma variable name from CSS variable
 */
export function getFigmaVarFromCSS(cssVar) {
  for (const [key, token] of Object.entries(designTokens.colors)) {
    if (token.cssVar === cssVar) {
      return token.figmaVar;
    }
  }
  
  return null;
}

/**
 * Get all colors by category
 */
export function getColorsByCategory() {
  return {
    brand: {
      purple: Object.entries(designTokens.colors)
        .filter(([key]) => key.includes('Purple'))
        .map(([_, value]) => value),
      blue: Object.entries(designTokens.colors)
        .filter(([key]) => key.includes('Blue'))
        .map(([_, value]) => value)
    },
    utility: {
      red: Object.entries(designTokens.colors)
        .filter(([key]) => key.includes('Red'))
        .map(([_, value]) => value),
      success: Object.entries(designTokens.colors)
        .filter(([key]) => key.includes('Success'))
        .map(([_, value]) => value),
      warning: Object.entries(designTokens.colors)
        .filter(([key]) => key.includes('Warning'))
        .map(([_, value]) => value)
    },
    grayscale: Object.entries(designTokens.colors)
      .filter(([key]) => key.includes('Grayscale'))
      .map(([_, value]) => value)
  };
}
