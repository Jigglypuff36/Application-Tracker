module.exports = {
  content: ['./client/**/*.{ts,tsx}', './dist/index.html'],
  theme: {
      extend: {
          colors: {
              primary: '#1B73E8',
          },
      },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: ['night', 'retro', 'cyberpunk'],
  },
};