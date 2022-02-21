import Head from 'next/head'

type SEOProps = {
  title: string
  shouldExcludeTitleSuffix?: boolean
}

export const SEO = ({ title, shouldExcludeTitleSuffix }: SEOProps) => {
  const pageTitle = `${title} ${!shouldExcludeTitleSuffix ? '| Note!t' : ''}`
  return (
    <Head>
      <title>{pageTitle}</title>
    </Head>
  )
}
