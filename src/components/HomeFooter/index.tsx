import { HStack, IconProps, Link, Text, VStack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

import { PencilIcon, PencilScribbleIcon } from '@components'
import { routes } from '@constants'

const Pencil = (props: IconProps) => {
  return (
    <PencilIcon
      display={{
        base: 'none',
        md: 'flex',
      }}
      width={{
        base: '100px',
        lg: '200px',
      }}
      {...props}
    />
  )
}
const PencilScribble = (props: IconProps) => {
  return (
    <PencilScribbleIcon
      display={{
        base: 'none',
        md: 'flex',
        lg: 'none',
        xl: 'flex',
      }}
      width={{
        base: '100px',
        lg: '180px',
      }}
      {...props}
    />
  )
}

export const HomeFooter = () => {
  const { t } = useTranslation()

  return (
    <VStack bgColor="gray.500" spacing={0}>
      <HStack
        justify="space-between"
        width="100%"
        align="center"
        pb={{
          base: 14,
          lg: 36,
        }}
        pt={{
          base: 5,
          lg: 8,
        }}
      >
        <HStack>
          <Pencil />
          <PencilScribble />
        </HStack>
        <HStack
          spacing={{
            base: 4,
            lg: 12,
          }}
          justify="center"
        >
          <Text textStyle="Other/Gamja">{t('home.footer.top.draw')}</Text>
          <Text textStyle="Other/Gamja">{t('home.footer.top.share')}</Text>
          <Text textStyle="Other/Gamja">{t('home.footer.top.have-fun')}</Text>
        </HStack>
        <HStack>
          <PencilScribble transform={'scaleX(-1)'} />
          <Pencil transform={'rotate(180deg)'} />
        </HStack>
      </HStack>
      <HStack
        width="100%"
        borderTopLeftRadius="50px"
        spacing={8}
        justify="center"
        py={{
          base: 8,
          lg: 12,
        }}
        bgColor="white"
      >
        <Link href={routes.privacyPolicy.path} textStyle="Title/Semibold">
          {t('home.footer.bottom.privacy-policy')}
        </Link>
        <Link href={routes.contactUs.path} textStyle="Title/Semibold">
          {t('home.footer.bottom.contact-us')}
        </Link>
      </HStack>
    </VStack>
  )
}
