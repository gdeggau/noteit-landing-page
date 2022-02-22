import { Flex } from '@chakra-ui/react'
import { Text, VStack } from '@chakra-ui/react'
import styled from '@emotion/styled'

import { Header, SEO } from '@components'

import { CommonContainer } from './CommonContainer'

const BannerContainer = styled(VStack)`
  /* background-image: url(/DrawSmall.png);
  background-size: 30px 30px;
  background-size: 50vmin 50vmin;
  background-position: 0 0, 15% 5%, 22% 45%, 45% 56%, 60% 60%, 75% 3%, 87% 88%,
    91% 3%;
  background-repeat: no-repeat no-repeat; */
  /* background-repeat: space; */
  /* background-position: left center;
  background-repeat: repeat-x; */
  /* background-repeat: repeat-x, repeat-x;
  background-position-y: -60px, 400px;
  background-position-x: -150px, -270px; */
  /* background-position: top left, center center;
  background-repeat: repeat, no-repeat;
  background-size: auto, cover; */
`

type BannerProps = {
  title: string
  subtitle: string
}

const Banner = ({ title, subtitle }: BannerProps) => {
  return (
    <BannerContainer
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
    </BannerContainer>
  )
}

type DefaultPageProps = {
  title: string
  subtitle: string
  mainContent: React.ReactNode
  children?: React.ReactNode
}

export const DefaultPage = ({
  title,
  subtitle,
  mainContent,
  children,
}: DefaultPageProps) => {
  return (
    <>
      <SEO title={title} />
      <Header />
      <Banner title={title} subtitle={subtitle} />
      <Flex direction="column" align="center">
        <CommonContainer>{mainContent}</CommonContainer>
        {children}
      </Flex>
    </>
  )
}
