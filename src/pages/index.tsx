import {
  Box,
  Container,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react'

import { IPhoneImgs, Logo1Icon } from '@components'
import { store } from '@constants'

const Home = () => {
  return (
    <>
      <Container>
        {/* <Box bg="primary" borderRadius="2xl" py={5} px={9} maxHeight={[44]}> */}
        <Box bg="primary" borderRadius="2xl" py={5} px={9}>
          <HStack position="relative">
            <VStack spacing={7} align="flex-start">
              <Logo1Icon width={76} height={'28px'} />
              <VStack align="flex-start">
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
              right={-9}
            />
          </HStack>
        </Box>
      </Container>
    </>
  )
}

export default Home
