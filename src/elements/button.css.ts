import { css } from 'lit';

export const buttonStyles = css`
  .btn {
    color-scheme: light;
    font-family: var(--font-family-body);
    font-weight: 400;
    letter-spacing: var(--letter-spacing-body);
    color: var(--color-on-btn, var(--color-on-primary));
    line-height: var(--line-height-body);
    font-size: var(--font-size-s);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-3xs);
    inline-size: auto;
    cursor: pointer;
    background-color: var(--color-primary);
    border-radius: var(--radius-pill);
    border: 1.5px solid var(--color-primary);
    padding: var(--space-2xs) var(--space-s);
    box-shadow: var(--shadow-xs);
    transition: all 0.2s ease-in-out;
    position: relative;
    transform: translate3d(0, 0, 0);
    will-change: transform;
  }

  .btn:hover {
    box-shadow: var(--shadow-m);
    transform: translate3d(0, -2px, 0);
  }

  .btn-secondary {
    background-color: transparent;
    color: var(--color-btn, var(--color-primary));
    border-color: var(--color-btn, var(--color-primary));
    box-shadow: none;
  }

  .btn-secondary:hover {
    color: var(--color-on-btn, var(--color-primary));
    border-color: var(--color-btn, var(--color-primary));
    box-shadow: none;
  }

  .btn-tertiary {
    background-color: transparent;
    color: var(--color-btn, var(--color-primary));
    border-color: transparent;
    box-shadow: none;
    font-size: var(--font-size-s);

    /* text-decoration: underline; */
    padding-inline-start: 0;
  }

  .btn-tertiary.btn-l {
    font-size: var(--font-size-l);
  }

  .btn-tertiary:hover {
    border-color: transparent;
    background-color: transparent;
    box-shadow: none;
  }

  .btn-s {
    padding: var(--space-3xs) var(--space-xs);
  }

  .btn-l {
    padding: var(--space-2xs) var(--space-l);
  }

  .btn-circular {
    inline-size: 50px;
    block-size: 50px;
    padding: 0;
  }

  .btn-circular.btn-s {
    inline-size: 44px;
    block-size: 44px;
    padding: 0;
  }

  .btn-circular.btn-l {
    inline-size: 56px;
    block-size: 56px;
    padding: 0;
  }
`;
