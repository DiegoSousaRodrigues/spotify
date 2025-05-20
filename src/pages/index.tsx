export default function Page() {
  return (
    <div>
      <h1 className="">Hello, world!</h1>
      <p>This is a simple Next.js page.</p>
    </div>
  )
}

export async function getServerSideProps() {
  return { props: {} }
}
