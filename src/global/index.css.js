import { baseStyles } from './base.css.js';
import { resetStyles } from './reset.css.js';

import { typographyTokens } from '../tokens/typography.css.js';
import { spaceTokens } from '../tokens/space.css.js';
import { colorTokens } from '../tokens/color.css.js';
import { borderRadiusTokens } from '../tokens/border-radius.css.js';

export const globalStyles = [
  baseStyles,
  resetStyles,
  typographyTokens,
  spaceTokens,
  colorTokens,
  borderRadiusTokens
];
