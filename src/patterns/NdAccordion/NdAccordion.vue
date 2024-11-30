<!-- The Accordion - details with optional header, overline, intro body -->
<script setup lang="ts">
import NdDetails from '../../components/NdDetails/NdDetails.vue';
import NdProse from '../../layouts/NdProse/NdProse.vue';

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
    <NdProse v-if="headline">
      <p v-if="overline" class="overline">{{ overline }}</p>
      <h2 class="region-headline">{{ headline }}</h2>
      <p v-if="body">{{ body }}</p>
    </NdProse>
    <div class="space-xl">
      <NdDetails v-for="(item, index) in items" :key="index" :headline="item.headline" :body="item.body" />
    </div>
  </div>
</template>
