import { css } from 'lit';

export const dropdownStyles = css`
  drop-down {
    position: relative;
    display: inline-block;
  }

  drop-down > a::after {
    content: '';
    display: inline-block;
    width: 0;
    height: 0;
    margin-inline-start: var(--space-3xs);
    border-top: var(--space-3xs) solid var(--color-primary);
    border-right: var(--space-3xs) solid transparent;
    border-bottom: var(--space-3xs) solid transparent;
    border-left: var(--space-3xs) solid transparent;
  }

  drop-down > ul {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: var(--space-3xs);
    z-index: 900;
    background-color: var(--color-surface);
    padding: var(--space-xs);
    border-radius: var(--radius-s);
    box-shadow: var(--shadow-xl);
    inline-size: max-content;
  }

  drop-down > ul li {
    inline-size: 100%;
  }

  drop-down > ul li a {
    inline-size: 100%;
  }

  drop-down:is(:hover, :focus-within) ul {
    opacity: 1;
    visibility: visible;
    transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);
  }

  drop-down::before {
    content: '; Has a sub menu: ';
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }
`;
