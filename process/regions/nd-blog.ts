import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

interface Category {
  data: {
    label: string;
    theme: string;
  };
}

interface Post {
  url: string;
  date: string;
  data: {
    title: string;
    description: string;
    tags: string[];
  };
}

function slugify(text: string): string {
  return text.toLowerCase().replace(/\s+/g, '-');
}

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString();
}

function formatTags(tags: string[]): string {
  return tags.join(', ');
}

@customElement('blog-region')
export class BlogRegion extends LitElement {
  @property({ type: String })
  variant = '';

  @property({ type: String })
  overrides = '';

  @property({ type: String })
  theme = 'background';

  @property({ type: String })
  headline = '';

  @property({ type: String })
  body = '';

  @property({ type: Boolean })
  back = false;

  @property({ type: Array })
  categories: Category[] = [];

  @property({ type: Array })
  posts: Post[] = [];

  static styles = [css``];

  private getPostCategory(post: Post): string {
    const category = this.categories.find(cat => post.data.tags.includes(cat.data.label));
    return category?.data.theme || 'default';
  }

  render() {
    return html`
      ${this.variant === 'masonry'
        ? html`
            <div class="region stack gap-l ${this.overrides} theme-${this.theme} ${this.overrides}">
              <h2 class="region-headline text-center center-intrinsic">${this.headline}</h2>
              ${this.body ? html`<p>${this.body}</p>` : ''}

              <div class="reel justify-center no-bar">
                ${this.back ? html` <a href="/blog" class="badge badge-l badge-primary">All Posts</a> ` : ''}
                ${this.categories.map(
                  category => html`
                    <a
                      href="/categories/${slugify(category.data.label)}/"
                      class="badge badge-l badge-${category.data.theme}"
                    >
                      ${category.data.label}
                    </a>
                  `
                )}
              </div>

              <div class="masonry col-3 gap-m">
                ${this.posts.map(
                  post => html`
                    <article class="prose card card-link theme-${this.getPostCategory(post)}-container">
                      <a href="${post.url}">
                        <div class="cluster align-center gap-2xs">
                          <time datetime="${post.date}">${formatDate(post.date)}</time>
                          <div class="badge badge-primary">${formatTags(post.data.tags)}</div>
                        </div>
                        <h2 class="section-headline">${post.data.title}</h2>
                        <p>${post.data.description}</p>
                      </a>
                    </article>
                  `
                )}
              </div>
            </div>
          `
        : ''}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'blog-region': BlogRegion;
  }
}
