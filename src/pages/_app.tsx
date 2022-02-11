import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import { AppWrapper } from '@layouts'
import theme from '@theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </ChakraProvider>
  )
}

export default MyApp
