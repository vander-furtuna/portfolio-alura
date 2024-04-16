import { ComponentProps } from 'react'

import { ButtonContainer } from './styles'

export type ButtonVariants = 'outlined' | 'filled'

interface ButtonProps extends ComponentProps<'button'> {
  variant: ButtonVariants
}

export function Button({
  variant = 'filled',
  children,
  ...props
}: ButtonProps) {
  return (
    <ButtonContainer variant={variant} {...props}>
      {children}
    </ButtonContainer>
  )
}
