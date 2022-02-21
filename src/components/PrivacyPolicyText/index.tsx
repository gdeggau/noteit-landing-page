import {
  Heading,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

export const PrivacyPolicyText = () => {
  const { t } = useTranslation()
  return (
    <VStack textStyle="Title/Regular" align="flex-start" height="100%">
      <Text>{t('privacy-policy.terms.line.1')}</Text>
      <Text>{t('privacy-policy.terms.line.2')}</Text>
      <Text textStyle="Title1/Semibold">
        {t('privacy-policy.terms.line.3')}
      </Text>
      <Text textStyle="Title/Semibold">{t('privacy-policy.terms.line.4')}</Text>
      <Text>{t('privacy-policy.terms.line.5')}</Text>
      <Text textStyle="Title/Semibold">{t('privacy-policy.terms.line.6')}</Text>
      <Text textStyle="Title/Semibold">{t('privacy-policy.terms.line.7')}</Text>
      <UnorderedList pl={8}>
        <ListItem>
          <Text>{t('privacy-policy.terms.line.8')}</Text>
        </ListItem>
        <ListItem>
          <Text>{t('privacy-policy.terms.line.9')}</Text>
        </ListItem>
        <ListItem>
          <Text>{t('privacy-policy.terms.line.10')}</Text>
        </ListItem>
        <ListItem>
          <Text>{t('privacy-policy.terms.line.11')}</Text>
        </ListItem>
        <ListItem>
          <Text>{t('privacy-policy.terms.line.12')}</Text>
        </ListItem>
        <ListItem>
          <Text>{t('privacy-policy.terms.line.13')}</Text>
        </ListItem>
        <ListItem>
          <Text>{t('privacy-policy.terms.line.14')}</Text>
        </ListItem>
        <ListItem>
          <Text>{t('privacy-policy.terms.line.15')}</Text>
        </ListItem>
        <ListItem>
          <Text>{t('privacy-policy.terms.line.16')}</Text>
        </ListItem>
        <ListItem>
          <Text>{t('privacy-policy.terms.line.17')}</Text>
        </ListItem>
        <ListItem>
          <Text>{t('privacy-policy.terms.line.18')}</Text>
        </ListItem>
      </UnorderedList>
      <Text textStyle="Title1/Semibold">
        {t('privacy-policy.terms.line.19')}
      </Text>
      <Text textStyle="Title/Semibold">
        {t('privacy-policy.terms.line.20')}
      </Text>
      <Text>{t('privacy-policy.terms.line.21')}</Text>
      <Text>{t('privacy-policy.terms.line.22')}</Text>
      <Text>{t('privacy-policy.terms.line.23')}</Text>
    </VStack>
  )
}
