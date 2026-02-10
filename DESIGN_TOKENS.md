# Design Token System

## Overview

This design system uses a token mapping system to keep Figma designs and code in sync. Design tokens are the single source of truth for colors, spacing, typography, and other design values.

## File Structure

```
src/styles/
├── tokens.json       # Machine-readable token definitions (JSON)
├── tokens.js         # JavaScript token utilities with helper functions
├── colors.css        # CSS custom properties generated from tokens
└── custom.css        # Component-specific customizations
```

## Token Mapping: Figma ↔ Code

### How It Works

**Figma Variable** → **CSS Variable** → **Usage in Code**

Example:
- **Figma:** `--Brand-Purple-Base`
- **Code CSS:** `--relay-purple-base` 
- **Value:** `#333366`

### Mapping Files

#### `tokens.json`
Machine-readable format for tooling and build processes:
```json
{
  "--Brand-Purple-Base": {
    "cssVar": "--relay-purple-base",
    "value": "#333366",
    "description": "USPS Purple - Base"
  }
}
```

#### `tokens.js`
JavaScript utilities for working with tokens:
```javascript
import { getCSSVarFromHex, getCSSVarFromFigma } from './styles/tokens';

// When Figma MCP returns a hex value
const cssVar = getCSSVarFromHex('#333366'); // Returns: '--relay-purple-base'

// When you have a Figma variable name
const cssVar = getCSSVarFromFigma('--Brand-Purple-Base'); // Returns: '--relay-purple-base'
```

## Workflow: Figma to Code

### When Reading from Figma MCP

1. **MCP returns hex value** (e.g., `#333366`)
2. **Use token mapper** to find corresponding CSS variable
   ```javascript
   import { getCSSVarFromHex } from './styles/tokens';
   const cssVar = getCSSVarFromHex('#333366'); // '--relay-purple-base'
   ```
3. **Apply in code** using CSS variable:
   ```css
   .button {
     background-color: var(--relay-purple-base);
   }
   ```

### Adding New Tokens

1. **Add to Figma** - Create variable in Figma (e.g., `--Brand-Purple-Darker`)
2. **Update tokens** - Add mapping to both `tokens.json` and `tokens.js`
3. **Update CSS** - Add to `colors.css` with Figma variable name in comment
4. **Commit & Push** - Changes auto-publish to Chromatic

## Current Token Mappings

### Colors

| Figma Variable | CSS Variable | Hex Value | Usage |
|----------------|--------------|-----------|-------|
| `--Brand-Purple-Dark` | `--relay-purple-dark` | `#25254B` | Dark purple accent |
| `--Brand-Purple-Base` | `--relay-purple-base` | `#333366` | Primary brand purple |
| `--Brand-Purple-Light` | `--relay-purple-light` | `#6464B7` | Light purple tint |
| `--Brand-Purple-Lightest` | `--relay-purple-lightest` | `#B2B2F2` | Subtle backgrounds |
| `--Brand-Blue-Dark` | `--relay-blue-dark` | `#043359` | Dark blue accent |
| `--Brand-Blue-Base` | `--relay-blue-base` | `#004B87` | Primary brand blue |
| `--Brand-Blue-Light` | `--relay-blue-light` | `#3573B1` | Light blue tint |
| `--Brand-Blue-Lightest` | `--relay-blue-lightest` | `#6ED0F6` | Subtle backgrounds |

## Usage Examples

### In CSS
```css
.button-primary {
  background-color: var(--relay-purple-base);
  border-color: var(--relay-purple-dark);
}

.button-primary:hover {
  background-color: var(--relay-purple-light);
}
```

### In JavaScript/React
```javascript
import { designTokens } from './styles/tokens';

// Get token value
const buttonColor = designTokens.colors['--Brand-Purple-Base'].value; // '#333366'

// Or use CSS var in inline styles
<button style={{ backgroundColor: 'var(--relay-purple-base)' }}>
  Click me
</button>
```

### With Helper Functions
```javascript
import { getCSSVarFromHex, getCSSVarFromFigma } from './styles/tokens';

// When Figma MCP gives you hex
const bgColor = '#333366';
const cssVar = getCSSVarFromHex(bgColor);
// Returns: '--relay-purple-base'

// Apply it
element.style.backgroundColor = `var(${cssVar})`;
```

## Benefits

1. **Single Source of Truth** - All design values defined in one place
2. **Automatic Mapping** - Figma hex values automatically resolve to semantic variables
3. **Type Safety** - Import tokens in JavaScript for validation
4. **Easy Updates** - Change token value once, updates everywhere
5. **Documentation** - Self-documenting with descriptions and mappings

## Best Practices

- ✅ **DO** use CSS variables (`var(--relay-purple-base)`) in stylesheets
- ✅ **DO** update token files when adding new Figma variables
- ✅ **DO** use helper functions to map Figma values to CSS variables
- ❌ **DON'T** hardcode hex values in components
- ❌ **DON'T** create CSS variables that don't map to Figma
- ❌ **DON'T** skip updating tokens.json when changing colors

## Maintenance

When updating colors:
1. Update in Figma first
2. Update `tokens.json` and `tokens.js` with new values
3. Run token sync (if automated) or manually update `colors.css`
4. Test in Storybook
5. Commit and push - Chromatic auto-publishes

---

For questions or to extend the token system, see the token utilities in `src/styles/tokens.js`.
