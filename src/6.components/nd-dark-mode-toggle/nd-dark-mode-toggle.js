import { LitElement, html, css } from 'lit'

class NdDarkModeToggle extends LitElement {
  static styles = css`
    .dark-mode-toggle {
      --size: 1.5rem;
      --icon-fill: var(--color-primary);
      --ease-elastic-3: cubic-bezier(0.5, 1.25, 0.75, 1.25);
      --ease-elastic-4: cubic-bezier(0.5, 1.5, 0.75, 1.25);
      --ease-3: cubic-bezier(0.25, 0, 0.3, 1);
      --ease-out-5: cubic-bezier(0, 0, 0, 1);

      color: var(--color-primary);
      aspect-ratio: 1/1;
      background: none;
      block-size: var(--size);
      border: none;
      border-radius: 50%;
      cursor: pointer;
      inline-size: var(--size);
      outline-offset: 5px;
      padding: 0;
      -webkit-tap-highlight-color: transparent;
      touch-action: manipulation;
    }

    .dark-mode-toggle > svg {
      block-size: 100%;
      inline-size: 100%;
      stroke-linecap: round;
    }

    .sun-and-moon > .sun,
    .sun-and-moon > .moon,
    .sun-and-moon > .sun-beams {
      transform-origin: center center;
    }

    .sun-and-moon > .moon circle {
      transform: translateX(7px);
    }

    [data-theme='dark'] .sun-and-moon > .moon circle {
      transform: translateX(-7px);
    }

    [data-theme='dark'] .sun-and-moon > .sun {
      transform: scale(1.75);
    }

    [data-theme='dark'] .sun-and-moon > .sun-beams {
      opacity: 0;
    }

    .dark-mode-toggle > .sun-and-moon > .sun {
      fill: var(--icon-fill);
    }

    .dark-mode-toggle:is(:hover, :focus-visible) > .sun-and-moon > .sun {
      fill: var(--icon-fill);
    }

    .dark-mode-toggle:is(:hover, :focus-visible) > .sun-and-moon > .sun-beams {
      stroke: var(--icon-fill);
    }

    [data-theme='dark'] .dark-mode-toggle > .sun-and-moon > .sun {
      fill: var(--icon-fill);
    }

    [data-theme='dark'] .dark-mode-toggle > .sun-and-moon > .sun-beams {
      stroke: var(--icon-fill);
    }

    @media (hover: none) {
      .dark-mode-toggle {
        --size: 2rem;
      }
    }

    @media (prefers-reduced-motion: no-preference) {
      .sun-and-moon > .sun {
        transition: transform 0.5s var(--ease-elastic-3);
      }

      .sun-and-moon > .sun-beams {
        transition:
          transform 0.5s var(--ease-elastic-4),
          opacity 0.5s var(--ease-3);
      }

      .sun-and-moon > .moon > circle {
        transform: translateX(-7px);
        transition: transform 0.25s var(--ease-out-5);
      }

      [data-theme='dark'] .sun-and-moon > .sun {
        transform: scale(1.75);
        transition-duration: 0.25s;
        transition-timing-function: var(--ease-3);
      }

      [data-theme='dark'] .sun-and-moon > .sun-beams {
        transform: rotateZ(-25deg);
        transition-duration: 0.15s;
      }

      [data-theme='dark'] .sun-and-moon > .moon > circle {
        transition-delay: 0.25s;
        transition-duration: 0.5s;
      }
    }
  `

  constructor() {
    super()
    this.storageKey = 'theme-preference'
    this.theme = { value: this.getColorPreference() }
  }

  firstUpdated() {
    this.reflectPreference()
    this.shadowRoot
      .getElementById('theme-toggle')
      .addEventListener('click', () => this.onClick())
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', ({ matches: isDark }) => {
        this.theme.value = isDark ? 'dark' : 'light'
        this.setPreference()
      })
  }

  getColorPreference() {
    if (localStorage.getItem(this.storageKey))
      return localStorage.getItem(this.storageKey)
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  }

  setPreference() {
    localStorage.setItem(this.storageKey, this.theme.value)
    this.reflectPreference()
  }

  reflectPreference() {
    document.firstElementChild.setAttribute('data-theme', this.theme.value)
    this.shadowRoot
      .getElementById('theme-toggle')
      ?.setAttribute('aria-label', this.theme.value)
  }

  onClick() {
    this.theme.value = this.theme.value === 'light' ? 'dark' : 'light'
    this.setPreference()
  }

  render() {
    return html`
      <button
        id="theme-toggle"
        class="dark-mode-toggle"
        aria-label="${this.theme.value}"
      >
        <svg
          class="sun-and-moon"
          aria-hidden="true"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <circle
            class="sun"
            cx="12"
            cy="12"
            r="6"
            mask="url(#moon-mask)"
            fill="currentColor"
          ></circle>
          <g class="sun-beams" stroke="currentColor">
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </g>
          <mask class="moon" id="moon-mask">
            <rect x="0" y="0" height="100%" width="100%" fill="white"></rect>
            <circle cx="24" cy="10" r="6" fill="black"></circle>
          </mask>
        </svg>
      </button>
    `
  }
}

customElements.define('nd-dark-mode-toggle', NdDarkModeToggle)
