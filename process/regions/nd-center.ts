import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';


@customElement('center-region')
export class CenterRegion extends LitElement {
  @property({ type: String })
  theme = 'background';

  @property({ type: String })
  text = '';

  @property({ type: String })
  align = '';

  @property({ type: String })
  overrides = '';

  @property({ type: Object })
  content = {};

  static styles = [ css``];

  render() {
    return html`
      <div class="theme-${this.theme}">
        <div
          class="region stack 
          ${this.text ? `text-${this.text}` : 'text-center'}
          ${this.align ? `align-${this.align}` : 'align-center'}
          gap-m ${this.overrides}"
        >
          <slot></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'center-region': CenterRegion;
  }
}
