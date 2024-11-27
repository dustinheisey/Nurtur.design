import { css } from 'lit';

export const baseStyles = css`
  body {
    background-color: var(--color-background);
  }

  header {
    padding: 0;
  }

  .region {
    padding-inline: var(--inset, var(--inset-page));
    margin-inline: auto;
    max-inline-size: var(--max-inline-size-region);
    inline-size: 100%;
    padding-block: calc(var(--inset, var(--gap-page)) / 2);

    --gap: var(--gap-region);
  }

  footer .region {
    margin-block-end: var(--space-xl);
  }

  footer {
    padding: var(--inset-page);

    /* margin-block-start: calc(var(--gap-page) / 2);
  margin-block-end: calc(var(--gap-page) / 2); */
  }

  @media (min-width: 37.5em) {
    footer {
      margin-block-end: 0;
    }
  }

  footer.bg-img {
    padding: 0;
  }

  footer.bg-img > .stack {
    padding: var(--inset-page);
    padding-block-end: calc(2 * var(--inset-page));
  }

  .no-inset {
    padding-block: 0;
  }

  .gap {
    padding-block: unset;
    margin-block-start: calc(var(--gap-page) / 2);
  }

  :is(.region, .section, header, footer) > * {
    --gap: initial;
  }

  /* Accessibility */
  :focus {
    outline: 2px solid var(--color-primary);
    outline-offset: 3px;
    border-radius: var(--radius-s);
  }

  :focus:not(:focus-visible) {
    outline: none;
  }

  ::selection {
    background: var(--color-primary);
    color: var(--color-on-primary);
    text-shadow: none;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    white-space: nowrap;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
  }

  [hidden] {
    display: none !important;
  }

  .header-anchor {
    font-size: var(--font-size-xl);
    color: var(--color-primary);
  }
`;
