import { InputComponent, Label, Title } from './Input.styles'
import { InputProps } from './Input.types'

export function Input({ label, ...props }: InputProps) {
  return (
    <div>
      <Label>
        <Title>{label}</Title>
        <InputComponent {...props} />
      </Label>
    </div>
  )
}
