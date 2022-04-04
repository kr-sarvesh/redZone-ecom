module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#efaabd',

          secondary: '#f77471',

          accent: '#99bf31',

          neutral: '#27303A',

          white: '#f8fafc',

          'base-100': '#E6DDEE',

          info: '#99C2EB',

          success: '#4ADE88',

          warning: '#966D0D',

          error: '#E12D30',
        },
      },
    ],
  },
};
