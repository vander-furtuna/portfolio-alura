import { ComponentProps } from 'react'
import { IoIosArrowUp } from 'react-icons/io'

import vanderDevLogo from '../../assets/logo.svg'
import { ArrowButton, FooterContainer, FooterContent } from './styles'

interface FooterProps extends ComponentProps<'footer'> {
  // Defina suas props aqui
}

export function Footer({ ...props }: FooterProps) {
  return (
    <FooterContainer {...props}>
      <FooterContent>
        <img src={vanderDevLogo} alt="Logotipo vander.dev" />
        <span>{new Date().getFullYear()} &#169; vander.dev</span>
        <ArrowButton href="#inicio">
          <IoIosArrowUp size={24} />
        </ArrowButton>
      </FooterContent>
    </FooterContainer>
  )
}
