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
