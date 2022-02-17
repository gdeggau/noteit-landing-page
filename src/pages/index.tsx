import { Container, Stack } from '@chakra-ui/react'

import { HomeBanner, HomeContent, HomeFooter } from '@components'

const Home = () => {
  return (
    <>
      <Container
        maxW="container.xl"
        py={{
          base: 5,
          md: 20,
        }}
      >
        <Stack
          spacing={{
            base: 16,
            sm: 20,
            md: 24,
            lg: 28,
          }}
        >
          <HomeBanner />
          <HomeContent />
        </Stack>
      </Container>
      <HomeFooter />
    </>
  )
}

export default Home
