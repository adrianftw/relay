# Figma to Code Workflow Guide

## How to Use the Token System

This guide shows you how to extract design information from Figma and apply it to your components using our token mapping system.

## Problem: Figma Variables Get Resolved to Hex

When you use the Figma MCP connection, it resolves variable references to their hex values:

- **What you see in Figma Inspect**: `background: var(--Brand-Purple-Base)`
- **What MCP returns**: `background: #333366`

This breaks the design token workflow because we lose the semantic variable name!

## Solution: Token Mapping System

Our token files (`tokens.js` and `tokens.json`) act as a bridge between Figma variables and CSS variables.

---

## Workflow Example

### Step 1: Select Component in Figma

Let's say you select a button in Figma and the MCP returns:

```
background-color: #333366
```

### Step 2: Look Up the Token

Use the token mapping to find the corresponding CSS variable:

```javascript
import { getCSSVarFromHex } from './styles/tokens';

const bgColor = '#333366'; // From Figma MCP
const cssVar = getCSSVarFromHex(bgColor);
// Returns: '--relay-purple-base'
```

Or manually check `tokens.json`:

```json
{
  "--Brand-Purple-Base": {
    "cssVar": "--relay-purple-base",
    "value": "#333366",
    "description": "USPS Purple - Base"
  }
}
```

### Step 3: Apply in Your Component

Now use the CSS variable, not the hex value:

```css
/* ❌ Don't do this */
.button {
  background-color: #333366;
}

/* ✅ Do this instead */
.button {
  background-color: var(--relay-purple-base); /* Figma: --Brand-Purple-Base */
}
```

### Step 4: Document the Token Mapping

Add a comment that references the Figma variable:

```css
.relay-button-primary {
  /* Maps to Figma button with --Brand-Purple-Base (#333366) */
  background-color: var(--relay-purple-base);
}

.relay-button-primary:hover {
  /* Hover state uses --Brand-Purple-Dark (#25254B) */
  background-color: var(--relay-purple-dark);
}
```

---

## Complete Example: Creating a Button from Figma

### 1. Get Figma Design Context

MCP returns:
```
Button/Primary
├── background: #333366
├── color: #FFFFFF
├── border-radius: 4px
├── padding: 12px 24px
└── font-family: Public Sans
```

### 2. Map to Tokens

| Figma Property | Figma Variable | Our CSS Variable | Value |
|---------------|----------------|------------------|-------|
| background | --Brand-Purple-Base | --relay-purple-base | #333366 |
| color | (none) | (use white) | #FFFFFF |

### 3. Create Component CSS

```css
/* Button.module.css */
.button-primary {
  /* Figma: --Brand-Purple-Base */
  background-color: var(--relay-purple-base);
  color: white;
  border-radius: 4px;
  padding: 12px 24px;
  font-family: 'Public Sans', sans-serif;
}

.button-primary:hover {
  /* Figma: --Brand-Purple-Dark */
  background-color: var(--relay-purple-dark);
}
```

### 4. Create React Component

```jsx
import styles from './Button.module.css';

/**
 * Primary Button
 * Maps to Figma "Button/Primary" component
 * Uses --Brand-Purple-Base token
 */
export const Button = ({ label, ...props }) => {
  return (
    <button className={styles['button-primary']} {...props}>
      {label}
    </button>
  );
};
```

---

## Token Lookup Reference

### Quick Reference Table

| Hex Value | Figma Variable | CSS Variable |
|-----------|----------------|--------------|
| #25254B | --Brand-Purple-Dark | --relay-purple-dark |
| #333366 | --Brand-Purple-Base | --relay-purple-base |
| #6464B7 | --Brand-Purple-Light | --relay-purple-light |
| #B2B2F2 | --Brand-Purple-Lightest | --relay-purple-lightest |
| #043359 | --Brand-Blue-Dark | --relay-blue-dark |
| #004B87 | --Brand-Blue-Base | --relay-blue-base |
| #3573B1 | --Brand-Blue-Light | --relay-blue-light |
| #6ED0F6 | --Brand-Blue-Lightest | --relay-blue-lightest |

### Using Helper Functions

```javascript
// In your component file
import { getCSSVarFromHex, getCSSVarFromFigma } from '../styles/tokens';

// When MCP gives you hex
const bgColor = '#333366';
const cssVar = getCSSVarFromHex(bgColor);
console.log(cssVar); // '--relay-purple-base'

// When you know the Figma variable name
const figmaVar = '--Brand-Purple-Base';
const cssVar = getCSSVarFromFigma(figmaVar);
console.log(cssVar); // '--relay-purple-base'

// Apply to element
element.style.backgroundColor = `var(${cssVar})`;
```

---

## Benefits of This Workflow

1. **Maintainability**: Change a color once in `colors.css`, updates everywhere
2. **Traceability**: Comments link code back to Figma variables
3. **Consistency**: Ensures you're using approved design tokens
4. **Flexibility**: If Figma variable changes, just update token mapping

---

## Adding New Tokens

When designers add new colors to Figma:

1. **Get the new variable info**:
   - Figma variable name (e.g., `--Brand-Green-Base`)
   - Hex value (e.g., `#2E8B57`)

2. **Update `tokens.json`**:
   ```json
   {
     "--Brand-Green-Base": {
       "cssVar": "--relay-green-base",
       "value": "#2E8B57",
       "description": "Brand Green - Base"
     }
   }
   ```

3. **Update `tokens.js`**:
   ```javascript
   export const colorTokens = {
     // ... existing tokens
     '--Brand-Green-Base': {
       cssVar: '--relay-green-base',
       value: '#2E8B57',
       figmaVar: '--Brand-Green-Base'
     }
   };
   
   // Update reverse lookups
   const hexToCSS = {
     // ... existing mappings
     '#2E8B57': '--relay-green-base'
   };
   ```

4. **Update `colors.css`**:
   ```css
   :root {
     /* ... existing colors */
     
     /* Figma: --Brand-Green-Base */
     --relay-green-base: #2E8B57;
   }
   ```

5. **Test in Storybook** and commit!

---

## Common Pitfalls

### ❌ Don't hardcode hex values
```css
.button {
  background: #333366; /* What if this changes in Figma? */
}
```

### ✅ Use CSS variables
```css
.button {
  background: var(--relay-purple-base); /* Figma: --Brand-Purple-Base */
}
```

### ❌ Don't use RGB/HSL conversions
```css
.button {
  background: rgb(51, 51, 102); /* Loses token mapping */
}
```

### ✅ Keep the variable chain
```css
.button {
  background: var(--relay-purple-base); /* Traceable to Figma */
}
```

---

## Summary

1. **Figma MCP returns hex** → Look up in token mapping
2. **Find CSS variable** → Use `getCSSVarFromHex()` or check `tokens.json`
3. **Apply CSS variable** → Use `var(--relay-purple-base)` in styles
4. **Document mapping** → Add comment linking to Figma variable
5. **Test & commit** → Chromatic auto-publishes

This workflow ensures your code stays in sync with design decisions, even when colors change!
