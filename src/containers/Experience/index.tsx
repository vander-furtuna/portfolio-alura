import { ComponentProps, useMemo } from 'react'

import decoder from '../../assets/experience/decoder.png'
import octagon from '../../assets/experience/octagon.png'
import ux from '../../assets/experience/ux.png'
import { ExperienceCard } from '../../components/ExperienceCard'
import { Title } from '../../components/Title'
import {
  ExperienceCardsContainer,
  ExperienceContainer,
  ExperienceContent,
} from './styles'

interface ExperienceProps extends ComponentProps<'div'> {
  // Defina suas props aqui
}

export function Experience({ ...props }: ExperienceProps) {
  const experiences = useMemo(
    () => [
      {
        title: 'Site UX Software',
        description: 'Estágio Dev Front-End',
        imageUrl: ux,
        demoUrl: 'https://www.uxsoftware.com.br/',
      },
      {
        title: 'Site - Octagon Eng.',
        description: 'Assesor de Marketing Digital',
        imageUrl: octagon,
        demoUrl: 'https://www.octagon.com.br/',
        repositoryUrl: 'https://github.com/vander115/octagon-site',
      },
      {
        title: 'Alura Decoder',
        description: 'Alura Challenge',
        imageUrl: decoder,
        demoUrl: 'https://vander115.github.io/alura-decoder/',
        repositoryUrl: 'https://github.com/vander115/alura-decoder',
      },
    ],
    [],
  )

  return (
    <ExperienceContainer {...props} id="experiencia">
      <ExperienceContent>
        <Title>Experiência</Title>
        <ExperienceCardsContainer>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.title}
              title={experience.title}
              description={experience.description}
              imageUrl={experience.imageUrl}
              demoUrl={experience.demoUrl}
              repositoryUrl={experience.repositoryUrl}
              isReverse={!(index % 2 === 0)}
            />
          ))}
        </ExperienceCardsContainer>
      </ExperienceContent>
    </ExperienceContainer>
  )
}
