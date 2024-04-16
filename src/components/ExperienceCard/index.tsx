import { ComponentProps } from 'react'

import { LinkButton } from '../LinkButton'
import {
  ButtonContainer,
  ExperieceCardContainer,
  Image,
  InformationContainer,
} from './styles'

interface ExperienceCardProps extends ComponentProps<'div'> {
  title: string
  description: string
  imageUrl: string
  demoUrl?: string
  repositoryUrl?: string
  isReverse?: boolean
}

export function ExperienceCard({
  title,
  description,
  imageUrl,
  demoUrl,
  repositoryUrl,
  isReverse = false,
  ...props
}: ExperienceCardProps) {
  return (
    <ExperieceCardContainer isReverse={isReverse} {...props}>
      <Image src={imageUrl} alt={title} />
      <InformationContainer>
        <strong>{title}</strong>
        <span>{description}</span>
        <ButtonContainer>
          {repositoryUrl && (
            <LinkButton href={repositoryUrl} variant="outlined">
              Repositório
            </LinkButton>
          )}
          {demoUrl && (
            <LinkButton href={demoUrl} variant="filled">
              Demo
            </LinkButton>
          )}
        </ButtonContainer>
      </InformationContainer>
    </ExperieceCardContainer>
  )
}
