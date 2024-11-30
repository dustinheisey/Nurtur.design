<!-- The Cluster - Inline container that can wrap -->
<script setup lang="ts">
import { computed } from 'vue';
import type { Align, Justify, Gap, Inset, Space } from '../layout-types.ts';

type Role = 'group';

const props = defineProps<{
  variant?: 'inline' | 'inline-header';
  align?: Align;
  justify?: Justify;
  gap?: Gap;
  inset?: Inset;
  space?: Space;
  role?: Role;
  region?: boolean;
}>();

const classes = computed(() => ({
  cluster: true,
  [`cluster-${props.variant}`]: props.variant,
  '.region': props.region,
  [`${props.align}`]: props.align,
  [`${props.justify}`]: props.justify,
  [`${props.gap}`]: props.gap,
  [`${props.inset}`]: props.inset,
  [`${props.space}`]: props.space
}));
</script>

<template>
  <div :class="classes" :role="role || 'group'">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.cluster {
  gap: var(--space-s);
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
}

.cluster-inline {
  display: flex;
  flex-wrap: nowrap;
  gap: var(--gap, var(--space-s));
  justify-content: flex-start;
  align-items: center;
}

.cluster-inline-header {
  display: flex;
  flex-flow: column nowrap;
  gap: var(--space-2xs);
  align-items: flex-start;
  margin-block-start: var(--space-2xl);

  & > a {
    order: 1;
  }

  & > :is(h1, h2, h3, h4) {
    order: 2;
  }
}

@media (--tablet-portrait-up) {
  .cluster-inline-header {
    flex-direction: row;
    margin-inline-start: calc(var(--space-m) * -1);
  }
}

.cluster-inline-header > :first-child {
  margin-inline-end: var(--space-3xs);
}
</style>
