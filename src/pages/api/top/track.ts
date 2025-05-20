import { GetTopTracks } from '@/services/track'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const token = ''

      const data = await GetTopTracks(token)

      if (data?.status !== 200) {
        console.error('Error fetching top tracks:')
      }
      return res.status(200).json(data?.data)
    } catch (err) {
      return res.status(500).json({ error: err })
    }
  }
}
