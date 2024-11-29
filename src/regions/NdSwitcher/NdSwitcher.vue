<!-- import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('start-region')
export class StartRegion extends LitElement {
  @property({ type: String })
  overrides = '';

  static styles = [css``];

  render() {
    return html`
      <div class="region align-start stack text-start ${this.overrides}">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'start-region': StartRegion;
  }
} -->
