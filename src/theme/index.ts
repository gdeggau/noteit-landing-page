import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
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
    body: 'Poppins, sans-serif',
    // heading: 'Poppins, sans-serif',
  },

  textStyles: {
    'LargeTitle/Regular': {
      fontSize: ['14px', '27px'],
      fontWeight: '400',
      // lineHeight: '100%',
    },
    'LargeTitle/Semibold': {
      fontSize: ['14px', '27px'],
      fontWeight: '600',
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
      fontSize: ['13px', '17px'],
      fontWeight: '400',
      // lineHeight: '25px',
    },
    'Title/Semibold': {
      fontSize: ['13px', '17px'],
      fontWeight: '600',
      // lineHeight: '25px',
    },
    'Other/Gamja': {
      fontFamily: 'Gamja Flower, cursive',
      fontSize: '24px',
      fontWeight: '400',
      color: 'green.50',
    },
  },
})

export default theme
