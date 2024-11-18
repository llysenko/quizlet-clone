import { nextui } from '@nextui-org/react';

import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        'heading-1': '2.75rem',
        'heading-2': '2rem',
        xxs: '0.625rem'
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
        'grey-5': '#939bb4',
        'blue-3': '#a8b1ff',
        'blue-4': '#98E3FF',
        pink: '#EEAAFF',
        orange: '#FFC38C',
        green: '#98F1D1',
        'green-1': '#3ccfcf',
        magenta: '#d908f8',
        'dark-grey': '#1a1d28',
        error: '#B00020',
        'grey-6': '#edefff'
      }
    }
  },
  plugins: [nextui()]
} satisfies Config;
