/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0099FF',
          dark: '#0077CC',
          light: '#33ADFF'
        },
        background: {
          DEFAULT: '#041C2C',
          light: '#0A2A3C',
          lighter: '#0F3349',
          gradient: {
            from: '#041C2C',
            to: '#0A2A3C'
          }
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#94A3B8',
          tertiary: '#64748B'
        }
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(180deg, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%)',
      },
    },
  },
  plugins: [],
};