import { LitElement, html, css } from 'lit'

class NdEndHeavy extends LitElement {
  static properties = {
    mobile: { type: String },
    class: { type: String },
    align: { type: String },
    start: { type: Object },
    end: { type: Object },
  }

  static styles = css`
    .region {
      display: flex;
      gap: var(--space-m);
    }
    .sidebar {
      display: flex;
      flex-wrap: wrap;
    }
    .sidebar-split {
      flex: 1;
    }
    .reverse {
      flex-direction: row-reverse;
    }
    .fixed {
      flex-grow: 1;
    }
    .align-start {
      align-items: flex-start;
    }
    .align-center {
      align-items: center;
    }
    .align-end {
      align-items: flex-end;
    }
  `

  constructor() {
    super()
    this.mobile = 'end'
    this.class = ''
    this.align = ''
    this.start = {}
    this.end = {}
  }

  render() {
    const regionClass = `region sidebar ${this.mobile === 'start' ? 'sidebar-split' : 'reverse sidebar-split'} ${this.class} ${this.align ? `align-${this.align}` : ''}`
    return html`
      <div class="${regionClass}">
        ${this.mobile === 'start'
          ? html`
              <div class="fixed">${this.renderContent(this.start)}</div>
              ${this.renderContent(this.end)}
            `
          : html`
              ${this.renderContent(this.end)}
              <div class="fixed">${this.renderContent(this.start)}</div>
            `}
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

customElements.define('nd-end-heavy', NdEndHeavy)
