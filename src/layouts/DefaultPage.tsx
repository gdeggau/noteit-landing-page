import { Flex } from '@chakra-ui/react'

import { Banner, Header } from '@components'

import { CommonContainer } from './CommonContainer'

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
      <Header />
      <Banner title={title} subtitle={subtitle} />
      <Flex direction="column" align="center">
        <CommonContainer>{mainContent}</CommonContainer>
        {children}
      </Flex>
    </>
  )
}
