import { ComponentProps } from 'react'

import { InputContainer, InputElement, Label } from './styles'

interface InputProps extends ComponentProps<'input'> {
  label: string
}

export function Input({ label, name, ...props }: InputProps) {
  return (
    <InputContainer>
      <Label htmlFor={name}>{label}</Label>
      <InputElement name={name} {...props} />
    </InputContainer>
  )
}
