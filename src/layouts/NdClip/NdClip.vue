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
  <div class="clip">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.clip {
  clip-path: polygon(0 0, 100% 0, 100% 96%, 0 100%);
}

.clip-top-left {
  clip-path: polygon(20% 0, 100% 0%, 100% 100%, 0% 100%);
}

.clip-top-right {
  clip-path: polygon(0 0, 80% 0, 100% 100%, 0% 100%);
}

.clip-bottom-left {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 20% 100%);
}

.clip-bottom-right {
  clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%);
}
</style>
;
