import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    assetsDir: '',
    rollupOptions: {
      output: {
        assetFileNames: assetInfo => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'theme.css'; // Ensure CSS file has a consistent name
          }
          return '[name].[ext]'; // Default for other assets
        }
      }
    }
  }
});
