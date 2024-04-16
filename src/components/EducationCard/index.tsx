import { ComponentProps } from 'react'

import {
  DescriptionContainer,
  EducationCardContainer,
  LogoContainer,
} from './styles'

interface EducationCardProps extends ComponentProps<'section'> {
  title: string
  description: string
  logoUrl: string
}

export function EducationCard({
  title,
  description,
  logoUrl,
  ...props
}: EducationCardProps) {
  return (
    <EducationCardContainer {...props}>
      <LogoContainer>
        <img src={logoUrl} alt={title} />
      </LogoContainer>
      <DescriptionContainer>
        <strong>{title}</strong>
        <span>{description}</span>
      </DescriptionContainer>
    </EducationCardContainer>
  )
}
