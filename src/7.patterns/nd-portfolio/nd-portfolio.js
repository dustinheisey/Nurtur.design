import { LitElement, html, css } from 'lit'
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js'

class NdPortfolio extends LitElement {
  static properties = {
    class: { type: String },
    variant: { type: String },
    theme: { type: String },
    headline: { type: String },
    body: { type: String },
    config: { type: Object },
  }

  static styles = css`
    .region {
      padding: var(--inset-page);
      position: relative;
    }
    .theme-background {
      background-color: var(--color-background);
    }
    .theme-surface {
      background-color: var(--color-surface);
    }
    .stack {
      display: flex;
      flex-direction: column;
    }
    .align-center {
      align-items: center;
    }
    .gap-l {
      gap: var(--space-l);
    }
    .grid-2 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
    .gap-m {
      gap: var(--space-m);
    }
    .prose {
      max-width: var(--max-width-prose);
    }
    .frame {
      position: relative;
    }
    .section-headline {
      font-size: var(--font-size-section-headline);
    }
    .link-navigation {
      text-decoration: underline;
    }
  `

  constructor() {
    super()
    this.class = ''
    this.variant = 'masonry'
    this.theme = 'background'
    this.headline = ''
    this.body = ''
    this.config = { portfolio: [] }
  }

  render() {
    return html`
      <div
        class="region stack gap-l align-center ${this.class} theme-${this
          .theme}"
      >
        <h2 class="region-headline">${this.headline}</h2>
        ${this.body ? html`<p class="text-center">${this.body}</p>` : ''}
        <div class="grid grid-2 gap-m">
          ${this.config.portfolio.map(
            (item) => html`
              <div class="${this.class} prose">
                <div class="frame">
                  <img
                    src="./public/img/${item.data.img}"
                    alt="${item.data.alt}"
                  />
                </div>
                <h3 class="section-headline">
                  <a href="${item.data.permalink}" class="link-navigation"
                    >${item.data.title}</a
                  >
                </h3>
                <p>${item.data.summary}</p>
              </div>
            `
          )}
        </div>
      </div>
    `
  }
}

customElements.define('nd-portfolio', NdPortfolio)
