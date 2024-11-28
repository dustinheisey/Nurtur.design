import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

interface PortfolioItem {
  data: {
    img: string;
    alt: string;
    permalink: string;
    title: string;
    summary: string;
  };
}

@customElement('portfolio-region')
export class PortfolioRegion extends LitElement {
  @property({ type: String })
  variant = '';

  @property({ type: String })
  overrides = '';

  @property({ type: String })
  theme = 'background';

  @property({ type: String })
  headline = '';

  @property({ type: String })
  body = '';

  @property({ type: Array })
  portfolio: PortfolioItem[] = [];

  static styles = [css``];

  render() {
    return html`
      ${this.variant === 'masonry'
        ? html`
            <div class="region stack gap-l ${this.overrides} theme-${this.theme}">
              <h2 class="region-headline text-center center-intrinsic">${this.headline}</h2>
              ${this.body ? html`<p>${this.body}</p>` : ''}

              <div class="grid grid-2 gap-m">
                ${this.portfolio.map(
                  item => html`
                    <div class="prose">
                      <div class="frame">
                        <img src="/img/${item.data.img}" alt="${item.data.alt}" />
                      </div>
                      <h3 class="section-headline">
                        <a href="${item.data.permalink}" class="link-navigation">${item.data.title}</a>
                      </h3>
                      <p>${item.data.summary}</p>
                    </div>
                  `
                )}
              </div>
            </div>
          `
        : ''}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'portfolio-region': PortfolioRegion;
  }
}
