import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';


@customElement('stack-region')
export class StackRegion extends LitElement {
  @property({ type: String })
  overrides = '';

  @property({ type: String })
  text = '';

  @property({ type: String })
  align = '';

  @property({ type: String })
  headline = '';

  @property({ type: String })
  overline = '';

  @property({ type: String })
  body = '';

  @property({ type: Array })
  items = [];

  static styles = [ css``];

  render() {
    return html`
      <div class="region inset stack ${this.overrides}">
        <section
          class="prose ${this.text ?
            `text-${this.text}`
          : 'text-center'} stack align-center"
        >
          ${this.headline ?
            html`
              ${this.overline ?
                html` <p class="overline">${this.overline}</p> `
              : ''}
              <h2 class="page-headline">${this.headline}</h2>
              ${this.body ? html` <p>${this.body}</p> ` : ''}
            `
          : ''}
        </section>

        <div class="stack gap-xl">
          ${this.items.map(
            () => html`
              <hr />
              <slot name="item"></slot>
            `
          )}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'stack-region': StackRegion;
  }
}
