import { css } from 'lit';

export const detailsStyles = css`
  details > summary {
    list-style-type: none;
    cursor: pointer;
    position: relative;
    padding-inline-end: var(--space-xl);
  }

  details {
    display: block;
  }

  details > summary::-webkit-details-marker {
    display: none;
  }

  details > summary::before {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    content: '+';
    font-size: var(--font-size-l);
  }

  details[open] > summary::before {
    content: '-';
    font-size: var(--font-size-xl);
  }

  details[open] > summary {
    margin-block-end: var(--space-s);
  }
`;
