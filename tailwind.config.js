module.exports = {
  darkMode: 'class',
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    container: {
      center: true, 
      padding: {
        DEFAULT: '12px',
        md: '36px',
      }
    },
    fontSize: {
      'sm': '14px',
      'base': '16px',
      'lg': '18px',
      'xl': '20px',
      '2xl': '24px',
      '3xl': '30px',
      '4xl': '36px',
      '5xl': '48px',
      '6xl': '64px',
      '32': '32px',
      '42': '42px',
      '48': '48px'
    },
    extend: {
      colors: {
        'claret': {
          light: '#FBF2F2',
          DEFAULT: '#AA0601',
          dark: '#650300'
        },
        'gray': {
          light: '#DEE2E6',
          DEFAULT: '#00000029',
          dark: '#707070',
          page: '#555555',
          shallow: '#F2F2F2',
          area: '#CED4DA',
          blog: '#0A0A0A'
        },
        'match': {
          light: '#B75929',
          DEFAULT: '#5F3E2D'
        },
        'area': {
          light: '#00000020',
          DEFAULT: '#CED4DA',
          dark: '#495057',
        }
      },
      spacing: {
        '1.25': '5px',
        '15': '60px',
        '31': '124px'
      },
      boxShadow: {
        'card': '0px 2px 6px #00000029',
        'card-lg': '4px 10px 20px #00000029'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}