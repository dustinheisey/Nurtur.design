import { css } from 'lit';

export const layoutUtilStyles = css`
  .reverse {
    flex-direction: row-reverse;
  }

  /* ? Utils */
  .justify-start {
    justify-content: start !important;
  }

  .justify-end {
    justify-content: end !important;
  }

  .justify-center {
    justify-content: center !important;
  }

  .justify-between {
    justify-content: space-between !important;
  }

  .justify-around {
    justify-content: space-around !important;
  }

  .justify-evenly {
    justify-content: space-evenly !important;
  }

  .justify-stretch {
    justify-content: stretch !important;
  }

  .align-start {
    align-items: start !important;
  }

  .align-end {
    align-items: end !important;
  }

  .align-center {
    align-items: center !important;
  }

  .align-stretch {
    align-items: stretch !important;
  }

  .align-baseline {
    align-items: baseline !important;
  }

  .full {
    inline-size: 100%;
  }
`;
