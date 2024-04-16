import { ComponentProps } from 'react'

import { TitleElement } from './styles'

interface TitleProps extends ComponentProps<'h2'> {
  // Defina suas props aqui
}

export function Title({ children, ...props }: TitleProps) {
  return <TitleElement {...props}>{children}</TitleElement>
}
