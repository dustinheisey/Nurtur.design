import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('nd-details')
export class NdDetails extends LitElement {
  @property({ type: String })
  overrides?: string;

  @property({ type: String })
  theme?: string;

  @property({ type: String })
  headline: string = '';

  @property({ type: String })
  body: string = '';

  static styles = [
    css`
      details {
        width: 100%;
      }
    `
  ];

  render() {
    return html`
      <details class="${this.overrides} ${this.theme ? `theme-${this.theme}` : ''}">
        <summary>
          <h3 class="title-headline">${this.headline}</h3>
        </summary>
        <p>${this.body}</p>
      </details>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nd-details': NdDetails;
  }
}
