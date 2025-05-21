import LoginScreen from "@/components/LoginScreen"

export default function Page() {
  return <LoginScreen />
}

export async function getServerSideProps() {
  return { props: {} }
}
