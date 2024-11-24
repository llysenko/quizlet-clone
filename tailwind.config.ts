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
        'alabama-crimson': '#B00020',
        'alice-blue': '#edefff',
        'bright-gray': '#edeff4',
        'cadet-grey': '#939bb4',
        'dark-electric-blue': '#586380',
        'dark-jungle-green': '#1a1d28',
        'ghost-white': '#f6f7fb',
        'macaroni-and-cheese': '#FFC38C',
        'magic-mint': '#98F1D1',
        'maximum-blue-purple': '#a8b1ff',
        'medium-turquoise': '#3ccfcf',
        'naples-ripe-mango': '#ffdc62',
        'palatinate-blue': '#423ed8',
        'rich-brilliant-lavender': '#EEAAFF',
        'ripe-mango': '#ffcd1f',
        'ultramarine-blue': '#4255ff',
        'winter-wizard': '#98E3FF',
        charcoal: '#2e3856',
        gainsboro: '#d9dde8',
        gunmetal: '#282e3e',
        lavender: '#dbdfff',
        phlox: '#d908f8',
        white: '#ffffff'
      }
    }
  },
  plugins: [nextui()]
} satisfies Config;
