import {
  Box,
  BoxProps,
  HStack,
  IconProps,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react'
import Link from 'next/link'
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

const TopFooter = () => {
  const { t } = useTranslation()
  return (
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
  )
}

const LogoContainer = (props: BoxProps) => {
  const { t } = useTranslation()
  return (
    <Box
      bgColor="white"
      borderRadius="50px"
      boxSize={{
        base: '40px',
        lg: '82px',
      }}
      {...props}
    >
      <Image src="Application3.png" alt={t('common.logo')} />
    </Box>
  )
}

const BottomFooter = () => {
  const { t } = useTranslation()
  return (
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
      position="relative"
    >
      <LogoContainer
        position="absolute"
        transform={{
          base: 'translateY(-100%)',
          lg: 'translateY(-80%)',
        }}
      />
      <Link href={routes.privacyPolicy.path} passHref>
        <a>
          <Text textStyle="Title/Semibold">
            {t('home.footer.bottom.privacy-policy')}
          </Text>
        </a>
      </Link>
      <Link href={routes.contactUs.path} passHref>
        <a>
          <Text textStyle="Title/Semibold">
            {t('home.footer.bottom.contact-us')}
          </Text>
        </a>
      </Link>
    </HStack>
  )
}

export const HomeFooter = () => {
  return (
    <VStack bgColor="gray.500" spacing={0}>
      <TopFooter />
      <BottomFooter />
    </VStack>
  )
}
