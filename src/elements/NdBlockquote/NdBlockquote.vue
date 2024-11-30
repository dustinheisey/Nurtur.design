<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  quote: string;
  author?: string;
  accent?: boolean;
}>();

const classes = computed(() => ({
  'blockquote-accent': props.accent
}));
</script>

<template>
  <figure>
    <blockquote :class="classes">
      {{ quote }}
    </blockquote>
    <figcaption v-if="author" class="overline">{{ author }}</figcaption>
  </figure>
</template>

<style lang="scss" scoped>
figure {
  margin: 0;
}

blockquote {
  border: none;
  quotes: '\201C' '\201D' '\2018' '\2019';
  position: relative;
  margin: 0;
  font-family: var(--font-family-headline);
  font-style: italic;
  font-size: var(--font-size-xl);
  line-height: var(--line-height-body);
  color: var(--color-blockquote-override, var(--color-on-background));
  max-width: 40ch;
}

blockquote.blockquote-accent {
  margin-block-start: var(--space-xl);
}

blockquote.blockquote-accent::before {
  content: open-quote;
  font-size: 7.5em;
  position: absolute;
  top: -0.75em;
  left: -0.05em;
  font-style: normal;
  font-family: var(--font-family-headline);
  color: var(--color-primary);
}

blockquote ~ figcaption {
  padding: 0;
  margin-block-start: var(--space-xs);
  font-family: var(--font-family-body);
  font-size: var(--font-size-s);
  color: var(--color-primary);
}
</style>
