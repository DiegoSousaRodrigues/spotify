import { HomeScreen } from '@/components/HomeScreen/HomeScreen'
import { TokenResponse } from '@/utils/session'
import { withLogin } from '@/utils/withLogin'

export default function Page() {
  return <HomeScreen />
}

export const getServerSideProps = withLogin(async (session: TokenResponse) => {
  return { props: { session } }
})
