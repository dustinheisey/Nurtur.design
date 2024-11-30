<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  theme?: string;
  overrides?: string;
  headline?: string;
  overline?: string;
  body?: string;
  variant?: string;
  col?: number;
}>();

withDefaults(props, {
  theme: 'background',
  col: 3
});

const classes = computed(() => [`theme-${props.theme}`, props.overrides || '']);
</script>

<template>
  <div :class="classes">
    <div class="region stack">
      <section v-if="headline" class="prose center stack align-center text-center">
        <p v-if="overline" class="overline">{{ overline }}</p>
        <h2 class="page-headline">{{ headline }}</h2>
        <p v-if="body">{{ body }}</p>
      </section>

      <div v-if="variant === 'masonry'" class="masonry col-3 gap-m">
        <slot></slot>
      </div>
      <div v-else :class="`grid grid-${col}`">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
