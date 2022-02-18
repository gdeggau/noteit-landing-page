import {
  Box,
  HStack,
  Heading,
  Image,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

import { DrawLogoIcon, Logo1Icon } from '@components'
import { store } from '@constants'

export const HomeBanner = () => {
  const { t } = useTranslation()

  return (
    <Box
      bg="primary"
      borderRadius="32px"
      py={{
        base: 5,
        md: 20,
      }}
      px={{
        base: 9,
        md: 20,
      }}
    >
      <HStack position="relative" justify="space-between">
        <VStack spacing={7} align="flex-start">
          <Logo1Icon
            width={{
              base: '76px',
              md: '191px',
            }}
            height={{
              base: '28px',
              md: '70px',
            }}
          />
          <VStack align="flex-start" spacing={0}>
            <Heading textStyle="LargeTitle/Semibold" as="h1" color="white">
              {t('home.banner.share-notes')}
            </Heading>
            <Heading textStyle="LargeTitle/Semibold" as="h1" color="white">
              {t('home.banner.share-memories')}
            </Heading>
          </VStack>
          <HStack spacing={2}>
            <Link href={store.appStore} isExternal>
              <Image
                src="/AppStore.png"
                alt="App Store"
                width={{
                  base: 12,
                  md: 24,
                }}
              />
            </Link>
            <Link href={store.googlePlay} isExternal>
              <Image
                src="/GooglePlay.png"
                alt="Google Play"
                width={{
                  base: 14,
                  md: 28,
                }}
              />
            </Link>
          </HStack>
        </VStack>
        <Image
          src="/iPhones.png"
          alt={t('home.banner.image.iphone')}
          position="absolute"
          zIndex={1}
          left={{
            base: '45%',
            md: '30%',
            lg: '',
          }}
          width={{
            base: '176px',
            md: '362px',
          }}
        />
        <DrawLogoIcon
          position="absolute"
          right={0}
          display={{
            base: 'none',
            lg: 'flex',
          }}
        />
      </HStack>
    </Box>
  )
}
