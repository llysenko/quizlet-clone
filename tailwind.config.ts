import type { Config } from 'tailwindcss';
import { rgb } from 'polished';

export default {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontSize: {
        'heading-1': '2.75rem',
        'heading-2': '2rem'
      },
      colors: {
        blue: '#4255ff',
        'blue-2': '#423ed8',
        white: '#ffffff',
        yellow: '#ffcd1f',
        'yellow-light': '#ffdc62',
        'dark-blue': '#14125c',
        'text-color-h': '#282e3e',
        'text-color-p': '#474349',
        'nav-items': '#2e3856',
        grey: '#f6f7fb',
        'blue-light': '#dbdfff',
        'gray-600': '#586380',
        'grey-2': '#d9dde8',
        'grey-3': '#edeff4',
        'grey-4': '#F6F7FB',
        'blue-3': '#a8b1ff',
        'blue-4': '#98E3FF',
        pink: '#EEAAFF',
        orange: '#FFC38C',
        green: '#98F1D1'
      }
    }
  },
  plugins: []
} satisfies Config;
