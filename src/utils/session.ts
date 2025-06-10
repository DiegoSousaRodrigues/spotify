import { getIronSession } from 'iron-session'
import { NextApiRequest, NextApiResponse } from 'next'

export type TokenResponse = {
  access_token: string
  token_type: string
  expires_in: number
}

const sessionOptions = {
  password: process.env.SESSION_SECRET_KEY!,
  cookieName: 'spotify-session',
  cookieOptions: {
    httpOnly: true,
    secure: true,
    maxAge: 3600,
  },
}

export async function getSession(req: NextApiRequest, res: NextApiResponse) {
  const session = await getIronSession<TokenResponse>(req, res, sessionOptions)
  return session || {}
}

export async function saveSession(data: TokenResponse, req: NextApiRequest, res: NextApiResponse) {
  try {
    const session = await getSession(req, res)

    session.access_token = data.access_token
    session.token_type = data.token_type
    session.expires_in = data.expires_in

    console.log('Saving session:', session)

    await session.save()
  } catch (error) {
    throw error
  }
}
