<!-- <script setup lang="ts">

const src = studentImages[`/src/assets/img/students/${slug}.jpg`] as string
</script>

<template>
  <router-link :to="`/profile/${slug}`" class="card">
    <div class="frame">
      <img :src :alt="name" />
    </div>
    <section class="student-info stack gap-0 inset-m align-center text-center">
      <h3 class="color-primary section-headline">{{ name }}</h3>
      <p class="cluster justify-center gap-2xs">
        <span class="overline">{{ team }}</span>
        <span class="badge badge-tertiary">{{ year }}</span>
      </p>
    </section>
  </router-link>
</template>

<style scoped lang="scss">
.inline {
  display: inline-flex;
  flex-wrap: nowrap;
}
.inline > span {
  inline-size: max-content;
}
img {
  inline-size: 100%;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
</style> -->

<!-- import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('nd-card')
export class NdCard extends LitElement {
  static styles = [
    css`
      .card {
        box-shadow: var(--shadow-l);
        padding: var(--space-m);
        border-radius: var(--radius-l);
      }

      .card.card-link {
        transform: translate3d(0, 0, 0);
        will-change: transform;
        position: relative;
        transition: all 0.2s ease-in-out;
      }

      .card.card-link:hover {
        box-shadow: var(--shadow-xl);
        transform: translate3d(0, -2px, 0);
      }

      .card-image {
        padding: 0;
      }

      .card-image img,
      .card-image .frame {
        border-radius: var(--radius-l) var(--radius-l) 0 0;
      }

      .card-image > .content {
        padding: var(--space-m);
      }

      /* article {
      --img-scale: 1.001;
      --title-color: black;
      --link-icon-translate: -20px;
      --link-icon-opacity: 0;
      position: relative;
      border-radius: 16px;
      box-shadow: none;
      background: #fff;
      transform-origin: center;
      transition: all 0.4s ease-in-out;
      overflow: hidden;
    }

    article a::after {
      position: absolute;
      inset-block: 0;
      inset-inline: 0;
      cursor: pointer;
      content: "";
    }

    figure {
      margin: 0;
      padding: 0;
      aspect-ratio: 16 / 9;
      overflow: hidden;
    }

    article img {
      max-width: 100%;
      transform-origin: center;
      transform: scale(var(--img-scale));
      transition: transform 0.4s ease-in-out;
    }

    .article-body {
      padding: 24px;
    }

    article a {
      display: inline-flex;
      align-items: center;
      text-decoration: none;
      color: #28666e;
    }

    article a:focus {
      outline: 1px dotted #28666e;
    }

    article a .icon {
      min-width: 24px;
      width: 24px;
      height: 24px;
      margin-left: 5px;
      transform: translateX(var(--link-icon-translate));
      opacity: var(--link-icon-opacity);
      transition: all 0.3s;
    } */

      /* using the has() relational pseudo selector to update our custom properties
    article:has(:hover, :focus) {
      --img-scale: 1.1;
      --title-color: #28666e;
      --link-icon-translate: 0;
      --link-icon-opacity: 1;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
        rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    }

    @media screen and (max-width: 960px) {
      article {
        container: card/inline-size;
      }
      .article-body p {
        display: none;
      }
    }

    @container card (min-width: 380px) {
      .article-wrapper {
        display: grid;
        grid-template-columns: 100px 1fr;
        gap: 16px;
      }
      .article-body {
        padding-left: 0;
      }
      figure {
        width: 100%;
        height: 100%;
        overflow: hidden;
      }
      figure img {
        height: 100%;
        aspect-ratio: 1/1;
        object-fit: cover;
      }
    } */
    `
  ];

  render() {
    return html`
      {% if props.url %}
      <a href="{{props.url}}" class="prose stack card card-link theme-{{props.theme}}">
        {% if props.icon %}{% icon props.icon, "icon icon-l" %}{% endif %}
        <h3 class="title-headline">{{props.headline}}</h3>
        <p>{{props.body}}</p>
      </a>
      {% else %}
      <article
        class="{{class}} justify-start card theme-{{props.theme}}  {% if props.span %}span-{{props.span}}{% endif %} stack gap-xs"
      >
        {% if props.variant === 'list' %}
        <ul class="stack gap-{{props.gap or 'm'}}">
          {% for item in props.items %}
          <li class="inline align-start gap-xs">
            {% icon item.icon or props.icon, "icon-secondary" %} {{item.text or item}}
          </li>
          {% endfor %}
        </ul>
        {% else %} {% if props.time %}
        <div class="cluster">
          <time datetime="{{props.time}}">{{props.label}}</time>
        </div>
        {% endif %}
        <h3 class="title-headline">{% if props.icon %}{% icon props.icon, "icon" %}{% endif %}{{props.headline}}</h3>
        <p>{{props.body}}</p>
        {% endif %}
      </article>
      {% endif %}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nd-card': NdCard;
  }
} -->
