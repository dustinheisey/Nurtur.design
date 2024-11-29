<!-- import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

interface ListItem {
  icon?: string;
  text?: string;
}

@customElement('nd-list')
export class NdList extends LitElement {
  @property({ type: String })
  overrides?: string;

  @property({ type: String })
  theme: string = 'background';

  @property({ type: Boolean })
  full?: boolean;

  @property({ type: String })
  headline?: string;

  @property({ type: String })
  overline?: string;

  @property({ type: String })
  body?: string;

  @property({ type: String })
  variant?: 'grid';

  @property({ type: String })
  icon?: string;

  @property({ type: Array })
  items: (ListItem | string)[] = [];

  static styles = [
    css`
      .grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
      }
    `
  ];

  private renderListItems() {
    const listClass = this.variant === 'grid' ? 'grid grid-2 gap-s' : 'stack gap-xs';

    return html`
      <ul class="${listClass}">
        ${this.items.map(item => {
          const itemIcon = typeof item === 'object' ? item.icon : this.icon;
          const itemText = typeof item === 'object' ? item.text : item;

          return html`
            <li class="inline align-start gap-xs">
              ${itemIcon ? html`<nd-icon name="${itemIcon}" class="icon-secondary"></nd-icon>` : ''} ${itemText}
            </li>
          `;
        })}
      </ul>
    `;
  }

  render() {
    return html`
      <section class="${this.overrides} theme-${this.theme} ${this.full ? 'full' : ''} stack gap-xl">
        ${this.headline
          ? html`
              <div class="prose">
                ${this.overline ? html`<p class="overline">${this.overline}</p>` : ''}
                <h2 class="region-headline">${this.headline}</h2>
                ${this.body ? html`<p>${this.body}</p>` : ''}
              </div>
            `
          : ''}
        ${this.renderListItems()}
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nd-list': NdList;
  }
} -->
