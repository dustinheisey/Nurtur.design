import { css } from 'lit';

export const avatarStyles = css`
  .avatar {
    border-radius: 50%;
    inline-size: 2em;
    aspect-ratio: 1/1;
    font-size: 1.25em;
    border: 3px solid var(--color-background);
  }

  .avatar-img {
    max-inline-size: 25em;
    aspect-ratio: 1/1;
    border-radius: var(--radius-l);
  }

  .avatar-s {
    font-size: 1em;
  }

  .avatar-l {
    font-size: 1.5em;
  }

  .avatar-list {
    display: inline-flex;
    flex-flow: row nowrap;
    align-items: baseline;
  }

  .avatar-list > *:not(:first-child) {
    margin-inline-start: -0.5em;
  }
`;
