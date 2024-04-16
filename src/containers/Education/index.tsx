import { ComponentProps, useMemo } from 'react'

import logoAlura from '../../assets/logo-alura.svg'
import logoNeilyta from '../../assets/logo-neilyta.png'
import logoUFC from '../../assets/logo-ufc.png'
import { EducationCard } from '../../components/EducationCard'
import { Title } from '../../components/Title'
import { CardContainer, EducationContainer, EducationContent } from './styles'

interface EducationProps extends ComponentProps<'div'> {
  // Defina suas props aqui
}

export function Education({ ...props }: EducationProps) {
  const educations = useMemo(
    () => [
      {
        title: 'Técnico em Informática',
        description: '2022 - EEEP Francisca Neilyta',
        logoUrl: logoNeilyta,
      },
      {
        title: 'Desenvolvimento Front-End',
        description: 'Em andamento - Alura',
        logoUrl: logoAlura,
      },
      {
        title: 'Engenharia da Computação',
        description: 'Em andamento - UFC',
        logoUrl: logoUFC,
      },
    ],
    [],
  )

  return (
    <EducationContainer {...props} id="formacao">
      <EducationContent>
        <Title>Formação</Title>
        <CardContainer>
          {educations.map((education) => (
            <EducationCard
              key={education.title}
              title={education.title}
              description={education.description}
              logoUrl={education.logoUrl}
            />
          ))}
        </CardContainer>
      </EducationContent>
    </EducationContainer>
  )
}
