import { login } from '@/services/login'
import method from '@/services/method'
import { saveSession } from '@/utils/session'
import { NextApiRequest, NextApiResponse } from 'next'

export default method({
  POST: async (req: NextApiRequest, res: NextApiResponse) => {
    const { clientId, clientSecret } = req.body
    const { data, status } = await login(clientId, clientSecret)

    if (status !== 200) {
      return res.status(status).json({ error: 'Login ou senha incorretos' })
    }

    try {
      await saveSession(data, req, res)
    } catch (error) {
      console.error('Erro ao salvar sessão:', error)
      return res.status(500).json({ error: 'Erro ao salvar sessão' })
    }

    return res.status(200).json({ message: 'Login realizado com sucesso' })
  },
})
