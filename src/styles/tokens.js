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
    }
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
