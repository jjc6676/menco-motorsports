/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0a0a0a',
          dark: '#111111',
          red: '#cc0000',
          redHot: '#e31212',
          gray: '#999999',
          light: '#f5f5f5',
        },
      },
      fontFamily: {
        heading: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'red-glow': '0 0 12px 2px rgba(204, 0, 0, 0.4)',
        'red-glow-sm': '0 0 6px 1px rgba(204, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
};
