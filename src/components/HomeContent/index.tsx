import { Image, Stack, Text, VStack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

export const HomeContent = () => {
  const { t } = useTranslation()
  return (
    <Stack
      spacing={0}
      direction={{
        base: 'column',
        lg: 'row',
      }}
      px={{
        base: 2,
        sm: 10,
        lg: 16,
      }}
    >
      <Stack spacing={[4, 6]}>
        <Text
          textStyle="LargeTitle/Semibold"
          as="h1"
          color="primary"
          textAlign={{
            base: 'center',
            lg: 'start',
          }}
        >
          {t('home.content.title')}
        </Text>
        <VStack
          spacing={4}
          alignItems="flex-start"
          maxW={{
            base: '100&',
            xl: '90%',
          }}
        >
          <Text textStyle="Title/Regular">{t('home.content.paragraph.1')}</Text>
          <Text textStyle="Title/Regular">{t('home.content.paragraph.2')}</Text>
          <Text textStyle="Title/Regular">{t('home.content.paragraph.3')}</Text>
        </VStack>
      </Stack>
      <Image
        width="100%"
        maxW="500px"
        src="/Screenshots.png"
        alt={t('home.content.image.screenshots')}
        p={5}
        alignSelf="center"
      />
    </Stack>
  )
}
