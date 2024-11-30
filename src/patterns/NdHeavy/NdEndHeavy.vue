<script setup lang="ts">
// Props definition
const props = defineProps<{
  mobile?: string; // Determines slot ordering based on mobile layout
  overrides?: string; // Additional CSS class overrides
  align?: string; // Vertical alignment
}>();

// Default props
withDefaults(props, {
  mobile: '',
  overrides: '',
  align: ''
});
</script>

<template>
  <!-- Conditional Layout Based on `mobile` Prop -->
  <div
    :class="[
      'region',
      'sidebar',
      'sidebar-split',
      'gap-m',
      overrides,
      mobile === 'start' ? '' : 'reverse',
      align ? `align-${align}` : ''
    ]"
  >
    <slot name="start" :class="mobile === 'start' ? 'fixed' : ''"></slot>
    <slot name="end" :class="mobile === 'start' ? '' : 'fixed'"></slot>
  </div>
</template>
