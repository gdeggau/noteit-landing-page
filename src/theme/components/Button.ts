import { ComponentStyleConfig } from '@chakra-ui/react'
import { darken } from '@chakra-ui/theme-tools'

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: 'lg',
    fontWeight: '400',
  },
  variants: {
    default: {
      height: '2.75rem',
      apply: 'textStyles.Title/Regular',
      bg: 'primary',
      color: 'white',
      _hover: {
        bg: darken('primary', 4),
        _disabled: {
          bg: 'primary',
        },
      },
    },
  },
  defaultProps: {
    variant: 'default',
  },
}
