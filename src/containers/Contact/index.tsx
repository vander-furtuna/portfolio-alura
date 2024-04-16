import { ComponentProps } from 'react'

import emailIcon from '../../assets/email.svg'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/TextArea'
import { Title } from '../../components/Title'
import {
  ContactContainer,
  ContactContent,
  ContactForm,
  ContactImg,
  InformationContainer,
} from './styles'

interface ContactProps extends ComponentProps<'div'> {
  // Defina suas props aqui
}

export function Contact({ ...props }: ContactProps) {
  return (
    <ContactContainer {...props} id="contato">
      <ContactContent>
        <ContactImg src={emailIcon} />
        <ContactForm>
          <Title>Contato</Title>
          <InformationContainer>
            <p>Quer entrar em contato comigo?</p>
            <p>
              Preencha o formulário abaixo e respondeirei o mais rápido
              possível.
            </p>
          </InformationContainer>
          <Input name="nome" label="Nome" />
          <Input name="email" type="email" label="Email" />
          <Input name="subject" type="email" label="Assunto" />
          <Textarea name="message" label="Mensagem" />
          <Button type="submit" variant="filled">
            Enviar mensagem
          </Button>
        </ContactForm>
      </ContactContent>
    </ContactContainer>
  )
}
