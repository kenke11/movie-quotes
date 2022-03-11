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
      },
    },
  },
  plugins: [],
};
