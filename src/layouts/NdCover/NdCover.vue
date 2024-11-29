<script setup lang="ts">
import { computed } from 'vue';
import type { Align, Justify, Gap, Inset, Space, Role } from '../../types/common-types.ts';

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
  cluster: true,
  [`${props.align}`]: props.align,
  [`${props.justify}`]: props.justify,
  [`${props.gap}`]: props.gap,
  [`${props.inset}`]: props.inset,
  [`${props.space}`]: props.space
}));
</script>
<template>
  <div class="cover">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
/* ? The Cover - “Above the fold” introductory content */
.cover {
  display: flex;
  min-block-size: 100vh;
  inline-size: 100%;
  gap: var(--gap-region);
  padding: var(--inset, var(--inset-page));
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

.cover-nav {
  flex-direction: column;
}

.cover > .principle {
  margin-block: auto;
}

.cover.cover-s {
  min-block-size: 75vh;
}
</style>
;
