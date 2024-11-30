<!-- The Accordion - details with optional header, overline, intro body -->
<script setup lang="ts">
import { computed } from 'vue';

interface AccordionItem {
  headline?: string;
  body?: string;
}

// Props definition
const props = defineProps<{
  overrides?: string; // Additional CSS class overrides
  headline?: string; // The headline for the accordion region
  overline?: string; // Overline text displayed above the headline
  items?: AccordionItem[]; // Array of accordion items
}>();

const classes = computed(() => ({
  region: true,
  [props.overrides || '']: !!props.overrides // Dynamically add overrides class if provided
}));
</script>

<template>
  <div :class="classes">
    <!-- Headline Section -->
    <section v-if="headline" class="prose">
      <p v-if="overline" class="overline">{{ overline }}</p>
      <h2 class="region-headline">{{ headline }}</h2>
    </section>

    <!-- Slot Content -->
    <div class="space-xl">
      <slot />
    </div>
  </div>
</template>
