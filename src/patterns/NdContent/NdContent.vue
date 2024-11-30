<script setup lang="ts">
import { computed } from 'vue';

// Props definition
const props = defineProps<{
  theme?: string; // Theme class suffix
  text?: string; // Text alignment
  align?: string; // Vertical alignment
  overrides?: string; // Additional CSS class overrides
}>();

// Default props
withDefaults(props, {
  theme: 'background',
  text: '',
  align: '',
  overrides: ''
});

// Computed classes for the region container
const regionClasses = computed(() => [
  'region',
  'stack',
  props.text ? `text-${props.text}` : 'text-center',
  props.align ? `align-${props.align}` : 'align-center',
  'gap-m',
  props.overrides || ''
]);
</script>

<template>
  <div :class="`theme-${theme}`">
    <div :class="regionClasses">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
// Props definition
const props = defineProps<{
  overrides?: string; // Additional CSS class overrides
}>();

// Default props
withDefaults(props, {
  overrides: ''
});
</script>

<template>
  <div :class="['region', 'gap-m', 'stack', 'align-end', 'text-end', overrides]">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  overrides?: string;
}>();

withDefaults(props, {
  overrides: ''
});
</script>

<template>
  <div :class="['region', 'align-start', 'stack', 'text-start', overrides]">
    <slot></slot>
  </div>
</template>
