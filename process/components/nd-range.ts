import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';


@customElement('nd-range')
export class NdRange extends LitElement {
  @property({ type: Number })
  value: number = 0;

  @property({ type: String })
  prefix: string = '$';

  static styles = [
    
    css`
      .range-container {
        display: flex;
        align-items: center;
        gap: var(--space-xs);
      }
    `
  ];

  private handleInput(e: Event) {
    const input = e.target as HTMLInputElement;
    this.value = Number(input.value);
  }

  render() {
    return html`
      <div class="range-container">
        <input
          type="range"
          id="budget"
          .value=${String(this.value)}
          @input=${this.handleInput}
        />
        <output id="budget-value">${this.prefix}${this.value}</output>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nd-range': NdRange;
  }
}
