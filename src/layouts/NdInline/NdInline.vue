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
  <div class="inline">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.inline {
  display: flex;
  flex-wrap: nowrap;
  gap: var(--gap, var(--space-s));
  justify-content: flex-start;
  align-items: center;
}

.inline-header {
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
  .inline-header {
    flex-direction: row;
    margin-inline-start: calc(var(--space-m) * -1);
  }
}

.inline-header > :first-child {
  margin-inline-end: var(--space-3xs);
}

.inline-start {
  align-items: flex-start;
}

.inline-end {
  align-items: flex-end;
}

.inline-center {
  align-items: center;
}

.inline-baseline {
  align-items: baseline;
}
</style>
