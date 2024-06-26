import { LitElement, html, css } from 'lit'

class NdEnd extends LitElement {
  static properties = {
    class: { type: String },
    content: { type: Object },
  }

  static styles = css`
    .region {
      display: flex;
      flex-direction: column;
      gap: var(--space-m);
      align-items: flex-end;
      text-align: end;
    }
  `

  constructor() {
    super()
    this.class = ''
    this.content = {}
  }

  render() {
    return html`
      <div class="region ${this.class}">
        ${this.renderContent(this.content)}
      </div>
    `
  }

  renderContent(content) {
    if (typeof content === 'string') {
      return html`${content}`
    } else if (Array.isArray(content)) {
      return content.map((item) => html`${this.renderContent(item)}`)
    } else {
      return html`${content}`
    }
  }
}

customElements.define('nd-end', NdEnd)
