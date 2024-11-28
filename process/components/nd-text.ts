import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

interface NavbarLink {
  url: string;
  label: string;
  icon?: string;
  subLinks?: Array<{ url: string; label: string }>;
}

interface NavbarConfig {
  header: {
    links: NavbarLink[];
    action: { url: string; label: string };
  };
  bottombar: {
    links: NavbarLink[];
    fab: { url: string; label: string; icon: string };
  };
}

interface Button {
  url: string;
  label: string;
  variant?: string;
}

interface Input {
  type: string;
  placeholder: string;
  btn: string;
}

@customElement('nd-text')
export class NdText extends LitElement {
  @property({ type: String })
  overrides?: string;

  @property({ type: Object })
  navbar?: NavbarConfig;

  @property({ type: String })
  overline?: string;

  @property({ type: String })
  size?: 'hero' | 'page' | 'region' | 'title';

  @property({ type: String })
  accent?: string;

  @property({ type: String })
  headline: string = '';

  @property({ type: String })
  lead?: string;

  @property({ type: String })
  body?: string;

  @property({ type: Object })
  btn?: Button;

  @property({ type: Object })
  input?: Input;

  @property({ type: Object })
  config = {
    align: 'start'
  };

  static styles = [
    css`
      .navbar {
        position: sticky;
        top: 0;
        z-index: 100;
      }
    `
  ];

  private renderNavbar() {
    if (!this.navbar) return '';

    return html`
      <header class="navbar">
        <nav class="inset-0">
          <div class="cluster justify-between region inset-0 gap-m">
            <a href="/">
              <span class="sr-only">Home</span>
              <nd-icon name="logo"></nd-icon>
            </a>
            <div class="cluster">
              <ul class="topbar cluster gap-m">
                ${this.navbar.header.links.map(link => {
                  if (link.subLinks) {
                    return html`
                      <li>
                        <nd-dropdown>
                          <a href="${link.url}" class="link link-navigation">${link.label}</a>
                          <ul>
                            ${link.subLinks.map(
                              subLink => html`
                                <li>
                                  <a href="${subLink.url}" class="link link-navigation">${subLink.label}</a>
                                </li>
                              `
                            )}
                          </ul>
                        </nd-dropdown>
                      </li>
                    `;
                  }
                  return html`
                    <li>
                      <a href="${link.url}" class="link link-navigation">${link.label}</a>
                    </li>
                  `;
                })}
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
                    <!-- SVG content preserved as is -->
                  </svg>
                  <nd-tooltip tip-position="block-end">Toggle <span class="badge badge-primary"></span></nd-tooltip>
                </button>
                <a href="${this.navbar.header.action.url}" class="btn">${this.navbar.header.action.label}</a>
              </div>
            </div>
            <div class="bottombar">
              <ul>
                ${this.navbar.bottombar.links.map(
                  item => html`
                    <li>
                      <a href="${item.url}" class="navigation">
                        <nd-icon name="${ifDefined(item.icon)}"></nd-icon>
                        <span>${item.label}</span>
                      </a>
                    </li>
                  `
                )}
              </ul>
              <a href="${this.navbar.bottombar.fab.url}" class="fab">
                <span class="sr-only">${this.navbar.bottombar.fab.label}</span>
                <nd-icon name="${this.navbar.bottombar.fab.icon}"></nd-icon>
              </a>
            </div>
          </div>
        </nav>
      </header>
    `;
  }

  private renderHeadline() {
    const headlineContent = this.accent
      ? html`<span class="color-primary">${this.accent}</span>${this.headline}`
      : this.headline;

    switch (this.size) {
      case 'hero':
        return html`<h1 class="hero-headline">${headlineContent}</h1>`;
      case 'page':
        return html`<h1 class="page-headline">${headlineContent}</h1>`;
      case 'region':
        return html`<h2 class="region-headline">${headlineContent}</h2>`;
      case 'title':
        return html`<h3 class="title-headline">${headlineContent}</h3>`;
      default:
        return '';
    }
  }

  render() {
    return html`
      <div class="stack gap-xl ${this.overrides}">
        ${this.renderNavbar()}
        <section class="prose auto stack gap-xs justify-center align-${this.config.align} grow-1">
          ${this.overline ? html`<p class="overline">${this.overline}</p>` : ''} ${this.renderHeadline()}
          ${this.lead ? html`<p class="lead">${this.lead}</p>` : ''} ${this.body ? html`<p>${this.body}</p>` : ''}
          ${this.btn
            ? html`
                <a href="${this.btn.url}" class="btn ${this.btn.variant ? `btn-${this.btn.variant}` : ''}"
                  >${this.btn.label}</a
                >
              `
            : ''}
          ${this.input
            ? html`
                <div class="input-group">
                  <input
                    type="${this.input.type as 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'}"
                    placeholder="${this.input.placeholder}"
                    class="input"
                  />
                  <button type="submit" class="btn btn-primary">${this.input.btn}</button>
                </div>
              `
            : ''}
        </section>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nd-text': NdText;
  }
}
