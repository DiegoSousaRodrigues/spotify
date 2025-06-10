import { AxiosError } from 'axios'
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'

type MethodFunc = (req: NextApiRequest, res: NextApiResponse) => Promise<void>

type MethodProps = {
  GET?: MethodFunc | NextApiHandler
  POST?: MethodFunc | NextApiHandler
  PUT?: MethodFunc | NextApiHandler
  DELETE?: MethodFunc | NextApiHandler
}

export default function method(props: MethodProps) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
    } catch (e) {
      const error = e as AxiosError
      res
        .status(error.response?.status || 500)
        .json(error.response?.data || 'Internal Server Error')
      return
    }
    const cb = props[req.method as keyof MethodProps]
    if (cb) {
      await cb(req, res)
    } else {
      res.status(405).json(`Method ${req.method} Not Allowed`)
    }
  }
}
