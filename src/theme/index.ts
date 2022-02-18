import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        // background: '#E5E5E5',
      },
    },
  },

  colors: {
    primary: '#1AC6B1',
    secondary: '#1DE6D3',
    black: '#101212',
    white: '#ffffff',
    bg: '#FDFDFD',
    alert: '#E73333',
    success: '#41CC70',

    gray: {
      500: '#25292B',
      400: '#3E4648',
      300: '#606A6C',
      200: '#8E8E93',
      100: '#DEDEDE',
      50: '#F2F2F6',
    },

    green: {
      50: '#B1E2CB',
    },
  },

  fonts: {
    body: 'Poppins',
    heading: 'Poppins',
  },

  textStyles: {
    'LargeTitle/Regular': {
      fontSize: {
        base: '14px',
        md: '27px',
      },
      fontWeight: '400',
      // lineHeight: '100%',
    },
    'LargeTitle/Semibold': {
      'font-size': {
        base: '14px',
        md: '27px',
      },
      'font-weight': '600',
      // lineHeight: '100%',
    },
    'Title1/Regular': {
      fontSize: '21px',
      fontWeight: '400',
      // lineHeight: '31px',
    },
    'Title1/Semibold': {
      fontSize: '21px',
      fontWeight: '600',
      // lineHeight: '31px',
    },
    'Title/Regular': {
      fontSize: {
        base: '13px',
        md: '17px',
      },

      fontWeight: '400',
      // lineHeight: '25px',
    },
    'Title/Semibold': {
      fontSize: {
        base: '13px',
        md: '17px',
      },

      fontWeight: '600',
      // lineHeight: '25px',
    },
    'Other/Gamja': {
      'font-family': 'Gamja Flower',
      'font-size': {
        base: '24px',
        lg: '48px',
      },
      'font-weight': '400',
      color: 'green.50',
    },
  },
})

export default theme
