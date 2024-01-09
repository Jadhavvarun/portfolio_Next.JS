/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'neon': '#04D9FF',
        'white-1': '#EDF2F4',
        'blue-1': '#8D99AE',
        'blue-2': '#2B2D42',
        'blue-3': '#4C5075',
        'light-blue': '#CCE6F4'
      }
    },
  },
  plugins: [],
}
