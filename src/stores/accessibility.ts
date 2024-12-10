import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useThemeStore = defineStore(
  'theme',
  () => {
    const theme = ref('light');
    const themeFormatted = computed(() => {
      return theme.value.charAt(0).toUpperCase() + theme.value.slice(1);
    });
    function switchTheme() {
      theme.value = theme.value === 'dark' ? 'light' : 'dark';
    }

    return { theme, themeFormatted, switchTheme };
  },
  {
    persist: {
      storage: localStorage
    }
  }
);

export const useFontSizeStore = defineStore(
  'font-size',
  () => {
    const fontSize = ref(16);
    const fontSizeFormatted = computed(() => fontSize.value + 'px');
    function setFontSize(size: number) {
      fontSize.value = size;
    }

    return { fontSize, fontSizeFormatted, setFontSize };
  },
  {
    persist: {
      storage: localStorage
    }
  }
);

export const useZoomStore = defineStore(
  'zoom',
  () => {
    const zoom = ref(100);
    const zoomFormatted = computed(() => zoom.value + '%');
    function setZoom(size: number) {
      zoom.value = size;
    }

    return { zoom, zoomFormatted, setZoom };
  },
  {
    persist: {
      storage: localStorage
    }
  }
);
