import { Box, Container, Flex, HStack, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import { Application3Icon } from '@components'
import { routes } from '@constants'

type NavItemProps = {
  label: string
  href: string
}

const NavItem = ({ href, label }: NavItemProps) => {
  const router = useRouter()
  const isCurrentRoute = href === router.pathname

  return (
    <VStack position="relative">
      <Link href={href} passHref>
        <a>
          <Text
            textStyle="Title/Semibold"
            _hover={{
              color: 'primary',
            }}
          >
            {label}
          </Text>
        </a>
      </Link>
      {isCurrentRoute && (
        <Box
          top={{
            base: 4,
            md: 5,
            lg: 7,
          }}
          position="absolute"
          bgColor="primary"
          width="50%"
          height="3px"
          borderRadius="1.5px"
        />
      )}
    </VStack>
  )
}

export const Header = () => {
  const { t } = useTranslation()
  return (
    <Flex bgColor="white">
      <Container
        maxW="container.xl"
        py={4}
        justifyContent={{
          base: 'center',
          md: 'space-between',
        }}
        display="flex"
      >
        <Link href={routes.home.path} passHref>
          <a>
            <Application3Icon
              boxSize={'50px'}
              display={{ base: 'none', md: 'flex' }}
            />
          </a>
        </Link>
        <HStack as="nav" spacing={10}>
          <NavItem href={routes.home.path} label={t('home.label')} />
          <NavItem
            href={routes.privacyPolicy.path}
            label={t('privacy-policy.label')}
          />
          <NavItem href={routes.contactUs.path} label={t('contact-us.label')} />
        </HStack>
      </Container>
    </Flex>
  )
}
