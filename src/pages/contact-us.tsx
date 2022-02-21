import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea,
  VStack,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

import { Header, SocialNetworks } from '@components'
import { CommonContainer } from '@layouts'

const ContactUs = () => {
  const { t } = useTranslation()
  return (
    <>
      <Header
        title={t('contact-us.header.title')}
        subtitle={t('contact-us.header.subtitle')}
      />
      <VStack>
        <CommonContainer>
          <Stack
            as="form"
            spacing={{ base: 5, lg: 7 }}
            align="center"
            textStyle="Body/Regular"
          >
            <Stack
              direction={{
                base: 'column',
                md: 'row',
              }}
              spacing={{
                base: 5,
              }}
              width="100%"
            >
              <FormControl>
                <FormLabel htmlFor="name">
                  {t('contact-us.form.label.name')}
                </FormLabel>
                <Input id="name" />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="email">
                  {t('contact-us.form.label.email')}
                </FormLabel>
                <Input id="email" type="email" />
              </FormControl>
            </Stack>
            <FormControl>
              <FormLabel htmlFor="message">
                {t('contact-us.form.label.message')}
              </FormLabel>
              <Textarea id="message" />
            </FormControl>
            <Button maxW={80} isFullWidth type="submit">
              {t('contact-us.form.button.send')}
            </Button>
          </Stack>
        </CommonContainer>
        <SocialNetworks direction="row" />
      </VStack>
    </>
  )
}

export default ContactUs
