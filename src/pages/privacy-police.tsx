import { useTranslation } from 'react-i18next'

import { PrivacyPolicyText } from '@components'
import { DefaultPage } from '@layouts'

const PrivacyPolice = () => {
  const { t } = useTranslation()
  return (
    <DefaultPage
      title={t('privacy-policy.header.title')}
      subtitle={t('privacy-policy.header.subtitle')}
      mainContent={<PrivacyPolicyText />}
    />
  )
}

export default PrivacyPolice
