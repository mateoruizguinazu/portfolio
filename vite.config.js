import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contact: resolve(__dirname, 'contact.html'),
        projectLoyalty: resolve(__dirname, 'project-loyalty.html'),
        projectTemplate: resolve(__dirname, 'project-template.html'),
        projectCustomization: resolve(__dirname, 'project-customization.html')
      },
    },
  },
});