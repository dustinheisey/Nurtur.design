import { LitElement, html, css } from 'lit'

class NdNavbar extends LitElement {
  static properties = {
    config: { type: Object },
    type: { type: String },
  }

  static styles = css`
    nav {
      padding: var(--inset-page);
      position: relative;
    }
    #reading-progress {
      background-color: var(--color-primary);
      block-size: 3px;
      bottom: 0;
      left: 0;
      pointer-events: none;
      position: absolute;
      right: 0;
      transform: translate(-100vw, 0);
      width: 100vw;
      will-change: transform;
      z-index: 1;
    }
    .navbar {
      position: sticky;
      top: -200px;
      z-index: 999;
    }
    .navbar.floating {
      animation: transition 0.2s ease-in-out;
      animation-fill-mode: forwards;
      box-shadow: var(--shadow-l);
    }
    .navbar.floating > nav {
      padding: var(--space-2xs);
    }
    .navbar .topbar,
    .navbar a.btn {
      display: none;
    }
    .bottombar {
      bottom: 0;
      left: 0;
      position: fixed;
      right: 0;
    }
    .bottombar > ul {
      align-items: stretch;
      background: var(--color-surface);
      bottom: 0;
      box-shadow: var(--shadow-l);
      display: flex;
      inline-size: 100%;
      justify-content: space-around;
      left: 0;
      padding-block-end: env(safe-area-inset-bottom);
      position: relative;
      right: 0;
    }
    .bottombar > ul > * {
      min-block-size: 44px;
      min-inline-size: 44px;
    }
    .bottombar > ul > li {
      flex: 1;
    }
    .bottombar > ul svg {
      block-size: 20px;
      inline-size: 20px;
    }
    .bottombar > ul a {
      block-size: 100%;
      font-size: var(--font-size-xs) !important;
      font-weight: 500;
      gap: 4px !important;
      inline-size: 100%;
      padding-block: 12px;
    }
    .bottombar > ul .navigation {
      align-items: center;
      color: var(--color-primary);
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .fab {
      align-items: center;
      aspect-ratio: 1/1;
      background: var(--color-primary);
      border-radius: var(--radius-circle);
      bottom: 100%;
      box-shadow: var(--shadow-l);
      color: var(--color-on-primary);
      display: flex;
      fill: var(--color-on-primary);
      flex-direction: column;
      gap: var(--space-3xs);
      margin-block-end: var(--space-xs);
      margin-inline-end: var(--space-3xs);
      padding: var(--space-m);
      position: absolute;
      right: var(--space-3xs);
    }
    @media (--tablet-portrait-up) {
      .bottombar {
        display: none;
      }
      .navbar .topbar {
        display: flex;
      }
      .navbar a.btn {
        display: inline-block;
      }
    }
    @keyframes transition {
      from {
        background-color: transparent;
        top: -200px;
      }
      to {
        background-color: var(--color-surface);
        top: 0;
      }
    }
    .topbar {
      block-size: 4rem;
      padding-inline: var(--space-xs);
      inline-size: 100%;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      border-block-end: 1px solid var(--color-outline-variant);
      display: flex;
      align-items: center;
      justify-content: space-between;
      z-index: 1;
    }
    .bottombar {
      inline-size: 100%;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      align-items: stretch;
      justify-content: space-around;
      z-index: 1;
      border-block-start: 1px solid var(--color-outline-variant);
    }
    .bottombar > * {
      min-inline-size: 44px;
      min-block-size: 44px;
    }
    .bottombar > li {
      flex: 1;
    }
    .bottombar svg {
      inline-size: 20px;
      block-size: 20px;
    }
    .bottombar a {
      padding-block: 12px;
      inline-size: 100%;
      block-size: 100%;
      gap: 4px !important;
      font-size: var(--font-size--2) !important;
      font-weight: 700;
    }
    .navigation[aria-current='page'] {
      --headline-color: var(--primary-ui) !important;
    }
    .navigation {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-3xs);
      font-size: var(--font-size--1);
      position: relative;
      inline-size: max-content;
    }
  `

  render() {
    return html`
      <nav>
        <div
          class="cluster region gap-xs ${this.config.header.variant === 'start'
            ? 'justify-start'
            : this.config.header.variant === 'center'
              ? 'justify-center'
              : this.config.header.variant === 'end'
                ? 'justify-end'
                : this.config.header.variant === 'spaced'
                  ? 'justify-between'
                  : ''} no-inset"
        >
          <a href="/">
            <span class="sr-only">Home</span>
            <img src="./public/svg/logo.svg" alt="Logo" />
          </a>
          <ul class="topbar cluster gap-m">
            ${this.config.header.links.map(
              (link) => html`
                <li>
                  ${link.subLinks
                    ? html`
                        <drop-down>
                          <a
                            href="${link.url}"
                            class="link link-navigation"
                            aria-current="${link.isActive ? 'page' : ''}"
                          >
                            ${link.label}
                          </a>
                          <ul>
                            ${link.subLinks.map(
                              (subLink) => html`
                                <li>
                                  <a
                                    href="${subLink.url}"
                                    class="link link-navigation"
                                    aria-current="${subLink.isActive
                                      ? 'page'
                                      : ''}"
                                  >
                                    ${subLink.label}
                                  </a>
                                </li>
                              `
                            )}
                          </ul>
                        </drop-down>
                      `
                    : html`
                        <a href="${link.url}" class="link link-navigation">
                          ${link.label}
                        </a>
                      `}
                </li>
              `
            )}
          </ul>
          <div class="cluster gap-xs">
            <button
              type="button"
              class="dark-mode-toggle"
              id="theme-toggle"
              title="Toggles light & dark"
              aria-live="polite"
            >
              <svg
                focusable="false"
                class="sun-and-moon"
                aria-hidden="true"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <circle
                  class="sun"
                  cx="12"
                  cy="12"
                  r="6"
                  mask="url(#moon-mask)"
                  fill="var(--color-primary)"
                ></circle>
                <g class="sun-beams" stroke="var(--color-primary)">
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
                  <rect
                    x="0"
                    y="0"
                    height="100%"
                    width="100%"
                    fill="white"
                  ></rect>
                  <circle cx="24" cy="10" r="6" fill="black"></circle>
                </mask>
              </svg>
              <tool-tip tip-position="block-end"
                >Toggle <span class="badge badge-primary"></span
              ></tool-tip>
            </button>
            <a href="${this.config.header.action.url}" class="btn"
              >${this.config.header.action.label}</a
            >
          </div>
          <div class="bottombar">
            <ul>
              ${this.config.bottombar.links.map(
                (item) => html`
                  <li>
                    <a href="${item.url}" class="navigation">
                      <img src="${item.icon}" alt="${item.label}" />
                      <span>${item.label}</span>
                    </a>
                  </li>
                `
              )}
              <li class="fab">
                <a href="${this.config.bottombar.fab.url}">
                  <span class="sr-only"
                    >${this.config.bottombar.fab.label}</span
                  >
                  <img
                    src="${this.config.bottombar.fab.icon}"
                    alt="${this.config.bottombar.fab.label}"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        ${this.type === 'article'
          ? html`<div id="reading-progress" aria-hidden="true"></div>`
          : ''}
      </nav>
    `
  }

  firstUpdated() {
    const navbar = this.shadowRoot.querySelector('#navbar')
    const top = navbar.offsetTop
    window.addEventListener('scroll', () => {
      if (window.scrollY > top) {
        navbar.classList.add('floating')
      } else {
        navbar.classList.remove('floating')
      }
    })
  }
}

customElements.define('nd-navbar', NdNavbar)
