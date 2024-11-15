import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { global } from '../index.css.js';

@customElement('start-heavy-region')
export class StartHeavyRegion extends LitElement {
  @property({ type: String })
  mobile = '';

  @property({ type: String })
  overrides = '';

  @property({ type: String })
  align = '';

  static styles = [global, css``];

  render() {
    return html`
      ${this.mobile === 'end' ?
        html`
          <div
            class="region sidebar sidebar-split gap-m ${this.overrides} ${(
              this.align
            ) ?
              `align-${this.align}`
            : ''}"
          >
            <slot name="end" class="fixed"></slot>
            <slot name="start"></slot>
          </div>
        `
      : html`
          <div
            class="region sidebar sidebar-split gap-m ${this.overrides} ${(
              this.align
            ) ?
              `align-${this.align}`
            : ''}"
          >
            <slot name="start"></slot>
            <slot name="end" class="fixed"></slot>
          </div>
        `}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'start-heavy-region': StartHeavyRegion;
  }
}
