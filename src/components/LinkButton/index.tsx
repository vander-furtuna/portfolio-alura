import { ComponentProps } from 'react'

import { LinkButtonContainer } from './styles'

export type LinkButtonVariants = 'outlined' | 'filled'

interface LinkButtonProps extends ComponentProps<'a'> {
  variant: LinkButtonVariants
}

export function LinkButton({
  variant = 'filled',
  children,
  ...props
}: LinkButtonProps) {
  return (
    <LinkButtonContainer variant={variant} target="_blank" {...props}>
      {children}
    </LinkButtonContainer>
  )
}
