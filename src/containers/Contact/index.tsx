import { ComponentProps } from 'react'

import emailIcon from '../../assets/email.svg'
import { ContactForm } from '../../components/ContactForm'
import { ContactContainer, ContactContent, ContactImg } from './styles'

interface ContactProps extends ComponentProps<'div'> {
  // Defina suas props aqui
}

export function Contact({ ...props }: ContactProps) {
  return (
    <ContactContainer {...props} id="contato">
      <ContactContent>
        <ContactImg src={emailIcon} />
        <ContactForm />
      </ContactContent>
    </ContactContainer>
  )
}
