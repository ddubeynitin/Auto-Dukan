import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import defaultTheme from 'tailwindcss/defaultTheme'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        // Add your custom font family here
        // The name on the left (e.g., 'roboto') becomes the utility class (font-roboto)
        roboto: ['"Roboto"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [react(), tailwindcss()],
})
