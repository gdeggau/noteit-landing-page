import { Box, Container, Stack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

import {
  HomeBanner,
  HomeContent,
  HomeFooter,
  SEO,
  SocialNetworks,
} from '@components'

const Home = () => {
  const { t } = useTranslation()
  return (
    <>
      <SEO title={t('home.seo.title')} shouldExcludeTitleSuffix />
      <Box bgGradient="linear(180deg, white 0%, gray.50 100%)">
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
      </Box>
      <HomeFooter />
    </>
  )
}

export default Home
