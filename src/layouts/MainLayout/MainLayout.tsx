import HeaderComponent from '@/components/Header'
import { Wrapper } from './MainLayout.styles'

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper>
      <HeaderComponent />
      {children}
    </Wrapper>
  )
}
