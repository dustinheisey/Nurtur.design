import { LitElement, html, css } from 'lit'
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js'

class NdStack extends LitElement {
  static properties = {
    class: { type: String },
    text: { type: String },
    headline: { type: String },
    overline: { type: String },
    body: { type: String },
    items: { type: Array },
  }

  static styles = css`
    .region {
      padding: var(--space-xl);
    }
    .stack {
      display: flex;
      flex-direction: column;
    }
    .text-center {
      text-align: center;
    }
    .align-center {
      align-items: center;
    }
    .gap-xl > * + * {
      margin-block-start: var(--space-xl);
    }
    .prose {
      max-width: 75ch;
      margin: 0 auto;
    }
    .page-headline {
      font-size: var(--font-size-3xl);
    }
    .overline {
      font-size: var(--font-size-s);
      text-transform: uppercase;
      margin-bottom: var(--space-xs);
    }
    hr {
      border: none;
      border-top: 1px solid var(--color-outline-variant);
      margin: var(--space-l) 0;
    }
  `

  constructor() {
    super()
    this.class = ''
    this.text = 'center'
    this.headline = ''
    this.overline = ''
    this.body = ''
    this.items = []
  }

  render() {
    return html`
      <div class="region inset stack ${this.class}">
        <section class="prose text-${this.text} stack align-center">
          ${this.overline ? html`<p class="overline">${this.overline}</p>` : ''}
          ${this.headline
            ? html`<h2 class="page-headline">${this.headline}</h2>`
            : ''}
          ${this.body ? html`<p>${this.body}</p>` : ''}
        </section>
        <div class="stack gap-xl">
          ${this.items.map(
            (item) =>
              html`<hr />
                ${unsafeHTML(item)}`
          )}
        </div>
      </div>
    `
  }
}

customElements.define('nd-stack', NdStack)
