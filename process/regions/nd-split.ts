import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { global } from '../index.css.js';

@customElement('split-region')
export class SplitRegion extends LitElement {
  @property({ type: String })
  theme = '';

  static styles = [global, css``];

  render() {
    return html`
      <div
        class="cover sidebar align-stretch sidebar-split gap-m theme-${this
          .theme}"
      >
        <slot name="start" class="fixed"></slot>
        <slot name="end" class="fixed"></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'split-region': SplitRegion;
  }
}
