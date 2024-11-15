import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { global } from '../index.css.js';

interface ButtonProps {
  url: string;
  label: string;
  variant?: string;
}

@customElement('bg-pattern-region')
export class BgPatternRegion extends LitElement {
  @property({ type: String })
  pattern = '';

  @property({ type: String })
  overrides = '';

  @property({ type: String })
  theme = '';

  @property({ type: String })
  align = '';

  @property({ type: String })
  overline = '';

  @property({ type: String })
  headline = '';

  @property({ type: String })
  lead = '';

  @property({ type: Boolean })
  center = false;

  @property({ type: String })
  body = '';

  @property({ type: Object })
  btn?: ButtonProps;

  @property({ type: Boolean })
  input = false;

  static styles = [global, css``];

  render() {
    return html`
      <div
        class="region bg-pattern pattern-${this.pattern} ${this
          .overrides} theme-${this.theme} inset-xl"
      >
        <section class="prose ${this.align ? `stack align-${this.align}` : ''}">
          ${this.overline ?
            html` <p class="overline">${this.overline}</p> `
          : ''}
          ${this.headline ?
            html` <h2 class="region-headline">${this.headline}</h2> `
          : ''}
          ${this.lead ?
            html`
              <p class="lead ${this.center ? 'auto' : ''}">${this.lead}</p>
            `
          : ''}
          ${this.body ? html` <p>${this.body}</p> ` : ''}
          ${this.btn ?
            html`
              <a
                href="${this.btn.url}"
                class="btn ${this.btn.variant ? `btn-${this.btn.variant}` : ''}"
                >${this.btn.label}</a
              >
            `
          : ''}
          ${this.input ?
            html`
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
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'bg-pattern-region': BgPatternRegion;
  }
}
