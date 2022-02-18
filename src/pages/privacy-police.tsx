import { Box, Container } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

import { Header, PrivacyPolicyText } from '@components'
import { CommonContainer } from '@layouts'

const PrivacyPolice = () => {
  const { t } = useTranslation()
  return (
    <>
      <Header
        title={t('privacy-policy.header.title')}
        subtitle={t('privacy-policy.header.subtitle')}
      />
      <CommonContainer>
        <PrivacyPolicyText />
      </CommonContainer>
    </>
  )
}

export default PrivacyPolice
