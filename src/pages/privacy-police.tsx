import { useTranslation } from 'react-i18next'

import { Banner, PrivacyPolicyText } from '@components'
import { CommonContainer } from '@layouts'

const PrivacyPolice = () => {
  const { t } = useTranslation()
  return (
    <>
      <Banner
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
