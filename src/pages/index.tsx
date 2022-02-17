import { Container, Stack } from '@chakra-ui/react'

import {
  HomeBanner,
  HomeContent,
  HomeFooter,
  SocialNetworks,
} from '@components'

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
          <Stack position="relative" spacing={0}>
            <HomeBanner />
            <SocialNetworks
              position="absolute"
              direction={{
                base: 'row',
                xl: 'column',
              }}
              right={{
                xl: 0,
              }}
              bottom={{
                base: 0,
                xl: 'inherit',
              }}
              transform={{
                base: 'translateY(130%)',
                xl: 'translateX(130%)',
              }}
            />
          </Stack>
          <HomeContent />
        </Stack>
      </Container>
      <HomeFooter />
    </>
  )
}

export default Home
