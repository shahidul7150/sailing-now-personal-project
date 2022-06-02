module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        sailor: {
          primary: '#0C6B7F',

          secondary: '#FADD75',

          accent: '#37CDBE',

          neutral: '#0C6B7F',

          'base-100': '#F7F7F7',

          info: '#FFFFFF',

          success: '#36D399',

          warning: '#FBBD23',

          error: '#F87272',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
