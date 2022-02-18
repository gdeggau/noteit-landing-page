import { Heading, Text, VStack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

export const PrivacyPolicyText = () => {
  const { t } = useTranslation()
  return (
    <VStack align="flex-start" height="100%">
      <Text>{t('privacy-policy.terms.line.1')}</Text>
      <Text>{t('privacy-policy.terms.line.2')}</Text>
      <Heading>{t('privacy-policy.terms.line.3')}</Heading>
      <Heading>{t('privacy-policy.terms.line.4')}</Heading>
      <Text>{t('privacy-policy.terms.line.5')}</Text>
      <Heading>{t('privacy-policy.terms.line.6')}</Heading>
      <Heading>{t('privacy-policy.terms.line.7')}</Heading>
      <Text>{t('privacy-policy.terms.line.8')}</Text>
      <Text>{t('privacy-policy.terms.line.9')}</Text>
      <Text>{t('privacy-policy.terms.line.10')}</Text>
      <Text>{t('privacy-policy.terms.line.11')}</Text>
      <Text>{t('privacy-policy.terms.line.12')}</Text>
      <Text>{t('privacy-policy.terms.line.13')}</Text>
      <Text>{t('privacy-policy.terms.line.14')}</Text>
      <Text>{t('privacy-policy.terms.line.15')}</Text>
      <Text>{t('privacy-policy.terms.line.16')}</Text>
      <Text>{t('privacy-policy.terms.line.17')}</Text>
      <Text>{t('privacy-policy.terms.line.18')}</Text>
      <Text>{t('privacy-policy.terms.line.19')}</Text>
      <Text>{t('privacy-policy.terms.line.20')}</Text>
      <Text>{t('privacy-policy.terms.line.21')}</Text>
      <Text>{t('privacy-policy.terms.line.22')}</Text>
      <Text>{t('privacy-policy.terms.line.23')}</Text>
    </VStack>
  )
}
