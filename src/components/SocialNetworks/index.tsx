import { cloneElement } from 'react'

import { Link, Stack, StackProps } from '@chakra-ui/react'

import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  TwitterIcon,
} from '@components'
import { socialNetwork } from '@constants'

interface SocialNetworkIconProps {
  href: string
  icon: React.ReactElement
}

const SocialNetwork = ({ icon, href }: SocialNetworkIconProps) => (
  <Link href={href}>
    {cloneElement(icon, {
      boxSize: {
        base: 6,
        md: 10,
        lg: 12,
      },
    })}
  </Link>
)

export const SocialNetworks = (props: StackProps) => {
  return (
    <Stack
      spacing={{
        base: 2,
        lg: 5,
      }}
      {...props}
    >
      <SocialNetwork href={socialNetwork.tiktok} icon={<TikTokIcon />} />
      <SocialNetwork href={socialNetwork.twitter} icon={<TwitterIcon />} />
      <SocialNetwork href={socialNetwork.instagram} icon={<InstagramIcon />} />
      <SocialNetwork href={socialNetwork.facebook} icon={<FacebookIcon />} />
    </Stack>
  )
}
