import { css } from 'lit';

export const pStyles = css`
  p {
    font-size: var(--font-size-body);
    line-height: var(--line-height-body);
    font-family: var(--font-family-body);
    font-weight: var(--font-weight-body);
    color: var(--color-on-background);
    max-inline-size: 60ch;
    min-inline-size: 10ch;
    margin: 0;
  }

  .measure-s {
    max-inline-size: 40ch;
  }

  .lead {
    font-size: var(--font-size-l);
    max-inline-size: 50ch;
    min-inline-size: 5ch;
    color: var(--color-on-background);
  }

  .overline {
    font-family: var(--font-family-body);
    font-size: var(--font-size-s);
    color: var(--color-primary);
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing-overline);
    font-weight: var(--font-weight-headline);
    min-inline-size: unset;
  }

  .color-primary {
    color: var(--color-primary);
  }
`;
