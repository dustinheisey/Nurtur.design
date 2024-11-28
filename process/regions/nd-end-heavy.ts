import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('end-heavy-region')
export class EndHeavyRegion extends LitElement {
  @property({ type: String })
  mobile = '';

  @property({ type: String })
  overrides = '';

  @property({ type: String })
  align = '';

  @property({ type: Object })
  start = {};

  @property({ type: Object })
  end = {};

  static styles = [css``];

  render() {
    return html`
      ${this.mobile === 'start'
        ? html`
            <div
              class="region sidebar sidebar-split gap-m ${this.overrides} ${this.align ? `align-${this.align}` : ''}"
            >
              <slot name="start" class="fixed"></slot>
              <slot name="end"></slot>
            </div>
          `
        : html`
            <div
              class="region sidebar reverse sidebar-split gap-m ${this.overrides} ${this.align
                ? `align-${this.align}`
                : ''}"
            >
              <slot name="end"></slot>
              <slot name="start" class="fixed"></slot>
            </div>
          `}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'end-heavy-region': EndHeavyRegion;
  }
}
