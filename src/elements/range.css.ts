import { css } from 'lit';

export const rangeStyles = css`
  input[type='range']:focus {
    outline: none;
  }

  input[type='range']::-webkit-slider-thumb {
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--color-primary);
    cursor: pointer;
    transition: background 0.15s ease-in-out;
  }

  input[type='range']:hover::-webkit-slider-thumb {
    background: var(--color-primary);
  }

  input[type='range']:active::-webkit-slider-thumb {
    background: var(--color-primary);
  }

  input[type='range']::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border: 0;
    border-radius: 50%;
    background: var(--color-primary);
    cursor: pointer;
    transition: background 0.15s ease-in-out;
  }

  input[type='range']::-moz-range-thumb:hover {
    background: var(--color-primary);
  }

  input[type='range']:active::-moz-range-thumb {
    background: var(--color-primary);
  }

  input[type='range']:focus::-webkit-slider-thumb {
    box-shadow:
      0 0 0 3px var(--color-background),
      0 0 0 6px var(--color-primary);
  }

  output {
    font-family: var(--font-family-body);
    font-size: var(--font-size-s);
    color: var(--color-on-primary);
    display: inline-block;
    position: relative;
    line-height: 1.5;
    text-align: center;
    border-radius: 5px;
    background: var(--color-primary);
    padding: var(--space-3xs) var(--space-2xs);
    margin: 0;
    min-inline-size: 9ch;
  }

  input[type='range'] {
    cursor: pointer;
    appearance: none;
    border-radius: 3px;
    width: 100%;
    height: 6px;
    background-position: initial;
    background-size: initial;
    background-repeat: initial;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    line-height: var(--line-height-body);
    vertical-align: middle;
    margin: 0;
    background-color: var(--color-outline-variant);
  }
`;
