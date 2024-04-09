import type { Config } from 'tailwindcss';

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        blue: '#4255ff',
        white: '#ffffff',
        yellow: '#ffcd1f',
        'dark-blue': '#14125c',
        'text-color-h': '#282e3e',
        'text-color-p': '#474349',
        'nav-items': '#2e3856',
        grey: '#f6f7fb',
        'blue-2': '#dbdfff'
      }
    },
  },
  plugins: [],
} satisfies Config;

