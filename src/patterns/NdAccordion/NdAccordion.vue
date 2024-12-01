<!-- The Accordion - details with optional header, overline, intro body -->
<script setup lang="ts">
interface Details {
  headline: string;
  body: string;
}

defineProps<{
  headline?: string; // The headline for the accordion region
  overline?: string; // Overline text displayed above the headline
  body?: string;
  items?: Details[]; // Array of accordion items
}>();
</script>

<template>
  <div class="region">
    <section v-if="headline" class="prose">
      <p v-if="overline" class="overline">{{ overline }}</p>
      <h2 class="region-headline">{{ headline }}</h2>
      <p v-if="body">{{ body }}</p>
    </section>
    <div class="space-xl"></div>
  </div>
</template>
