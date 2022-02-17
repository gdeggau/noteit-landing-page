import { ChakraProvider, ScaleFade } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { I18nextProvider } from 'react-i18next'

import { AppWrapper } from '@layouts'
import theme from '@theme'

import i18n from '../locales/i18n'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <I18nextProvider i18n={i18n}>
      <ChakraProvider theme={theme}>
        <AppWrapper>
          <ScaleFade key={router.route} initialScale={0.9} in={true}>
            <Component {...pageProps} />
          </ScaleFade>
        </AppWrapper>
      </ChakraProvider>
    </I18nextProvider>
  )
}

export default MyApp
