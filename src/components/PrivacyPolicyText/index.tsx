import {
  ListItem as ChakraListItem,
  Heading,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

const List: React.FC = ({ children }) => (
  <UnorderedList pl={8}>{children}</UnorderedList>
)

const ListItem: React.FC = ({ children }) => (
  <ChakraListItem>
    <Text>{children}</Text>
  </ChakraListItem>
)

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
      <List>
        <ListItem>{t('privacy-policy.terms.line.8')}</ListItem>
        <ListItem>{t('privacy-policy.terms.line.9')}</ListItem>
        <ListItem>{t('privacy-policy.terms.line.10')}</ListItem>
        <ListItem>{t('privacy-policy.terms.line.11')}</ListItem>
        <ListItem>{t('privacy-policy.terms.line.12')}</ListItem>
        <ListItem>{t('privacy-policy.terms.line.13')}</ListItem>
        <ListItem>{t('privacy-policy.terms.line.14')}</ListItem>
        <ListItem>{t('privacy-policy.terms.line.15')}</ListItem>
        <ListItem>{t('privacy-policy.terms.line.16')}</ListItem>
        <ListItem>{t('privacy-policy.terms.line.17')}</ListItem>
        <ListItem>{t('privacy-policy.terms.line.18')}</ListItem>
      </List>
      <Text textStyle="Title1/Semibold">
        {t('privacy-policy.terms.line.19')}
      </Text>
      <Text textStyle="Title/Semibold">
        {t('privacy-policy.terms.line.20')}
      </Text>
      <Text textStyle="Title/Semibold">
        {t('privacy-policy.terms.line.21')}
      </Text>
      <Text>{t('privacy-policy.terms.line.22')}</Text>
      <List>
        <ListItem>{t('privacy-policy.terms.line.23')}</ListItem>
        <ListItem>{t('privacy-policy.terms.line.24')}</ListItem>
      </List>
      <Text textStyle="Title/Semibold">
        {t('privacy-policy.terms.line.24')}
      </Text>
      <Text>{t('privacy-policy.terms.line.25')}</Text>
      <Text>{t('privacy-policy.terms.line.26')}</Text>
      <Text>{t('privacy-policy.terms.line.27')}</Text>
      <Text>{t('privacy-policy.terms.line.28')}</Text>
      <Text textStyle="Title/Semibold">
        {t('privacy-policy.terms.line.29')}
      </Text>
      <Text>{t('privacy-policy.terms.line.30')}</Text>
      <List>
        <ListItem>{t('privacy-policy.terms.line.31')}</ListItem>
        <ListItem>{t('privacy-policy.terms.line.32')}</ListItem>
        <ListItem>{t('privacy-policy.terms.line.33')}</ListItem>
        <ListItem>{t('privacy-policy.terms.line.34')}</ListItem>
        <ListItem>{t('privacy-policy.terms.line.35')}</ListItem>
        <ListItem>{t('privacy-policy.terms.line.36')}</ListItem>
        <ListItem>{t('privacy-policy.terms.line.37')}</ListItem>
        <ListItem>{t('privacy-policy.terms.line.38')}</ListItem>
      </List>
      <Text>{t('privacy-policy.terms.line.39')}</Text>
      <List>
        <ListItem>{t('privacy-policy.terms.line.40')}</ListItem>
        <ListItem>{t('privacy-policy.terms.line.41')}</ListItem>
        <ListItem>{t('privacy-policy.terms.line.42')}</ListItem>
        <ListItem>{t('privacy-policy.terms.line.43')}</ListItem>
        <ListItem>{t('privacy-policy.terms.line.44')}</ListItem>
        <ListItem>{t('privacy-policy.terms.line.45')}</ListItem>
      </List>
      <Text textStyle="Title/Semibold">
        {t('privacy-policy.terms.line.46')}
      </Text>
      <Text>{t('privacy-policy.terms.line.47')}</Text>
      <Text>{t('privacy-policy.terms.line.48')}</Text>
      <Text textStyle="Title/Semibold">
        {t('privacy-policy.terms.line.49')}
      </Text>
      <Text>{t('privacy-policy.terms.line.50')}</Text>
      <Text>{t('privacy-policy.terms.line.51')}</Text>
      <Text>{t('privacy-policy.terms.line.52')}</Text>
      <Text textStyle="Title/Semibold">
        {t('privacy-policy.terms.line.53')}
      </Text>
      <Text textStyle="Title/Semibold">
        {t('privacy-policy.terms.line.54')}
      </Text>
      <Text>{t('privacy-policy.terms.line.55')}</Text>
      <Text textStyle="Title/Semibold">
        {t('privacy-policy.terms.line.56')}
      </Text>
      <Text>{t('privacy-policy.terms.line.57')}</Text>
      <Text textStyle="Title/Semibold">
        {t('privacy-policy.terms.line.58')}
      </Text>
      <Text>{t('privacy-policy.terms.line.59')}</Text>
      <List>
        <ListItem>{t('privacy-policy.terms.line.60')}</ListItem>
        <ListItem>{t('privacy-policy.terms.line.61')}</ListItem>
        <ListItem>{t('privacy-policy.terms.line.62')}</ListItem>
        <ListItem>{t('privacy-policy.terms.line.63')}</ListItem>
        <ListItem>{t('privacy-policy.terms.line.64')}</ListItem>
      </List>
      <Text textStyle="Title/Semibold">
        {t('privacy-policy.terms.line.65')}
      </Text>
      <Text>{t('privacy-policy.terms.line.66')}</Text>
      <Text textStyle="Title1/Semibold">
        {t('privacy-policy.terms.line.67')}
      </Text>
      <Text>{t('privacy-policy.terms.line.68')}</Text>
      <Text>{t('privacy-policy.terms.line.69')}</Text>
      <Text textStyle="Title1/Semibold">
        {t('privacy-policy.terms.line.70')}
      </Text>
      <Text>{t('privacy-policy.terms.line.71')}</Text>
      <Text>{t('privacy-policy.terms.line.72')}</Text>
      <Text textStyle="Title1/Semibold">
        {t('privacy-policy.terms.line.73')}
      </Text>
      <Text>{t('privacy-policy.terms.line.74')}</Text>
      <Text>{t('privacy-policy.terms.line.75')}</Text>
      <Text>{t('privacy-policy.terms.line.76')}</Text>
      <Text textStyle="Title1/Semibold">
        {t('privacy-policy.terms.line.77')}
      </Text>
      <Text>{t('privacy-policy.terms.line.78')}</Text>
      <Text>{t('privacy-policy.terms.line.79')}</Text>
    </VStack>
  )
}
