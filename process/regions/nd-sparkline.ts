import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { global } from '../index.css.js';

@customElement('sparkline-region')
export class SparklineRegion extends LitElement {
  @property({ type: String })
  overrides = '';

  @property({ type: String })
  headline = '';

  @property({ type: String })
  overline = '';

  @property({ type: String })
  body = '';

  @property({ type: String })
  variant = '';

  @property({ type: Array })
  items = [];

  static styles = [global, css``];

  render() {
    return html`
      <div class="region stack ${this.overrides}">
        ${this.headline ?
          html`
            <section class="prose center text-center">
              ${this.overline ?
                html` <p class="overline">${this.overline}</p> `
              : ''}
              <h2 class="region-headline">${this.headline}</h2>
              ${this.body ? html` <p>${this.body}</p> ` : ''}
            </section>
          `
        : ''}

        <div class="sparkline ${this.getSparklineClass()}">
          <div class="line" aria-hidden="true"></div>
          <slot name="item"></slot>
        </div>
      </div>
    `;
  }

  private getSparklineClass(): string {
    switch (this.variant) {
      case 'inline':
        return 'sparkline-inline';
      case 'inline-staggered':
        return 'sparkline-inline-staggered';
      case 'block-staggered':
        return 'sparkline-block-staggered';
      default:
        return '';
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sparkline-region': SparklineRegion;
  }
}
