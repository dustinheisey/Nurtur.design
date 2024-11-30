<!-- The Justify - Justify children -->
<script setup lang="ts">
import { computed } from 'vue';
import type { Align, Justify, Gap, Inset, Space } from '../layout-types.ts';

type Role = 'group';

const props = defineProps<{
  align?: Align;
  justify?: Justify;
  intrinsic?: boolean;
  gap?: Gap;
  inset?: Inset;
  space?: Space;
  role?: Role;
  region?: boolean;
}>();

const classes = computed(() => ({
  [`justify-${props.justify}`]: props.justify,
  '.region': props.region,
  [`justify-${props.justify}-intrinsic`]: props.intrinsic,
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
.justify-start {
  box-sizing: content-box;
  margin-inline-end: auto;
}

.justify-center {
  box-sizing: content-box;
  margin: auto;
}

.justify-end {
  box-sizing: content-box;
  margin-inline-start: auto;
  inline-size: fit-content;
}

.justify-start-intrinsic {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
}

.justify-center-intrinsic {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.justify-end-intrinsic {
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
}
</style>
