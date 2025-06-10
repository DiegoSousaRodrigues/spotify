import { NextApiRequest, NextApiResponse } from 'next'
import { getSession, TokenResponse } from './session'

export function withLogin(cb: (_session: TokenResponse) => Promise<unknown>) {
  return async ({ req, res }: { req: NextApiRequest; res: NextApiResponse }) => {
    const session = await getSession(req, res)
    return cb(session)
  }
}
