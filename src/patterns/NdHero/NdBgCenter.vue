<script setup lang="ts">
import { computed } from 'vue';

interface ImageProps {
  src: string;
}

interface ButtonProps {
  href: string;
  label: string;
  variant?: string;
}

// Props definition
const props = defineProps<{
  img: ImageProps; // Required image object with `src`
  overrides?: string; // Additional CSS class overrides
  badge?: string; // Badge text
  headline?: string; // Main headline text
  body?: string; // Body text
  btn?: ButtonProps; // Optional button props
}>();

// Computed properties for dynamic classes and inline styles
const classes = computed(() => ({
  cover: true,
  [props.overrides || '']: !!props.overrides // Dynamically add overrides class if provided
}));

const style = computed(() => ({
  '--img': `url('/img/${props.img.src}-400w.jpeg')` // Dynamic background image
}));
</script>

<template>
  <div class="bg-img theme-primary" :style="style">
    <div :class="['cover', ...Object.keys(classes)]">
      <div class="principle inset region prose stack align-center text-center gap-xs">
        <!-- Badge -->
        <a v-if="badge" href="/" class="badge badge-primary">{{ badge }}</a>

        <!-- Headline -->
        <h1>{{ headline }}</h1>

        <!-- Body -->
        <p>{{ body }}</p>

        <!-- Button -->
        <a v-if="btn" :href="btn.href" :class="['btn', btn.variant || '']">
          {{ btn.label }}
        </a>
      </div>
    </div>
  </div>
</template>
