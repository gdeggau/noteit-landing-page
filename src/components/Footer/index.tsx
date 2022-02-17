import { HStack, Link, Text, VStack } from '@chakra-ui/react'

import { routes } from '@constants'

export const Footer = () => {
  return (
    <VStack bgColor="gray.500" spacing={0}>
      <HStack
        width="100%"
        spacing={4}
        justify="center"
        pb={{
          base: 14,
        }}
        pt={{
          base: 5,
        }}
      >
        <Text textStyle="Other/Gamja">Draw</Text>
        <Text textStyle="Other/Gamja">Share</Text>
        <Text textStyle="Other/Gamja">Have fun</Text>
      </HStack>
      <HStack
        width="100%"
        borderTopLeftRadius="50px"
        spacing={8}
        justify="center"
        py={8}
        bgColor="white"
      >
        <Link href={routes.privacyPolicy.path} textStyle="Title/Semibold">
          Privacy Policy
        </Link>
        <Link href={routes.contactUs.path} textStyle="Title/Semibold">
          Contact Us
        </Link>
      </HStack>
    </VStack>
  )
}
