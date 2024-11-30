<script setup lang="ts">
import { computed } from 'vue';

// Interface for Button props
interface ButtonProps {
  url: string;
  label: string;
  variant?: string;
}

// Props definition
const props = defineProps<{
  pattern?: string; // Background pattern class suffix
  overrides?: string; // Additional CSS class overrides
  theme?: string; // Theme class suffix
  align?: string; // Alignment class suffix
  overline?: string; // Overline text
  headline?: string; // Headline text
  lead?: string; // Lead text
  center?: boolean; // Center-align the lead
  body?: string; // Body text
  btn?: ButtonProps; // Optional button properties
  input?: boolean; // Show an input form
}>();

// Computed classes for the main container
const regionClasses = computed(() => [
  'region',
  `bg-pattern`,
  props.pattern ? `pattern-${props.pattern}` : '',
  props.overrides || '',
  props.theme ? `theme-${props.theme}` : '',
  'inset-xl'
]);

// Computed classes for the section
const proseClasses = computed(() => ['prose', props.align ? `stack align-${props.align}` : '']);
</script>

<template>
  <div :class="regionClasses">
    <section :class="proseClasses">
      <!-- Overline -->
      <p v-if="overline" class="overline">{{ overline }}</p>

      <!-- Headline -->
      <h2 v-if="headline" class="region-headline">{{ headline }}</h2>

      <!-- Lead -->
      <p v-if="lead" :class="['lead', { auto: center }]">{{ lead }}</p>

      <!-- Body -->
      <p v-if="body">{{ body }}</p>

      <!-- Button -->
      <a v-if="btn" :href="btn.url" :class="['btn', btn.variant ? `btn-${btn.variant}` : '']">
        {{ btn.label }}
      </a>

      <!-- Input Form -->
      <form v-if="input" class="sidebar gap-0 input-group" method="POST" name="newsletter">
        <input type="hidden" name="form-name" value="newsletter" />
        <label class="sr-only required" for="newsletter-email">Email Address</label>
        <input
          class="input"
          id="newsletter-email"
          name="newsletter-email"
          required
          type="email"
          placeholder="Email Address"
        />
        <button class="btn btn-primary fixed" type="submit">Subscribe</button>
      </form>
    </section>
  </div>
</template>
