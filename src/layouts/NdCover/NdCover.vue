<!-- The Cover - Above the fold content, optional header, footer -->
<script setup lang="ts">
import { computed } from 'vue';
import type { Align, Justify, Gap, Inset, Space } from '../layout-types.ts';

type Role = 'group';

const props = defineProps<{
  align?: Align;
  justify?: Justify;
  gap?: Gap;
  inset?: Inset;
  space?: Space;
  role?: Role;
}>();

const classes = computed(() => ({
  cover: true,
  [`${props.align}`]: props.align,
  [`${props.justify}`]: props.justify,
  [`${props.gap}`]: props.gap,
  [`${props.inset}`]: props.inset,
  [`${props.space}`]: props.space
}));
</script>
<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.cover {
  display: flex;
  flex-direction: column;
  min-block-size: 100vh;
  inline-size: 100%;
  gap: var(--gap-region);
  padding: var(--inset, var(--inset-page));
}

.cover > .main {
  margin-block: auto;
}

.cover.sidebar {
  padding: 0;
}

.cover.sidebar > :is(.stack, .prose) {
  padding: var(--inset, var(--inset-page));
}

.cover.sidebar :is(.frame, img) {
  border-radius: 0;
}

.cover.cover-s {
  min-block-size: 75vh;
}
</style>
