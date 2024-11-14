import { css } from 'lit';

export const dividerStyles = css`
  hr {
    border: none;
    border-top: 1px solid var(--color-outline-variant);
    margin: var(--space-l) 0;
    inline-size: 100%;
  }

  hr.outline {
    border-top-color: var(--color-outline);
  }

  details + hr {
    margin-block: var(--space-s);
  }
`;
