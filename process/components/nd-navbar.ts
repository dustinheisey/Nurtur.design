import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

interface NavLink {
  url: string;
  label: string;
  subLinks?: NavLink[];
}

interface NavConfig {
  header: {
    variant?: 'start' | 'center' | 'end' | 'spaced' | 'stack';
    links: NavLink[];
    action: {
      url: string;
      label: string;
    };
  };
  bottombar: {
    links: {
      url: string;
      label: string;
      icon: string;
    }[];
    fab: {
      url: string;
      label: string;
      icon: string;
    };
  };
}

@customElement('navbar-region')
export class NavbarRegion extends LitElement {
  @property({ type: Object })
  config!: NavConfig;

  @property({ type: String })
  type = '';

  static styles = css`
    nav {
      position: relative;
      padding: var(--inset-page);
    }

    #reading-progress {
      z-index: 1;
      background-color: var(--color-primary);
      width: 100vw;
      position: absolute;
      left: 0;
      block-size: 3px;
      bottom: 0;
      right: 0;
      transform: translate(-100vw, 0);
      will-change: transform;
      pointer-events: none;
    }

    .navbar {
      position: sticky;
      top: -200px;
      z-index: 999;
    }

    .navbar .logo-bg {
      fill: var(--color-background);
    }

    .navbar.floating .logo-bg {
      fill: var(--color-surface);
    }

    .navbar.floating {
      box-shadow: var(--shadow-l);
      animation: transition 0.2s ease-in-out;
      animation-fill-mode: forwards;
    }

    .navbar.floating > nav {
      padding: var(--space-2xs);
    }

    .navbar .topbar,
    .navbar a.btn {
      display: none;
    }

    .bottombar {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
    }

    .bottombar > ul {
      inline-size: 100%;
      position: relative;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      align-items: stretch;
      justify-content: space-around;
      background: var(--color-surface);
      box-shadow: var(--shadow-l);
      padding-block-end: env(safe-area-inset-bottom);
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
  `;

  render() {
    const variantClass = this.config.header.variant ? `justify-${this.getVariantAlignment()}` : '';

    return html`
      <nav>
        <div class="cluster region gap-xs ${variantClass} no-inset">
          <a href="/">
            <span class="sr-only">Home</span>
            <!-- Logo slot -->
            <slot name="logo"></slot>
          </a>

          <ul class="topbar cluster gap-m">
            ${this.renderNavLinks()}
          </ul>

          <div class="cluster gap-xs">
            <button
              type="button"
              class="dark-mode-toggle"
              id="theme-toggle"
              title="Toggles light &gt; dark"
              aria-live="polite"
            >
              <svg class="sun-and-moon" aria-hidden="true" width="20" height="20" viewBox="0 0 24 24">
                <circle class="sun" cx="12" cy="12" r="6" mask="url(#moon-mask)" fill="var(--color-primary)" />
                <g class="sun-beams" stroke="var(--color-primary)">
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </g>
                <mask class="moon" id="moon-mask">
                  <rect x="0" y="0" height="100%" width="100%" fill="white" />
                  <circle cx="24" cy="10" r="6" fill="black" />
                </mask>
              </svg>
              <tool-tip tip-position="block-end">Toggle <span class="badge badge-primary"></span></tool-tip>
            </button>
            <a href="${this.config.header.action.url}" class="btn"> ${this.config.header.action.label} </a>
          </div>

          ${this.renderBottomBar()}
        </div>

        ${this.type === 'article' ? html` <div id="reading-progress" aria-hidden="true"></div> ` : ''}
      </nav>
    `;
  }

  private getVariantAlignment(): string {
    switch (this.config.header.variant) {
      case 'start':
        return 'start';
      case 'center':
        return 'center';
      case 'end':
        return 'end';
      case 'spaced':
        return 'between';
      default:
        return '';
    }
  }

  private renderNavLinks() {
    return this.config.header.links.map(link => this.renderNavLink(link));
  }

  private renderNavLink(link: NavLink) {
    if (link.subLinks) {
      return html`
        <li>
          <drop-down>
            <a href="${link.url}" class="link link-navigation">${link.label}</a>
            <ul>
              ${link.subLinks.map(
                subLink => html`
                  <li>
                    <a href="${subLink.url}" class="link link-navigation"> ${subLink.label} </a>
                  </li>
                `
              )}
            </ul>
          </drop-down>
        </li>
      `;
    }
    return html`
      <li>
        <a href="${link.url}" class="link link-navigation">${link.label}</a>
      </li>
    `;
  }

  private renderBottomBar() {
    return html`
      <div class="bottombar">
        <ul>
          ${this.config.bottombar.links.map(
            item => html`
              <li>
                <a href="${item.url}" class="navigation">
                  <slot name="icon-${item.icon}"></slot>
                  <span>${item.label}</span>
                </a>
              </li>
            `
          )}
          <li class="fab">
            <a href="${this.config.bottombar.fab.url}">
              <span class="sr-only">${this.config.bottombar.fab.label}</span>
              <slot name="icon-${this.config.bottombar.fab.icon}"></slot>
            </a>
          </li>
        </ul>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'navbar-region': NavbarRegion;
  }
}
