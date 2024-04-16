import { ComponentProps, useMemo } from 'react'
import { MdArrowOutward } from 'react-icons/md'

import profileImage from '../../assets/profile-pic.png'
import {
  BannerContainer,
  BannerContent,
  BannerImg,
  BannerLink,
  InformationContainer,
  LinksContainer,
  Subtitle,
  Title,
} from './styles'

interface BannerProps extends ComponentProps<'div'> {
  // Defina suas props aqui
}

export function Banner({ ...props }: BannerProps) {
  const links = useMemo(() => {
    return [
      {
        label: 'GitHub',
        href: '#sobre-mim',
      },
      {
        label: 'LinkedIn',
        href: '#skills',
      },
      {
        label: 'Curriculo',
        href: 'http://lattes.cnpq.br/5265236077389186',
      },
      {
        label: 'Instagram',
        href: '#formacao',
      },
    ]
  }, [])

  return (
    <BannerContainer {...props}>
      <BannerContent>
        <InformationContainer>
          <Title>
            Olá, eu sou o Vander, faço designs e construo páginas web
          </Title>
          <Subtitle>
            Eu sou técnico em informática e acadêmico em Engenharia da
            Computação e atualmente estou participando no projeto Oracle ONE na
            Alura.
          </Subtitle>
          <LinksContainer>
            {links.map((link) => (
              <BannerLink key={link.href} href={link.href}>
                {link.label}
                <MdArrowOutward />
              </BannerLink>
            ))}
          </LinksContainer>
        </InformationContainer>
        <BannerImg src={profileImage} />
      </BannerContent>
    </BannerContainer>
  )
}
