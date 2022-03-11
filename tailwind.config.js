module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        astronaut: {
          '0%': { left: '-100px' },
          '25%': { transform: 'rotate(20deg)', top: '40%' },
          '50%': { transform: 'rotate(70deg)', top: '55%' },
          '75%': { transform: 'rotate(30deg)', top: '70%' },
          '100%': { transform: 'rotate(45deg)', left: '100%' },
        },
        navOpen: {
          '0%': { opacity: '1', left: '-100%' },
          '100%': { opacity: '1', left: '0' },
        },
        navClose: {
          '0%': { opacity: '1', left: '0' },
          '100%': { opacity: '0', left: '-100%' },
        },
      },
      colors: {
        'dark-blue': '#1a191f',
        'light-orange': 'rgb(249, 115, 22)',
      },
    },
  },
  plugins: [],
};
