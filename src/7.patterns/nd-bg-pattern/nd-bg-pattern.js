import { LitElement, html, css } from 'lit'

class NdBgPattern extends LitElement {
  static properties = {
    pattern: { type: String },
    class: { type: String },
    theme: { type: String },
    align: { type: String },
    overline: { type: String },
    headline: { type: String },
    lead: { type: String },
    body: { type: String },
    btn: { type: Object },
    input: { type: Boolean },
  }

  static styles = css`
    .region {
      padding: var(--space-xl);
      background-size: cover;
      background-repeat: no-repeat;
    }

    .prose {
      max-width: 60ch;
      margin: 0 auto;
    }

    .stack {
      display: flex;
      flex-direction: column;
    }

    .align-center {
      align-items: center;
    }

    .align-start {
      align-items: flex-start;
    }

    .overline {
      font-size: var(--font-size-s);
      text-transform: uppercase;
      color: var(--color-primary);
    }

    .region-headline {
      font-size: var(--font-size-3xl);
      margin: var(--space-s) 0;
      color: var(--color-on-background);
    }

    .lead {
      font-size: var(--font-size-l);
      color: var(--color-on-background);
      margin: var(--space-s) 0;
    }

    .lead.auto {
      margin-left: auto;
      margin-right: auto;
    }

    p {
      font-size: var(--font-size-m);
      color: var(--color-on-background);
    }

    .btn {
      background-color: var(--color-primary);
      color: var(--color-on-primary);
      padding: var(--space-xs) var(--space-m);
      border-radius: var(--radius-pill);
      text-decoration: none;
      display: inline-block;
      margin-top: var(--space-m);
    }

    .btn:hover {
      background-color: var(--color-primary-hover);
    }

    .input-group {
      display: flex;
      align-items: stretch;
      border-radius: var(--radius-pill);
      overflow: hidden;
      margin-top: var(--space-m);
    }

    .input-group > input {
      flex: 1;
      padding: var(--space-xs);
      border: none;
      outline: none;
    }

    .input-group > button {
      padding: var(--space-xs) var(--space-m);
      background-color: var(--color-secondary);
      color: var(--color-on-secondary);
      border: none;
      cursor: pointer;
    }
  `

  constructor() {
    super()
    this.pattern = ''
    this.class = ''
    this.theme = ''
    this.align = ''
    this.overline = ''
    this.headline = ''
    this.lead = ''
    this.body = ''
    this.btn = null
    this.input = false
  }

  render() {
    return html`
      <div
        class="region bg-pattern pattern-${this.pattern} ${this
          .class} theme-${this.theme} inset-xl"
      >
        <section class="prose ${this.align ? `stack align-${this.align}` : ''}">
          ${this.overline ? html`<p class="overline">${this.overline}</p>` : ''}
          ${this.headline
            ? html`<h2 class="region-headline">${this.headline}</h2>`
            : ''}
          ${this.lead
            ? html`<p class="lead ${this.center ? 'auto' : ''}">
                ${this.lead}
              </p>`
            : ''}
          ${this.body ? html`<p>${this.body}</p>` : ''}
          ${this.btn
            ? html`<a
                href="${this.btn.url}"
                class="btn ${this.btn.variant ? `btn-${this.btn.variant}` : ''}"
                >${this.btn.label}</a
              >`
            : ''}
          ${this.input
            ? html`
                <form
                  class="sidebar gap-0 input-group"
                  method="POST"
                  name="newsletter"
                >
                  <input type="hidden" name="form-name" value="newsletter" />
                  <label class="sr-only required" for="newsletter-email"
                    >Email Address</label
                  >
                  <input
                    class="input"
                    id="newsletter-email"
                    name="newsletter-email"
                    required
                    type="email"
                    placeholder="Email Address"
                  />
                  <button class="btn btn-primary fixed" type="submit">
                    Subscribe
                  </button>
                </form>
              `
            : ''}
        </section>
      </div>
    `
  }
}

customElements.define('nd-bg-pattern', NdBgPattern)
