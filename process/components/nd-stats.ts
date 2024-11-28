import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

interface StatItem {
  headline: string;
  body: string;
}

@customElement('nd-stats')
export class NdStats extends LitElement {
  @property({ type: String })
  overrides?: string;

  @property({ type: String })
  headline?: string;

  @property({ type: String })
  overline?: string;

  @property({ type: String })
  body?: string;

  @property({ type: String })
  variant?: 'inline' | 'stack';

  @property({ type: Boolean })
  center?: boolean;

  @property({ type: Array })
  items: StatItem[] = [];

  static styles = [
    css`
      .switcher {
        display: flex;
        flex-wrap: wrap;
      }
      .grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
      }
    `
  ];

  private renderStats() {
    if (this.variant === 'inline') {
      return html`
        <div class="switcher switch-phone align-start gap-xl ${this.overrides}">
          ${this.items.map(
            item => html`
              <div class="prose stack gap-3xs ${this.center ? 'align-center text-center' : ''}">
                <h3 class="section-headline">${item.headline}</h3>
                <p>${item.body}</p>
              </div>
            `
          )}
        </div>
      `;
    }

    if (this.variant === 'stack') {
      return html`
        <div class="stack gap-l fixed ${this.overrides}">
          ${this.items.map(
            item => html`
              <div class="prose stack gap-3xs">
                <h3 class="section-headline">${item.headline}</h3>
                <p>${item.body}</p>
              </div>
            `
          )}
        </div>
      `;
    }

    return html`
      <div class="${this.overrides} grid grid-2 fixed">
        ${this.items.map(
          item => html`
            <div class="prose stack gap-3xs">
              <h3 class="section-headline">${item.headline}</h3>
              <p>${item.body}</p>
            </div>
          `
        )}
      </div>
    `;
  }

  render() {
    return html`
      <div class="stack gap-xl">
        ${this.headline
          ? html`
              <section>
                ${this.overline ? html`<p class="overline">${this.overline}</p>` : ''}
                <h2 class="region-headline">${this.headline}</h2>
                ${this.body ? html`<p>${this.body}</p>` : ''}
              </section>
            `
          : ''}
        ${this.renderStats()}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nd-stats': NdStats;
  }
}
