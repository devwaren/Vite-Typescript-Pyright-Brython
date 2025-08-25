import { defineConfig } from 'vite'
import tailwind from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
    plugins: [tailwind()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },

    },
    // Add ignore .pyi files
    optimizeDeps: {
        exclude: ['src/*.pyi', "src/*.py"]
    }

})
