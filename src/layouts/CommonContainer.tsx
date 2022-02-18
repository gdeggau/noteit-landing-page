import { Box, BoxProps, Container } from '@chakra-ui/react'

export const CommonContainer = (props: BoxProps) => {
  return (
    <Container maxW="container.lg">
      <Box
        borderRadius="15px"
        bgColor="white"
        py={{ base: 4, lg: 9 }}
        px={{ base: 3, lg: 14 }}
        transform={{
          base: 'translateY(-1.5rem)',
          lg: 'translateY(-4rem)',
        }}
        {...props}
      >
        {props.children}
      </Box>
    </Container>
  )
}
