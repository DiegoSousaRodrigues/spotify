import LoginScreen from '@/components/LoginScreen'
import { PageProps } from '@/types/page'
import { TokenResponse } from '@/utils/session'
import { withLogin } from '@/utils/withLogin'

export default function Page({ isLoggedIn }: PageProps) {
  if (isLoggedIn) {
    //TODO redirect to home page
  }
  return <LoginScreen />
}

export const getServerSideProps = withLogin(async (session: TokenResponse) => {
  return { props: { session } }
})
