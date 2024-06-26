import { LitElement, html, css } from 'lit'

class NdBlog extends LitElement {
  static properties = {
    variant: { type: String },
    class: { type: String },
    theme: { type: String },
    classes: { type: String },
    headline: { type: String },
    body: { type: String },
    back: { type: Boolean },
    categories: { type: Array },
    posts: { type: Array },
  }

  static styles = css`
    .region {
      padding: var(--space-xl);
    }

    .stack {
      display: flex;
      flex-direction: column;
      gap: var(--space-l);
    }

    .gap-l {
      gap: var(--space-l);
    }

    .theme-background {
      background-color: var(--color-background);
      color: var(--color-on-background);
    }

    .text-center {
      text-align: center;
    }

    .center-intrinsic {
      margin-left: auto;
      margin-right: auto;
    }

    .region-headline {
      font-size: var(--font-size-3xl);
      color: var(--color-headline);
    }

    .reel {
      display: flex;
      overflow-x: auto;
      scrollbar-width: none;
    }

    .reel::-webkit-scrollbar {
      display: none;
    }

    .badge {
      display: inline-block;
      padding: var(--space-2xs) var(--space-xs);
      border-radius: var(--radius-pill);
      font-size: var(--font-size-s);
      text-align: center;
    }

    .badge-primary {
      background-color: var(--color-primary);
      color: var(--color-on-primary);
    }

    .badge-l {
      font-size: var(--font-size-m);
    }

    .masonry {
      display: grid;
      gap: var(--space-m);
    }

    .col-3 {
      grid-template-columns: repeat(3, 1fr);
    }

    .card {
      border-radius: var(--radius-l);
      box-shadow: var(--shadow-l);
      padding: var(--space-m);
    }

    .card-link {
      text-decoration: none;
      color: inherit;
    }

    .card-link:hover {
      box-shadow: var(--shadow-xl);
      transform: translateY(-2px);
    }

    .cluster {
      display: flex;
      align-items: center;
      gap: var(--space-2xs);
    }

    .align-center {
      align-items: center;
    }

    .gap-2xs {
      gap: var(--space-2xs);
    }

    .section-headline {
      font-size: var(--font-size-l);
      color: var(--color-headline);
    }

    .prose p {
      color: var(--color-text);
    }
  `

  constructor() {
    super()
    this.variant = 'masonry'
    this.class = ''
    this.theme = 'background'
    this.classes = ''
    this.headline = ''
    this.body = ''
    this.back = false
    this.categories = []
    this.posts = []
  }

  render() {
    return html`
      ${this.variant === 'masonry'
        ? html`
            <div
              class="region stack gap-l ${this.class} theme-${this.theme} ${this
                .classes}"
            >
              ${this.headline
                ? html`
                    <h2 class="region-headline text-center center-intrinsic">
                      ${this.headline}
                    </h2>
                  `
                : ''}
              ${this.body ? html` <p>${this.body}</p> ` : ''}
              <div class="reel justify-center no-bar">
                ${this.back
                  ? html`
                      <a href="/blog" class="badge badge-l badge-primary"
                        >All Posts</a
                      >
                    `
                  : ''}
                ${this.categories.map(
                  (category) => html`
                    <a
                      href="/categories/${category.label
                        .toLowerCase()
                        .replace(/\s+/g, '-')}"
                      class="badge badge-l badge-${category.theme}"
                      >${category.label}</a
                    >
                  `
                )}
              </div>
              <div class="masonry col-3 gap-m">
                ${this.posts.reverse().map((post) => {
                  const postCategory = this.categories.find(
                    (cat) => cat.label === post.tags[0]
                  ) || { theme: 'primary' }
                  return html`
                    <article
                      class="prose card card-link theme-${postCategory.theme}-container"
                    >
                      <a href="${post.url}">
                        <div class="cluster align-center gap-2xs">
                          <time datetime="${post.date}"
                            >${new Date(post.date).toLocaleDateString()}</time
                          >
                          <div class="badge badge-primary">
                            ${post.tags.join(', ')}
                          </div>
                        </div>
                        <h2 class="section-headline">${post.title}</h2>
                        <p>${post.description}</p>
                      </a>
                    </article>
                  `
                })}
              </div>
            </div>
          `
        : ''}
    `
  }
}

customElements.define('nd-blog', NdBlog)
