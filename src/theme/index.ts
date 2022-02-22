import { extendTheme } from '@chakra-ui/react'

import { Button, Input, Textarea } from './components'
import { colors, space, textStyles } from './foundations'
import { fonts } from './typography'

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        background: 'gray.50',
      },
    },
  },
  colors,
  space,
  components: {
    Input,
    Textarea,
    Button,
  },
  fonts,
  textStyles,
})

export default theme
