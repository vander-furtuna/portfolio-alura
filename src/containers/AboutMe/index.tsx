import { ComponentProps } from 'react'

import signature from '../../assets/assinatura.png'
import { Title } from '../../components/Title'
import {
  AboutMeContainer,
  AboutMeContent,
  AboutMeInformations,
  Separator,
  Signature,
} from './styles'

interface AboutMeProps extends ComponentProps<'div'> {
  // Defina suas props aqui
}

export function AboutMe({ ...props }: AboutMeProps) {
  return (
    <AboutMeContainer {...props} id="sobre-mim">
      <AboutMeContent>
        <AboutMeInformations>
          <Title>Sobre Mim</Title>
          <p>
            Técnico em Informática pela Escola de Educação Profissional
            Francisca Neilyta (2022). Atualmente cursando Engenharia da
            Computação na Universidade Federal do Ceará.
          </p>
          <p>
            Tenho experiência profissional no desenvolvimento de aplicações para
            web, aplicativos mobile e modelagem de banco de dados. Possui
            conhecimento em HTML, CSS, JavaScript, Typescript, ReactJS, NodeJS,
            NextJS, PHP, MySQL, Figma, Git e Github.
          </p>
          <p>
            Áreas de Interesse: Desenvolvimento Front-End e Back-End, Machine
            Learning, Ciência de Dados, Computação Gráfica e Biotecnologia.
          </p>
          <Signature src={signature} />
        </AboutMeInformations>
        <Separator />
      </AboutMeContent>
    </AboutMeContainer>
  )
}
