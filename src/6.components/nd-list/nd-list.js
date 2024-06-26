import { LitElement, html, css } from 'lit'

class NdList extends LitElement {
  static properties = {
    theme: { type: String },
    full: { type: Boolean },
    headline: { type: String },
    overline: { type: String },
    body: { type: String },
    variant: { type: String },
    items: { type: Array },
    icon: { type: String },
  }

  static styles = css`
    .stack {
      display: flex;
      flex-direction: column;
    }
    .gap-xl {
      gap: var(--space-xl);
    }
    .prose {
      max-width: 65ch;
    }
    .overline {
      font-size: var(--font-size-xs);
      color: var(--color-primary);
    }
    .region-headline {
      font-size: var(--font-size-2xl);
    }
    .grid {
      display: grid;
      gap: var(--space-s);
    }
    .grid-2 {
      grid-template-columns: repeat(2, 1fr);
    }
    .inline {
      display: flex;
    }
    .align-start {
      align-items: flex-start;
    }
    .gap-xs {
      gap: var(--space-xs);
    }
  `

  render() {
    return html`
      <section
        class="${this.full ? 'full' : ''} stack gap-xl theme-${this.theme ||
        'background'}"
      >
        ${this.headline
          ? html`
              <div class="prose">
                ${this.overline
                  ? html`<p class="overline">${this.overline}</p>`
                  : ''}
                <h2 class="region-headline">${this.headline}</h2>
                ${this.body ? html`<p>${this.body}</p>` : ''}
              </div>
            `
          : ''}
        ${this.variant === 'grid'
          ? html`
              <ul class="grid grid-2 gap-s">
                ${this.items.map(
                  (item) => html`
                    <li class="inline align-start gap-xs">
                      <span class="icon-secondary"
                        >${item.icon || this.icon}</span
                      >
                      ${item.text || item}
                    </li>
                  `
                )}
              </ul>
            `
          : html`
              <ul class="stack gap-xs">
                ${this.items.map(
                  (item) => html`
                    <li class="inline align-start gap-xs">
                      <span class="icon-secondary"
                        >${item.icon || this.icon}</span
                      >
                      ${item.text || item}
                    </li>
                  `
                )}
              </ul>
            `}
      </section>
    `
  }
}

customElements.define('nd-list', NdList)
