import { css } from 'lit';

export const masonryStyles = css`
  /* ? The Masonry - Product galleries, testimonials, blog posts, portfolio items */

  /* Masonry style grid */
  .masonry {
    gap: var(--gap, var(--space-m));
    columns: 1;
  }

  .masonry > * {
    break-inside: avoid;
  }

  .masonry > * + * {
    margin-block-start: var(--gap, var(--space-m));
    display: block;
  }

  @media (--tablet-portrait-up) {
    .masonry.col-2 {
      columns: 2;
    }
  }

  @media (--tablet-landscape-up) {
    .masonry.col-3 {
      columns: 3;
    }
  }
`;
