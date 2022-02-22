import { api } from '@constants'

const baseUrl = api.baseUrl

type SendEmailResponse = {
  success: boolean
}

type SendEmailParams = {
  sentByEmail: string
  userName: string
  message: string
}

export const sendEmail = async (params: SendEmailParams) => {
  const response = await fetch(`${baseUrl}/sendEmail`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  })
  return (await response.json()) as SendEmailResponse
}
