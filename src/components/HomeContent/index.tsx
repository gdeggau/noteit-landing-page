import { Image, Stack, Text, VStack } from '@chakra-ui/react'

export const HomeContent = () => {
  return (
    <Stack
      direction={{
        base: 'column',
        lg: 'row',
      }}
      spacing={{
        base: 5,
      }}
      px={{
        base: 2,
        sm: 10,
        lg: 20,
      }}
    >
      <Stack spacing={[4, 6]}>
        <Text
          textStyle="LargeTitle/Semibold"
          color="primary"
          textAlign={{
            base: 'center',
            lg: 'start',
          }}
        >
          Draw and write loving, cute and fun notes
        </Text>
        <VStack
          spacing={4}
          alignItems="flex-start"
          maxW={{
            base: '100&',
            lg: '90%',
          }}
        >
          <Text textStyle="Title/Regular">
            With more than one million downloads, Noteit is a new kind of
            relationship goals between partners and friends. This is because it
            allows the simultaneous and synchronous exchange of notes. Once
            installed, you immediately connect with your partner or friend
            through a code and that&apos;s it!
          </Text>
          <Text textStyle="Title/Regular">
            You can also pin a widget to your home screen and see the note
            whenever you unlock your device.
          </Text>
          <Text textStyle="Title/Regular">
            Enjoy! Express yourself using Noteit.
          </Text>
        </VStack>
      </Stack>
      <Image src="/Screenshots.png" alt="Screenshots from Noteit" p={5} />
    </Stack>
  )
}
