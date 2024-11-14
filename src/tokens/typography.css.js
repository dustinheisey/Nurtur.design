import { css } from 'lit';

export const typographyTokens = css`
  /* ? Typography */
  @font-face {
    font-family: Impact;
    src:
      local('Impact'),
      url('https://fonts.cdnfonts.com/s/19610/impact.woff') format('woff'),
      url('https://fonts.cdnfonts.com/s/19610/impact.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Open Sans';
    src:
      url('https://fonts.gstatic.com/s/opensans/v20/mem8YaGs126MiZpBA-UFVZ0b.woff2')
        format('woff2'),
      url('https://fonts.gstatic.com/s/opensans/v20/mem8YaGs126MiZpBA-UFVp0bb.woff')
        format('woff');
    font-weight: normal;
    font-style: normal;
  }

  :root {
    --font-family-headline: 'Impact', 'Arial Black', 'Arial Bold', sans-serif;
    --font-family-body: 'Open Sans', sans-serif;
    --font-size-xs: clamp(0.7rem, calc(0.81rem + -0.13vw), 0.78rem);
    --font-size-s: clamp(0.94rem, calc(0.94rem + 0vw), 0.94rem);
    --font-size-m: clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem);
    --font-size-l: clamp(1.35rem, calc(1.24rem + 0.55vw), 1.67rem);
    --font-size-xl: clamp(1.62rem, calc(1.41rem + 1.05vw), 2.22rem);
    --font-size-2xl: clamp(1.94rem, calc(1.59rem + 1.77vw), 2.96rem);
    --font-size-3xl: clamp(2.33rem, calc(1.77rem + 2.81vw), 3.95rem);
    --font-size-4xl: clamp(2.8rem, calc(1.94rem + 4.28vw), 5.26rem);
    --font-size-body: var(--font-size-m);
    --line-height-headline: 1.2;
    --line-height-body: 1.5;
    --letter-spacing-headline: 0.05em;
    --letter-spacing-body: 0em;
    --letter-spacing-overline: 0.025em;
    --font-weight-headline: 700;
    --font-weight-body: 400;
  }
`;
