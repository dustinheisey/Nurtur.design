import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';


@customElement('nd-blockquote')
export class NdBlockquote extends LitElement {
  @property({ type: String })
  variant?: 'accent';

  @property({ type: String })
  quote: string = '';

  @property({ type: String })
  author: string = '';

  static styles = [
    
    css`
      .blockquote-accent {
        /* Add your accent styles here */
      }
    `
  ];

  render() {
    return html`
      <figure>
        <blockquote
          class="${this.variant === 'accent' ? 'blockquote-accent' : ''}"
        >
          ${this.variant === 'accent' ? this.quote : html`"${this.quote}"`}
        </blockquote>
        <figcaption class="overline">${this.author}</figcaption>
      </figure>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nd-blockquote': NdBlockquote;
  }
}
