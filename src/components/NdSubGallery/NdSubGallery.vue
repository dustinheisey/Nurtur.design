<!-- import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

type GalleryVariant = 'masonry' | 'stack' | 'grid';

@customElement('nd-subgallery')
export class NdSubgallery extends LitElement {
  @property({ type: String })
  overrides?: string;

  @property({ type: String })
  headline?: string;

  @property({ type: String })
  overline?: string;

  @property({ type: String })
  body?: string;

  @property({ type: String })
  variant?: GalleryVariant;

  @property({ type: Number })
  col: number = 2;

  static styles = [
    css`
      .stack {
        display: flex;
        flex-direction: column;
      }
      .masonry {
        columns: 3;
        gap: var(--space-m);
      }
      .grid {
        display: grid;
        gap: var(--space-m);
      }
    `
  ];

  private renderGalleryContent() {
    if (this.variant === 'masonry') {
      return html`
        <div class="masonry col-3 gap-m">
          <slot></slot>
        </div>
      `;
    }

    if (this.variant === 'stack') {
      return html`
        <div class="stack gap-m">
          <slot></slot>
        </div>
      `;
    }

    return html`
      <div class="grid grid-${this.col}">
        <slot></slot>
      </div>
    `;
  }

  render() {
    return html`
      <div class="stack ${this.overrides || ''}">
        ${this.headline
          ? html`
              <section class="prose center stack align-center text-center">
                ${this.overline ? html` <p class="overline">${this.overline}</p> ` : ''}
                <h2 class="page-headline">${this.headline}</h2>
                ${this.body ? html` <p>${this.body}</p> ` : ''}
              </section>
            `
          : ''}
        ${this.renderGalleryContent()}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nd-subgallery': NdSubgallery;
  }
} -->
