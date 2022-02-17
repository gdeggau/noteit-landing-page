import {
  Box,
  Container,
  HStack,
  Image,
  Link,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'

import { Footer, Logo1Icon } from '@components'
import { store } from '@constants'

const Home = () => {
  return (
    <>
      <Container>
        <Stack spacing={16}>
          <Box bg="primary" borderRadius="2xl" py={5} px={9}>
            <HStack position="relative">
              <VStack spacing={7} align="flex-start">
                <Logo1Icon width={76} height={'28px'} />
                <VStack align="flex-start" spacing={0}>
                  <Text textStyle="LargeTitle/Semibold" color="white">
                    Share notes
                  </Text>
                  <Text textStyle="LargeTitle/Semibold" color="white">
                    Share memories
                  </Text>
                </VStack>
                <HStack spacing={2}>
                  <Link href={store.appStore} isExternal>
                    <Image src="/AppStore.png" alt="App Store" width={12} />
                  </Link>
                  <Link href={store.googlePlay} isExternal>
                    <Image src="/GooglePlay.png" alt="Google Play" width={14} />
                  </Link>
                </HStack>
              </VStack>
              <Image
                src="/iPhones.png"
                alt="IPhone running Noteit"
                position="absolute"
                right={-5}
                top={-3}
                width="176px"
              />
            </HStack>
          </Box>
          <Stack>
            <Stack spacing={4}>
              <Text
                textStyle="LargeTitle/Semibold"
                color="primary"
                textAlign="center"
                px={20}
              >
                Draw and write loving, cute and fun notes
              </Text>
              <Text textStyle="Title/Regular">
                With more than one million downloads, Noteit is a new kind of
                relationship goals between partners and friends. This is because
                it allows the simultaneous and synchronous exchange of notes.
                Once installed, you immediately connect with your partner or
                friend through a code and that&apos;s it!
              </Text>
              <Text textStyle="Title/Regular">
                You can also pin a widget to your home screen and see the note
                whenever you unlock your device.
              </Text>
              <Text textStyle="Title/Regular">
                Enjoy! Express yourself using Noteit.
              </Text>
            </Stack>
            <Image src="/Screenshots.png" alt="Screenshots from Noteit" />
          </Stack>
        </Stack>
      </Container>
      <Footer />
    </>
  )
}

export default Home
