import { css } from 'lit';

export const radioStyles = css`
  .checkbox-label,
  .radio-label {
    display: grid;
    grid-template-columns: 1em auto;
    gap: 0.5em;
    margin-top: 1em;
    place-items: center;
  }

  label:focus-within > input[type='radio'] {
    color: var(--color-primary);
  }

  input[type='radio'] {
    appearance: none;
    background-color: var(--color-background);
    margin: 0;
    inline-size: 1.25em;
    block-size: 1.25em;
    border: 1px solid var(--color-outline);
    border-radius: 50%;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;
  }

  input[type='radio']::before {
    content: '';
    inline-size: 0.45em;
    block-size: 0.45em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em var(--color-surface);
    background-color: CanvasText;
  }

  input[type='radio']:checked::before {
    transform: scale(1);
  }

  input[type='radio']:focus,
  input[type='radio']:checked {
    outline: none;
    background-color: var(--color-primary);
    border: none;
  }

  /* Card */
  .input-card input[type='radio'] {
    clip: rect(0 0 0 0);
    clip-path: inset(100%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  .input-card span {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: var(--space-2xs);
    inline-size: 100%;
    min-block-size: 8rem;
    border-radius: var(--radius-m);
    border: 1px solid var(--color-outline-variant);
    background-color: var(--color-surface);
    color: var(--color-primary);
    box-shadow: var(--shadow-xs);
    transition: 0.15s ease;
    cursor: pointer;
    position: relative;
    padding: var(--space-2xs);
  }

  .input-card input[type='radio']:is(:hover, :focus) + span {
    border-color: var(--color-primary);
    box-shadow: var(--shadow-xs);
    box-shadow:
      0 5px 10px var(--color-primary-container),
      0 0 0 4px var(--color-primary-container);
  }

  .input-card input[type='radio']:checked + span {
    background-color: var(--color-primary);
    color: var(--color-on-primary);
  }

  .input-card span svg {
    width: 3rem;
    height: 3rem;
  }
`;
