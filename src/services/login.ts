import { spotify } from '@/utils/api'
import { TokenResponse } from '@/utils/session'

export async function login(clientId: string, clientSecret: string) {
  return await spotify.post<TokenResponse>('api/token', {
    grant_type: 'client_credentials',
    client_id: clientId,
    client_secret: clientSecret,
  })
}
