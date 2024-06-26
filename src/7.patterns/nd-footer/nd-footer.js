import { LitElement, html, css } from 'lit'
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js'

class NdFooter extends LitElement {
  static properties = {
    class: { type: String },
    config: { type: Object },
  }

  static styles = css`
    footer {
      display: block;
      overflow: hidden;
      position: relative;
      width: 100%;
      background-color: var(--color-background);
    }
    .region {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: var(--space-xl);
    }
    .cluster {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-xl);
      justify-content: space-between;
      width: 100%;
    }
    .stack {
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
    }
    .prose {
      font-family: var(--font-family-body);
      color: var(--color-on-background);
    }
    .prose-s {
      font-size: var(--font-size-s);
    }
    .title-headline {
      font-size: var(--font-size-l);
      color: var(--color-on-background);
    }
    .measure-s {
      max-width: 40ch;
    }
    .input-group {
      display: flex;
      align-items: stretch;
      border-radius: var(--radius-pill);
      overflow: hidden;
    }
    .input {
      border: 1px solid var(--color-outline);
      padding: var(--space-2xs);
      flex: 1;
    }
    .btn {
      background-color: var(--color-primary);
      color: var(--color-on-primary);
      border: none;
      padding: var(--space-2xs) var(--space-s);
      cursor: pointer;
    }
    .btn-circular {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      width: 44px;
      height: 44px;
      background-color: var(--color-primary);
      color: var(--color-on-primary);
    }
    .link {
      text-decoration: none;
      color: var(--color-primary);
      font-size: var(--font-size-s);
    }
    .link-navigation {
      padding: var(--space-xs);
    }
    hr {
      border: none;
      border-top: 1px solid var(--color-outline-variant);
      width: 100%;
      margin: var(--space-m) 0;
    }
    .copywrite {
      font-size: var(--font-size-xs);
      color: var(--color-on-background);
    }
  `

  constructor() {
    super()
    this.class = ''
    this.config = {}
  }

  render() {
    return html`
      <footer class="bg-img ${this.class}">
        <img src="/svg/footer-background.svg" alt="" />
        <div class="full stack align-center region">
          <div class="cluster justify-between full gap-xl align-start">
            <div class="stack align-start gap-xs">
              <a href="/">
                <span class="sr-only">Home</span>
                ${unsafeHTML(this.getSvg('./public/svg/logo'))}
              </a>
              ${this.renderFooterContent()}
            </div>
            <div class="cluster gap-2xl align-start">
              ${this.config.footer.groups.map(
                (group) => html`
                  <div class="stack stack-bg gap-2xs">
                    <h3 class="title-headline">${group.title}</h3>
                    <ul class="stack gap-xs">
                      ${group.links.map(
                        (link) => html`
                          <li>
                            <a
                              href="${link.url}"
                              class="link link-s link-navigation"
                            >
                              ${link.label}
                            </a>
                          </li>
                        `
                      )}
                    </ul>
                  </div>
                `
              )}
            </div>
          </div>
          <hr />
          ${this.config.footer.carbon
            ? html`
                <div
                  class="cluster full card theme-surface inset-s justify-center"
                >
                  <div id="wcb" class="carbonbadge wcb-d"></div>
                  <script
                    src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js"
                    defer
                  ></script>
                </div>
              `
            : ''}
          <div class="cluster full justify-between">
            <ul class="cluster gap-xs">
              ${this.config.footer.social.map(
                (link) => html`
                  <li>
                    <a
                      href="${link.url}"
                      target="_blank"
                      class="btn btn-circular"
                    >
                      <span class="sr-only">${link.label}</span>
                      ${unsafeHTML(this.getIcon(link.icon))}
                      <tool-tip tip-position="block-start"
                        >${link.label}</tool-tip
                      >
                    </a>
                  </li>
                `
              )}
            </ul>
            <small class="copywrite">${this.config.footer.copywrite}</small>
          </div>
        </div>
      </footer>
    `
  }

  renderFooterContent() {
    const variant = this.config.footer.variant
    if (variant === 'mission') {
      return html`
        <div class="prose prose-s">
          <p>${this.config.footer.mission}</p>
        </div>
      `
    } else if (variant === 'newsletter') {
      return html`
        <h3 class="title-headline">
          ${this.config.footer.newsletter.headline}
        </h3>
        <p class="measure-s">${this.config.footer.newsletter.body}</p>
        <form class="sidebar gap-0 input-group" method="POST" name="newsletter">
          <input type="hidden" name="form-name" value="newsletter" />
          <label class="sr-only required" for="newsletter-email"
            >Email Address</label
          >
          <input
            class="input"
            id="newsletter-email"
            name="newsletter-email"
            placeholder="Email Address"
            required=""
            type="email"
          />
          <button class="btn fixed btn-primary" type="submit">Subscribe</button>
        </form>
      `
    }
  }

  getSvg(path) {
    // Implement fetching and returning SVG content from path
  }

  getIcon(icon) {
    // Implement fetching and returning icon content
  }
}

customElements.define('nd-footer', NdFooter)
