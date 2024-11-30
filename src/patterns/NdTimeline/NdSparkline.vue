<script setup lang="ts">
const props = defineProps<{
  overrides?: string;
  headline?: string;
  overline?: string;
  body?: string;
  variant?: string;
  items?: any[];
}>();

withDefaults(props, {
  overrides: '',
  variant: '',
  items: []
});

const sparklineClass = computed(() => {
  switch (props.variant) {
    case 'inline':
      return 'sparkline-inline';
    case 'inline-staggered':
      return 'sparkline-inline-staggered';
    case 'block-staggered':
      return 'sparkline-block-staggered';
    default:
      return '';
  }
});
</script>

<template>
  <div :class="['region', 'stack', overrides]">
    <section v-if="headline" class="prose center text-center">
      <p v-if="overline" class="overline">{{ overline }}</p>
      <h2 class="region-headline">{{ headline }}</h2>
      <p v-if="body">{{ body }}</p>
    </section>

    <div :class="['sparkline', sparklineClass]">
      <div class="line" aria-hidden="true"></div>
      <slot name="item"></slot>
    </div>
  </div>
</template>
