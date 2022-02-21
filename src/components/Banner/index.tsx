import { Text, VStack } from '@chakra-ui/react'

type BannerProps = {
  title: string
  subtitle: string
}

export const Banner = ({ title, subtitle }: BannerProps) => {
  return (
    <VStack
      bgColor="primary"
      spacing={{ base: 1, lg: 2 }}
      pt={{ base: 6, lg: 8 }}
      pb={{ base: 10, lg: 24 }}
      // bgImage="url(/DrawSmall.png), url(/DrawSmall.png)"
      // bgRepeat="repeat-x, repeat-x"
      // bgPosition="-150px, -270px"
    >
      <Text textStyle="LargeTitle/Semibold" color="white">
        {title}
      </Text>
      <Text textStyle="Title1/Regular" color="white">
        {subtitle}
      </Text>
    </VStack>
  )
}
