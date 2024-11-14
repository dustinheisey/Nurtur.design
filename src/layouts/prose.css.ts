import { css } from 'lit';

export const proseStyles = css`
  /* P */
  .prose-l p {
    max-inline-size: 66ch;
  }

  .prose-l :is(h1, h2, h3, h4, h5, h6) {
    max-inline-size: 25ch;
  }

  .prose-l ul:not(.no-marker) {
    list-style: disc !important;
  }

  .prose-l ol:not(.no-marker) {
    list-style: decimal !important;
  }

  .prose-l :not(.no-marker) li {
    display: revert !important;
  }

  .prose-l :not(.no-marker) li::marker {
    color: var(--color-primary) !important;
  }

  .prose :not(.not-prose):where(p) {
    margin-block: var(--space-s);
  }

  .prose.prose-s :not(.not-prose):where(p) {
    max-inline-size: 30ch;
  }

  /* Overline */
  .prose :not(.not-prose):where(.overline) {
    margin-block-end: 0;
  }

  /* Lead P */
  .prose :not(.not-prose):where(p.lead) {
    margin-block-end: var(--space-xs);
  }

  /* Blockquote */
  .prose :not(.not-prose):where(blockquote) {
    margin-block-end: var(--space-l);
    margin-block-start: var(--space-2xl);
    margin-inline: 0;
  }

  /* Pre */
  .prose :not(.not-prose):where(pre) {
    margin-block: var(--space-l);
  }

  /* Hr */
  .prose :not(.not-prose):where(hr) {
    margin-block: var(--space-xl);
  }

  .prose :not(.not-prose):where(hr + *) {
    margin-block-start: 0;
  }

  /* Table */
  .prose :not(.not-prose):where(table) {
    margin-block: var(--space-l);
  }

  /* List */
  .prose :not(.not-prose):where(ol, ul) {
    /* padding-inline-start: var(--space-s); */
  }

  .prose :not(.not-prose):where(li) {
    margin-block: var(--space-2xs);
    font-size: var(--font-size-body);
    display: inline-flex;
    align-items: flex-start;
    gap: var(--space-xs);
    line-height: var(--line-height-body);
  }

  .prose :not(.not-prose):where(ul > li, ol > li) {
    /* padding-inline-start: var(--space-2xs); */
  }

  /* Figure, Img */
  .prose :not(.not-prose):where(figure, picture) {
    margin-block: var(--space-m);
  }

  .prose :not(.not-prose):where(figure > *) {
    margin-block: 0;
  }

  .prose :not(.not-prose):where(figcaption) {
    margin-block-start: 1em;
  }

  /* Title */
  .prose :not(.not-prose):where(h4, .title-headline) {
    margin-block-start: var(--space-m);
    margin-block-end: var(--space-2xs);
  }

  /* Section */
  .prose :not(.not-prose):where(h3, .section-headline) {
    margin-block-start: var(--space-s);
    margin-block-end: var(--space-2xs);
  }

  /* Region */
  .prose :not(.not-prose):where(h2),
  .prose :not(.not-prose):where(.region-headline) {
    margin-block-start: var(--space-m);
    margin-block-end: var(--space-s);
  }

  .prose :not(.not-prose):where(svg + h4) {
    margin-block-start: var(--space-xs);
  }

  /* Page */

  /* Hero */

  .prose
    :not(.not-prose):where(
      :first-child,
      h2 + *,
      .region-headline + *,
      h3 + *,
      .section-headline + *,
      h4 + *,
      .title-headline + *
    ) {
    margin-block-start: 0;
  }

  .prose :not(.not-prose):where(.overline + *) {
    margin-block-start: var(--space-xs);
  }

  .prose :not(.not-prose):where(:last-child) {
    margin-block-end: 0;
  }
`;
