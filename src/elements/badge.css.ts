import { css } from 'lit';

export const badgeStyles = css`
  .badge-primary {
    --bg: var(--color-badge-primary, var(--color-primary-container));
    --on-bg: var(--color-on-badge-primary, var(--color-on-primary-container));
  }

  .badge-secondary {
    --bg: var(--color-badge-secondary, var(--color-secondary-container));
    --on-bg: var(
      --color-on-badge-secondary,
      var(--color-on-secondary-container)
    );
  }

  .badge-tertiary {
    --bg: var(--color-badge-tertiary, var(--color-tertiary-container));
    --on-bg: var(--color-on-badge-tertiary, var(--color-on-tertiary-container));
  }

  .badge {
    display: inline-flex;
    align-items: center;
    border-radius: var(--radius-pill);
    color: var(--on-bg);

    /* border: 1.5px solid var(--on-bg); */
    background-color: var(--bg);
    padding: var(--space-3xs) var(--space-2xs);
    font-size: var(--font-size-xs);
    font-weight: 500;
    font-family: var(--font-family-body);
  }

  .badge-l {
    font-size: var(--font-size-s);
    padding: var(--space-2xs) var(--space-xs);
  }

  .status::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-right: var(--space-2xs);
    border-radius: 50%;
    background-color: var(--on-bg);
  }
`;
