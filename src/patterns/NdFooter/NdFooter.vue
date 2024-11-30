<script setup lang="ts">
import { computed } from 'vue';

// Footer Configuration Interface
interface FooterConfig {
  variant: 'mission' | 'newsletter';
  mission?: string;
  newsletter?: {
    headline: string;
    body: string;
  };
  groups: {
    title: string;
    links: {
      url: string;
      label: string;
    }[];
  }[];
  carbon: boolean;
  social: {
    url: string;
    label: string;
    icon: string;
  }[];
  copywrite: string;
}

// Props definition
const props = defineProps<{
  overrides?: string; // Additional CSS class overrides
  config: FooterConfig; // Footer configuration object
}>();

// Default Props
withDefaults(props, {
  overrides: ''
});

// Computed classes for footer
const footerClasses = computed(() => ['bg-img', props.overrides || '']);
</script>

<template>
  <footer :class="footerClasses">
    <img src="/svg/footer-background.svg" alt="" />

    <div class="full stack align-center region">
      <!-- Header Content -->
      <div class="cluster justify-between full gap-xl align-start">
        <div class="stack align-start gap-xs">
          <a href="/">
            <span class="sr-only">Home</span>
          </a>
          <!-- Render Variant Content -->
          <div v-if="config.variant === 'mission'" class="prose prose-s">
            <p>{{ config.mission }}</p>
          </div>
          <div v-if="config.variant === 'newsletter'">
            <h3 class="title-headline">{{ config.newsletter?.headline }}</h3>
            <p class="measure-s">{{ config.newsletter?.body }}</p>
            <form class="sidebar gap-0 input-group" method="post" name="newsletter">
              <input type="hidden" name="form-name" value="newsletter" />
              <label class="sr-only required" for="newsletter-email">Email Address</label>
              <input
                class="input"
                id="newsletter-email"
                name="newsletter-email"
                placeholder="Email Address"
                required
                type="email"
              />
              <button class="btn fixed btn-primary" type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <!-- Groups Section -->
        <div class="cluster gap-2xl align-start">
          <div v-for="group in config.groups" :key="group.title" class="stack stack-bg gap-2xs">
            <h3 class="title-headline">{{ group.title }}</h3>
            <ul class="stack gap-xs">
              <li v-for="link in group.links" :key="link.url">
                <a :href="link.url" class="link link-s link-navigation">{{ link.label }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr />

      <!-- Carbon Badge -->
      <div v-if="config.carbon" class="cluster full card theme-surface inset-s justify-center">
        <div id="wcb" class="carbonbadge wcb-d"></div>
        <script src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js" defer></script>
      </div>

      <!-- Social Links and Copywrite -->
      <div class="cluster full justify-between">
        <ul class="cluster gap-xs">
          <li v-for="social in config.social" :key="social.url">
            <a :href="social.url" target="_blank" class="btn btn-circular">
              <span class="sr-only">{{ social.label }}</span>
              <tool-tip tip-position="block-start">{{ social.label }}</tool-tip>
            </a>
          </li>
        </ul>
        <small class="copywrite">{{ config.copywrite }}</small>
      </div>
    </div>
  </footer>
</template>
