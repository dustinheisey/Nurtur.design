import { css } from 'lit';

export const sparklineStyles = css`
  .sparkline {
    position: relative;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: var(--space-m);
  }

  .sparkline .line {
    grid-column: 1/2;
    inline-size: 1px;
    block-size: 100%;
    background: var(--color-outline-variant);
    margin-block-start: var(--space-2xs);
  }

  .sparkline :not(.line) {
    grid-column: 2/3;
  }

  .sparkline .line::before {
    top: 0;
    content: '';
    display: block;
    width: 0.35rem;
    height: 0.35rem;
    background-color: var(--color-primary);
    border-radius: 50%;
    transform: translateX(-50%);
    margin-block-end: var(--space-xs);
  }

  @media (--tablet-landscape-up) {
    .sparkline-inline {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    .sparkline-inline .line {
      grid-row: 1/2;
      grid-column: span 1;
      inline-size: 100%;
      block-size: 1px;
    }

    .sparkline-inline :not(.line) {
      grid-row: 2/3;
      grid-column: auto;
    }

    .sparkline-inline .line::before {
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }

    .sparkline-inline-staggered {
      grid-template-columns: repeat(4, minmax(0, 1fr));
      grid-template-rows: 1fr max-content 1fr;
    }

    .sparkline-inline-staggered .line {
      grid-row: 2/3;
      grid-column: auto;
      inline-size: 100%;
      block-size: 1px;
    }

    .sparkline-inline-staggered .line::before {
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }

    .sparkline-inline-staggered :not(.line):nth-child(2) {
      grid-row: 1/2;
      grid-column: 1/2;
      align-self: end;
    }

    .sparkline-inline-staggered :not(.line):nth-child(6) {
      grid-row: 1/2;
      grid-column: 3/4;
      align-self: end;
    }

    .sparkline-inline-staggered :not(.line):nth-child(4) {
      grid-row: 3/4;
      grid-column: 2/3;
    }

    .sparkline-inline-staggered :not(.line):nth-child(8) {
      grid-row: 3/4;
      grid-column: 4/5;
    }

    .sparkline-block-staggered {
      grid-template-columns: 1fr max-content 1fr;
    }

    .sparkline-block-staggered .line {
      grid-column: 2/3;
    }

    .sparkline-block-staggered :not(.line):nth-child(2) {
      grid-column: 1/2;
      grid-row: 1/2;
    }

    .sparkline-block-staggered :not(.line):nth-child(6) {
      grid-column: 1/2;
      grid-row: 3/4;
    }

    .sparkline-block-staggered :not(.line):nth-child(4) {
      grid-column: 3/4;
      grid-row: 2/3;
    }

    .sparkline-block-staggered :not(.line):nth-child(8) {
      grid-column: 3/4;
      grid-row: 4/5;
    }
  }
`;
