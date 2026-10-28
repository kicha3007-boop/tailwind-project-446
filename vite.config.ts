import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Относительные пути: страница открывается из подкаталога GitHub Pages
  base: './',
  plugins: [tailwindcss()],
  build: {
    // Картинки и шрифты остаются отдельными файлами, а не data:-строками в CSS
    assetsInlineLimit: 0,
  },
  server: {
    port: 5173,
  },
  // Раздача собранного: проверка Хекслета ходит на http://localhost:8080
  preview: {
    host: '0.0.0.0',
    port: 8080,
    strictPort: true,
  },
});
