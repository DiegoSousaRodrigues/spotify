import { HomeScreen } from '@/components/HomeScreen/HomeScreen'

export default function Page() {
  return <HomeScreen />
}

export async function getServerSideProps() {
  return { props: {} }
}
