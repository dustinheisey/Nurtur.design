import { css } from 'lit';

export const inputStyles = css`
  input {
    cursor: pointer;
  }

  .input {
    font-family: var(--font-family-body);
    font-weight: 400;
    margin: 0;
    appearance: none;
    background-color: var(--color-surface);
    color: var(--color-on-background);
    border: 1px solid var(--color-outline-variant);
    padding: var(--space-3xs) var(--space-2xs) var(--space-3xs) var(--space-2xs);
    display: block;
    width: 100%;
    border-radius: var(--radius-s);
    box-shadow: none;
    font-size: var(--font-size-s);
    line-height: var(--line-height-body);
    margin-block-start: var(--space-2xs);
  }

  .input::placeholder {
    color: var(--color-outline);
  }

  .input:focus {
    border-color: transparent;
    outline: 2px solid var(--color-primary);
  }

  .input-underline {
    border-radius: 0;
    display: block;
    width: 100%;
    padding: 0 var(--space-2xs);
    border: none;
    border-block-end: 2px solid var(--color-outline);
  }

  .input-underline:focus {
    outline: none;
    border-color: var(--color-on-surface);
  }
`;
