import { css } from 'lit';

export const elevationTokens = css`
  :root {
    --z-drawer: 700;
    --z-dialog: 800;
    --z-dropdown: 900;
    --z-toast: 950;
    --z-tooltip: 1000;
    --shadow-inset: inset 0 2px 4px 0 rgb(0 0 0 / 5%);
    --shadow-xs: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px -1px rgb(0 0 0 / 10%);
    --shadow-s: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -2px rgb(0 0 0 / 10%);
    --shadow-m: 0 10px 15px -3px rgb(0 0 0 / 10%),
      0 4px 6px -4px rgb(0 0 0 / 10%);
    --shadow-l: 0 20px 25px -5px rgb(0 0 0 / 10%),
      0 8px 10px -6px rgb(0 0 0 / 10%);
    --shadow-xl: 0 25px 50px -12px rgb(0 0 0 / 25%);
  }
`;