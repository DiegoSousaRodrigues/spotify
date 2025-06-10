import LoginScreen from '@/components/LoginScreen'
import { getSession } from '@/utils/session'
import { NextApiRequest, NextApiResponse } from 'next'

export default function Page() {
  return <LoginScreen />
}

export const getServerSideProps = async (context: { req: NextApiRequest; res: NextApiResponse }) => {
  const session = await getSession(context.req, context.res)
  console.log(session)
  return { props: {} }
}
