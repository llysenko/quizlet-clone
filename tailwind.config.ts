import type { Config } from 'tailwindcss';
// import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ['hurme_no2-webfont, -apple-system, BlinkMacSystemFont', ...defaultTheme.fontFamily.sans]
      // },
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
        'grey-3': '#edeff4'
      }
    }
  },
  plugins: []
} satisfies Config;
