import { defineConfig } from 'vite'
import { resolve } from 'path'

module.exports = defineConfig(({ command }) => ({
  base: command === "serve" ? "/" : "./",
  root: '.',
  publicDir: 'public',
  build: {
    outDir: '../public',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // Additional JS entry points
        'main-js': resolve(__dirname, 'src/js/main.js'),
        'main-css': resolve(__dirname, 'src/css/main.css'),
      },
      output: {
        // HTML files go to root of public folder
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const extType = info[info.length - 1]
          
          // CSS files
          if (/css/i.test(extType)) {
            return `css/[name].[ext]`
          }
          
          // Image files
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            return `images/[name].[ext]`
          }
          
          // Font files
          if (/woff2?|eot|ttf|otf/i.test(extType)) {
            return `fonts/[name].[ext]`
          }
          
          // Default for other assets
          return `assets/[name].[ext]`
        },
        // JS files
        entryFileNames: `js/[name].js`,
        // Chunks (if any)
        chunkFileNames: `js/[name].js`,
      }
    }
  },
  css: {
    postcss: './postcss.config.js'
  },
  server: {
    open: true,
    port: 3000
  }
}));
