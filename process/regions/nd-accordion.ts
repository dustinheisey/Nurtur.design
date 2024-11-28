import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';


interface AccordionItem {
  headline?: string;
  body?: string;
}

@customElement('accordion-region')
export class AccordionRegion extends LitElement {
  @property({ type: String })
  overrides = '';

  @property({ type: String })
  headline = '';

  @property({ type: String })
  overline = '';

  @property({ type: Array })
  items: AccordionItem[] = [];

  static styles = [ css``];

  render() {
    return html`
      <div class="region ${this.overrides}">
        ${this.headline ?
          html`
            <section class="prose">
              ${this.overline ?
                html` <p class="overline">${this.overline}</p> `
              : ''}
              <h2 class="region-headline">${this.headline}</h2>
            </section>
          `
        : ''}

        <div class="space-xl">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'accordion-region': AccordionRegion;
  }
}
