import { Container, Image, Stack, Text, VStack } from '@chakra-ui/react'

import { Footer, HomeBanner, HomeContent } from '@components'

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
        <Stack spacing={[16, 24, 32, 52]}>
          <HomeBanner />
          <HomeContent />
        </Stack>
      </Container>
      <Footer />
    </>
  )
}

export default Home
