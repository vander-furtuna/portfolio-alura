import { ComponentProps } from 'react'
import { IconType } from 'react-icons'
import { FaQuestionCircle } from 'react-icons/fa'

import { CardContainer } from './styles'

interface CardProps extends ComponentProps<'div'> {
  Icon: IconType
  label: string
}

export function Card({
  Icon = FaQuestionCircle,
  label = 'Card',
  ...props
}: CardProps) {
  return (
    <CardContainer {...props}>
      <Icon size={32} />
      <span>{label}</span>
    </CardContainer>
  )
}
