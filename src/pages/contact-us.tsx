import React, { useState } from 'react'

import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea,
  UseToastOptions,
  useToast,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

import { SocialNetworks } from '@components'
import { DefaultPage } from '@layouts'
import { sendEmail } from '@services'

const INITIAL_FORM_DATA = {
  email: '',
  name: '',
  message: '',
}

const ContactUs = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA)
  const [isLoading, setIsLoading] = useState(false)

  const toast = useToast()
  const { t } = useTranslation()

  const emailSuccessSent: UseToastOptions = {
    status: 'success',
    title: t('contact-us.form.success.title'),
    description: t('contact-us.form.success.description'),
  }

  const failedToSendEmail: UseToastOptions = {
    status: 'error',
    title: t('contact-us.form.error.title'),
    description: t('contact-us.form.error.description'),
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLDivElement>) => {
    try {
      setIsLoading(true)
      e.preventDefault()
      await sendEmail({
        userName: formData.name,
        message: formData.message,
        sentByEmail: formData.email,
      })
      toast(emailSuccessSent)
      setFormData({ ...INITIAL_FORM_DATA })
    } catch (error) {
      toast(failedToSendEmail)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <DefaultPage
        title={t('contact-us.header.title')}
        subtitle={t('contact-us.header.subtitle')}
        mainContent={
          <Stack
            as="form"
            spacing={{ base: 5, lg: 7 }}
            align="center"
            textStyle="Body/Regular"
            onSubmit={handleSubmit}
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
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  isRequired
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="email">
                  {t('contact-us.form.label.email')}
                </FormLabel>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  isRequired
                />
              </FormControl>
            </Stack>
            <FormControl>
              <FormLabel htmlFor="message">
                {t('contact-us.form.label.message')}
              </FormLabel>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                isRequired
              />
            </FormControl>
            <Button
              maxW={80}
              isFullWidth
              type="submit"
              isLoading={isLoading}
              loadingText={t('contact-us.form.button.sending')}
            >
              {t('contact-us.form.button.send')}
            </Button>
          </Stack>
        }
      >
        <SocialNetworks direction="row" />
      </DefaultPage>
    </>
  )
}

export default ContactUs
