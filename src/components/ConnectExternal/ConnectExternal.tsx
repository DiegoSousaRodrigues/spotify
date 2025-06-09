import { IconWrapper, Wrapper } from './ConnectExternal.styles'
import { ConnectExternalProps } from './ConnectExternal.types'

export function ConnectExternal({ icon, name, onClick }: ConnectExternalProps) {
  return (
    <Wrapper type="button" onClick={onClick}>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      {name}
    </Wrapper>
  )
}
