import { ComponentProps } from 'react'

import { Label, TextareaContainer, TextareaElement } from './styles'

interface TextareaProps extends ComponentProps<'textarea'> {
  label: string
}

export function Textarea({ label, name, ...props }: TextareaProps) {
  return (
    <TextareaContainer>
      <Label htmlFor={name}>{label}</Label>
      <TextareaElement name={name} {...props} />
    </TextareaContainer>
  )
}
