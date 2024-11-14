import { css } from 'lit';

export const iconStyles = css`
  .icon {
    display: inline-block;
    color: inherit;
    inline-size: 24px;
    block-size: 24px;
    line-height: 1;
    flex-shrink: 0;
    max-width: initial;
  }

  .icon use {
    /* icon secondary color */
    fill: currentColor;
  }

  .icon-primary {
    color: var(--color-primary);
  }

  .icon-secondary {
    color: var(--color-secondary);
  }

  .icon-tertiary {
    color: var(--color-tertiary);
  }

  /* --------------------------------

Sizes

-------------------------------- */
  :root {
    --icon-s: 0.8em;
    --icon-l: 1.2em;
  }

  /* relative units */
  .icon-s {
    inline-size: 20px;
    block-size: 20px;
  }

  .icon-l {
    inline-size: 32px;
    block-size: 32px;
  }

  .icon-xl {
    inline-size: 48px;
    block-size: 48px;
  }

  .block {
    display: block;
  }

  /* absolute units */
  .icon-16 {
    font-size: 16px;
  }

  .icon-20 {
    font-size: 20px;
  }

  .icon-24 {
    font-size: 24px;
  }

  .icon-32 {
    font-size: 32px;
  }

  /* --------------------------------

Stroke

-------------------------------- */

  .stroke-1 {
    stroke-width: 1px;
  }

  .stroke-2 {
    stroke-width: 2px;
  }

  .stroke-3 {
    stroke-width: 3px;
  }

  .stroke-4 {
    stroke-width: 4px;
  }

  /* --------------------------------

Caps/Corners

-------------------------------- */

  .icon use {
    --icon-stroke-linecap-butt: butt;

    stroke-miterlimit: 10;
    stroke-linecap: square;
    stroke-linejoin: miter;
  }

  .stroke-round use {
    --icon-stroke-linecap-butt: round;

    stroke-linecap: round;
    stroke-linejoin: round;
  }

  /* --------------------------------

Transformations/Animations

-------------------------------- */

  .icon-rotate-90 {
    transform: rotate(90deg);
  }

  .icon-rotate-180 {
    transform: rotate(180deg);
  }

  .icon-rotate-270 {
    transform: rotate(270deg);
  }

  .icon-flip-y {
    transform: scaleY(-1);
  }

  .icon-flip-x {
    transform: scaleX(-1);
  }

  .icon-is-spinning {
    animation: icon-spin 1s infinite linear;
  }

  @keyframes icon-spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
