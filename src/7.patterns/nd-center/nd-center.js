import { LitElement, html, css } from 'lit'

class NdCenter extends LitElement {
  static properties = {
    theme: { type: String },
    text: { type: String },
    align: { type: String },
    class: { type: String },
    content: { type: Object },
  }

  static styles = css`
    .theme-background {
      background-color: var(--color-background);
      color: var(--color-on-background);
    }

    .stack {
      display: flex;
      flex-direction: column;
      gap: var(--space-m);
    }

    .text-center {
      text-align: center;
    }

    .align-center {
      align-items: center;
    }

    .align-start {
      align-items: flex-start;
    }

    .align-end {
      align-items: flex-end;
    }

    .text-start {
      text-align: start;
    }

    .text-end {
      text-align: end;
    }
  `

  constructor() {
    super()
    this.theme = 'background'
    this.text = 'center'
    this.align = 'center'
    this.class = ''
    this.content = {}
  }

  render() {
    return html`
      <div class="theme-${this.theme}">
        <div
          class="region stack text-${this.text} align-${this.align} gap-m ${this
            .class}"
        >
          ${this.renderContent(this.content)}
        </div>
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

customElements.define('nd-center', NdCenter)
