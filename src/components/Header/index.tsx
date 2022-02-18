import { Text, VStack } from '@chakra-ui/react'

type HeaderProps = {
  title: string
  subtitle: string
}

export const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <VStack
      bgColor="primary"
      spacing={{ base: 1, lg: 2 }}
      pt={{ base: 6, lg: 8 }}
      pb={{ base: 10, lg: 24 }}
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
