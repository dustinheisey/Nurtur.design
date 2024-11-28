import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';


interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  class?: string;
  headline?: string;
  overline?: string;
  items: AccordionItem[];
}

@customElement('nd-accordion')
export class NdAccordion extends LitElement {
  @property({ type: Object }) props: AccordionProps = {
    items: []
  };

  static styles = [
    
    css`
      .region {
        display: block;
      }
      .prose {
        margin-bottom: var(--space-m);
      }
      .space-xl {
        margin-top: var(--space-xl);
      }
    `
  ];

  render() {
    return html`
      <div class="region ${this.props.class || ''}">
        ${this.props.headline ?
          html`
            <section class="prose">
              ${this.props.overline ?
                html` <p class="overline">${this.props.overline}</p> `
              : ''}
              <h2 class="region-headline">${this.props.headline}</h2>
            </section>
          `
        : ''}
        <div class="space-xl">
          ${this.props.items.map(
            (item) => html`
              <nd-component .props=${item}></nd-component>
              <hr />
            `
          )}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nd-accordion': NdAccordion;
  }
}
