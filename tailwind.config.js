module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#1F2937',
        'secondary': '#4B5563',
        'accent': '#0EA5E9',
      },
      textColor: {
        'primary': '#1F2937',
        'secondary': '#4B5563',
        'accent': '#0EA5E9',
        'purplemove': '#10316b',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
