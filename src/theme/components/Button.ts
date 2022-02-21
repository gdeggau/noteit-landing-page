import { lighten } from '@chakra-ui/theme-tools'

export const Button = {
  baseStyle: {
    borderRadius: 'lg',
    bg: 'primary',
    color: 'white',
    _hover: {
      bg: lighten('primary', 4),
    },
  },
  defaultProps: {
    variant: null,
    textStyle: 'Title/Regular',
  },
}
