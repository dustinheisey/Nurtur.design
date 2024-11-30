<script setup lang="ts">
import { computed } from 'vue';

interface Category {
  data: {
    label: string;
    theme: string;
  };
}

interface Post {
  url: string;
  date: string;
  data: {
    title: string;
    description: string;
    tags: string[];
  };
}

// Props definition
const props = defineProps<{
  variant?: string; // Determines layout type
  overrides?: string; // Additional CSS class overrides
  theme?: string; // Theme class suffix
  headline?: string; // Main headline
  body?: string; // Body text
  back?: boolean; // Show "All Posts" link
  categories?: Category[]; // List of categories
  posts?: Post[]; // List of posts
}>();

// Default props
const defaultCategories: Category[] = [];
const defaultPosts: Post[] = [];

withDefaults(props, {
  theme: 'background',
  categories: defaultCategories,
  posts: defaultPosts
});

// Utility functions
function slugify(text: string): string {
  return text.toLowerCase().replace(/\s+/g, '-');
}

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString();
}

function formatTags(tags: string[]): string {
  return tags.join(', ');
}

const getPostCategory = (post: Post): string => {
  const category = props.categories?.find(cat => post.data.tags.includes(cat.data.label));
  return category?.data.theme || 'default';
};

// Computed classes
const regionClasses = computed(() => ['region', 'stack', 'gap-l', props.overrides || '', `theme-${props.theme}`]);
</script>

<template>
  <!-- Masonry Layout -->
  <div v-if="variant === 'masonry'" :class="regionClasses">
    <h2 class="region-headline text-center center-intrinsic">{{ headline }}</h2>
    <p v-if="body">{{ body }}</p>

    <!-- Reel of Categories -->
    <div class="reel justify-center no-bar">
      <a v-if="back" href="/blog" class="badge badge-l badge-primary">All Posts</a>
      <a
        v-for="category in categories"
        :key="category.data.label"
        :href="`/categories/${slugify(category.data.label)}/`"
        :class="`badge badge-l badge-${category.data.theme}`"
      >
        {{ category.data.label }}
      </a>
    </div>

    <!-- Masonry Layout for Posts -->
    <div class="masonry col-3 gap-m">
      <article
        v-for="post in posts"
        :key="post.url"
        :class="`prose card card-link theme-${getPostCategory(post)}-container`"
      >
        <a :href="post.url">
          <div class="cluster align-center gap-2xs">
            <time :datetime="post.date">{{ formatDate(post.date) }}</time>
            <div class="badge badge-primary">{{ formatTags(post.data.tags) }}</div>
          </div>
          <h2 class="section-headline">{{ post.data.title }}</h2>
          <p>{{ post.data.description }}</p>
        </a>
      </article>
    </div>
  </div>
</template>
