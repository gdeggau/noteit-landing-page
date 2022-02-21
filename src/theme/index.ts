import { extendTheme } from '@chakra-ui/react'

import { Button, Input, Textarea } from './components'

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        background: 'gray.50',
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

  components: {
    Input,
    Textarea,
    Button,
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
      lineHeight: 'normal',
    },
    'LargeTitle/Semibold': {
      fontSize: {
        base: '14px',
        md: '27px',
      },
      fontWeight: '600',
      lineHeight: 'normal',
    },
    'Title1/Regular': {
      fontSize: '21px',
      fontWeight: '400',
      lineHeight: 'normal',
    },
    'Title1/Semibold': {
      fontSize: '21px',
      fontWeight: '600',
      lineHeight: 'normal',
    },
    'Title/Regular': {
      fontSize: {
        base: '13px',
        md: '17px',
      },
      fontWeight: '400',
      lineHeight: 'normal',
    },
    'Title/Semibold': {
      fontSize: {
        base: '13px',
        md: '17px',
      },
      fontWeight: '600',
      lineHeight: 'normal',
    },
    'Body/Regular': {
      fontSize: {
        base: '15px',
      },
      fontWeight: '400',
      lineHeight: 'normal',
    },
    'Other/Gamja': {
      'font-family': 'Gamja Flower',
      fontSize: {
        base: '24px',
        lg: '48px',
      },
      fontWeight: '400',
      color: 'green.50',
      lineHeight: 'normal',
    },
  },
})

export default theme
