<!-- import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('end-region')
export class EndRegion extends LitElement {
  @property({ type: String })
  overrides = '';

  static styles = [css``];

  render() {
    return html`
      <div class="region gap-m stack align-end text-end ${this.overrides}">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'end-region': EndRegion;
  }
} -->
