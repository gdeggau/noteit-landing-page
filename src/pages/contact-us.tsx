import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

import { SocialNetworks } from '@components'
import { DefaultPage } from '@layouts'

const ContactUs = () => {
  const { t } = useTranslation()
  return (
    <DefaultPage
      title={t('contact-us.header.title')}
      subtitle={t('contact-us.header.subtitle')}
      mainContent={
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
      }
    >
      <SocialNetworks direction="row" />
    </DefaultPage>
  )
}

export default ContactUs
