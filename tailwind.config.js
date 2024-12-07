/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-blue-100',
    'bg-green-100',
    'bg-red-100',
    'bg-indigo-100',
    'text-blue-600',
    'text-green-600',
    'text-red-600',
    'text-indigo-600',
    'dark:bg-blue-900/20',
    'dark:bg-green-900/20',
    'dark:bg-red-900/20',
    'dark:bg-indigo-900/20',
    'dark:text-blue-400',
    'dark:text-green-400',
    'dark:text-red-400',
    'dark:text-indigo-400',
  ],
};