<!-- import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

interface FooterConfig {
  variant: 'mission' | 'newsletter';
  mission?: string;
  newsletter?: {
    headline: string;
    body: string;
  };
  groups: {
    title: string;
    links: {
      url: string;
      label: string;
    }[];
  }[];
  carbon: boolean;
  social: {
    url: string;
    label: string;
    icon: string;
  }[];
  copywrite: string;
}

@customElement('footer-region')
export class FooterRegion extends LitElement {
  @property({ type: String })
  overrides = '';

  @property({ type: Object })
  config!: FooterConfig;

  static styles = [css``];

  render() {
    return html`
      <footer class="bg-img ${this.overrides}">
        <img src="/svg/footer-background.svg" alt="" />
        <div class="full stack align-center region">
          <div class="cluster justify-between full gap-xl align-start">
            <div class="stack align-start gap-xs">
              <a href="/">
                <span class="sr-only">Home</span>
              </a>
              ${this.renderVariantContent()}
            </div>

            <div class="cluster gap-2xl align-start">
              ${this.config.groups.map(
                group => html`
                  <div class="stack stack-bg gap-2xs">
                    <h3 class="title-headline">${group.title}</h3>
                    <ul class="stack gap-xs">
                      ${group.links.map(
                        link => html`
                          <li>
                            <a href="${link.url}" class="link link-s link-navigation"> ${link.label} </a>
                          </li>
                        `
                      )}
                    </ul>
                  </div>
                `
              )}
            </div>
          </div>

          <hr />

          ${this.config.carbon
            ? html`
                <div class="cluster full card theme-surface inset-s justify-center">
                  <div id="wcb" class="carbonbadge wcb-d"></div>
                  <script src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js" defer></script>
                </div>
              `
            : ''}

          <div class="cluster full justify-between">
            <ul class="cluster gap-xs">
              ${this.config.social.map(
                link => html`
                  <li>
                    <a href="${link.url}" target="_blank" class="btn btn-circular">
                      <span class="sr-only">${link.label}</span>
                      <tool-tip tip-position="block-start">${link.label}</tool-tip>
                    </a>
                  </li>
                `
              )}
            </ul>
            <small class="copywrite">${this.config.copywrite}</small>
          </div>
        </div>
      </footer>
    `;
  }

  private renderVariantContent() {
    if (this.config.variant === 'mission') {
      return html`
        <div class="prose prose-s">
          <p>${this.config.mission}</p>
        </div>
      `;
    }
    if (this.config.variant === 'newsletter') {
      return html`
        <h3 class="title-headline">${this.config.newsletter?.headline}</h3>
        <p class="measure-s">${this.config.newsletter?.body}</p>
        <form class="sidebar gap-0 input-group" method="post" name="newsletter">
          <input type="hidden" name="form-name" value="newsletter" />
          <label class="sr-only required" for="newsletter-email">Email Address</label>
          <input
            class="input"
            id="newsletter-email"
            name="newsletter-email"
            placeholder="Email Address"
            required
            type="email"
          />
          <button class="btn fixed btn-primary" type="submit">Subscribe</button>
        </form>
      `;
    }
    return '';
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'footer-region': FooterRegion;
  }
} -->
