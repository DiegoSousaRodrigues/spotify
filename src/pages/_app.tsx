import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import '../styles/globals.css'
import MainLayout from '@/layouts/MainLayout'

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </QueryClientProvider>
  )
}
