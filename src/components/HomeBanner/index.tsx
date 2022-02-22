import { Box, HStack, Image, Link, Text, VStack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

import { Logo1Icon } from '@components'
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
            <Text textStyle="LargeTitle/Semibold" as="h1" color="white">
              {t('home.banner.share-notes')}
            </Text>
            <Text textStyle="LargeTitle/Semibold" as="h1" color="white">
              {t('home.banner.share-memories')}
            </Text>
          </VStack>
          <HStack spacing={{ base: 1, sm: 2 }}>
            <Link href={store.appStore} isExternal>
              <Image
                src="/AppStore.png"
                alt="App Store"
                height={{
                  base: '17.04px',
                  md: '32.04px',
                  lg: 'max-content',
                }}
              />
            </Link>
            <Link href={store.googlePlay} isExternal>
              <Image
                src="/GooglePlay.png"
                alt="Google Play"
                height={{
                  base: '17.82px',
                  md: '32.82px',
                  lg: 'max-content',
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
        <Image
          src="/Draw.png"
          alt={t('home.banner.image.draw')}
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
