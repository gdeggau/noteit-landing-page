import { Flex, FlexProps } from '@chakra-ui/react'

export const AppWrapper = (props: FlexProps) => {
  return (
    <Flex
      flexDirection="column"
      overflow="hidden"
      height="100vh"
      width="100vw"
      {...props}
    />
  )
}
