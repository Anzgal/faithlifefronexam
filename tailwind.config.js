module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      width: {
        'smCard': '320px',
        'mdCard': '328px',
        'lgCard': '368px',
      },
      gap: {
        'customGap': '16px',
      }
    },
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '759px',
      // => @media (min-width: 960px) { ... }

      'lg': '1140px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
}
