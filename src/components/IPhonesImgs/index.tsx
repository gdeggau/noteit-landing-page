import { Box, BoxProps, HStack, Image } from '@chakra-ui/react'

export const IPhoneImgs = ({ ...props }: BoxProps) => {
  return (
    <Box position="relative" {...props}>
      <Image
        src="/IPhone1.png"
        // width={width}
        alt="Drawing in Noteit"
        position="absolute"
        // zIndex={1}
        right={1}
      />
      <Image
        src="/IPhone2.png"
        // width={width}
        alt="Last sent and received in Noteit"
        position="absolute"
      />
    </Box>
  )
}
