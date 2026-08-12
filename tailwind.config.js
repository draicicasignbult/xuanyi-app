/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rice: {
          50:  '#FEF9F0',
          100: '#F5F0E8',
          200: '#EBE3D5',
          300: '#D5CCB8',
        },
        palace: {
          DEFAULT: '#C41E2B',
          dark:    '#8B1A2B',
          light:   '#F5E6E8',
        },
        ink: {
          DEFAULT: '#6B6B6B',
          dark:    '#4A4A4A',
          light:   '#9B9B9B',
        },
        gold: {
          light: '#C9A96E',
          DEFAULT: '#B8963E',
          dark:   '#8B6914',
          glow:  '#E8D5A3',
        },
        indigo: {
          DEFAULT: '#1B2A4A',
          light:   '#2C3E6B',
          dark:    '#0F1A2E',
        },
        jade: {
          DEFAULT: '#5B8C5A',
          light:   '#7CB77C',
          dark:    '#3D6B3C',
        },
      },
      fontFamily: {
        serif: ['"Noto Serif SC"', '"Source Han Serif SC"', 'STSong', 'SimSun', 'serif'],
        sans:  ['"Noto Sans SC"', '"Source Han Sans SC"', '"PingFang SC"', '"Microsoft YaHei"', 'sans-serif'],
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.25rem',
      },
    },
  },
  plugins: [],
}
