import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '../Button'
import { Input } from '../Input'
import { Textarea } from '../TextArea'
import { Title } from '../Title'
import { ContactFormContainer, InformationContainer } from './styles'

const contactFormSchema = z.object({
  name: z
    .string({
      required_error: 'Nome é obrigatório',
    })
    .min(1, 'Nome é obrigatório'),
  email: z
    .string({
      required_error: 'Email é obrigatório',
    })
    .min(1, 'Eamil é obrigatório')
    .email({
      message: 'Email inválido',
    }),
  subject: z
    .string({
      required_error: 'Assunto é obrigatório',
    })
    .min(1, 'Assunto é obrigatório'),
  message: z
    .string({
      required_error: 'Mensagem é obrigatória',
    })
    .min(1, 'Mensagem é obrigatório'),
})

export type ContactFormSchemaType = z.infer<typeof contactFormSchema>

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ContactFormSchemaType>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onSubmit',
  })

  const handleSubmitEmail = useCallback(() => {
    toast.success('Mensagem enviada com sucesso!')
  }, [])

  return (
    <ContactFormContainer onSubmit={handleSubmit(handleSubmitEmail)}>
      <Title>Contato</Title>
      <InformationContainer>
        <p>Quer entrar em contato comigo?</p>
        <p>
          Preencha o formulário abaixo e respondeirei o mais rápido possível.
        </p>
      </InformationContainer>
      <Input
        label="Nome"
        type="text"
        error={errors?.name?.message}
        {...register('name')}
      />
      <Input
        label="Email"
        error={errors?.email?.message}
        {...register('email')}
      />
      <Input
        type="text"
        label="Assunto"
        error={errors?.subject?.message}
        {...register('subject')}
      />
      <Textarea
        label="Mensagem"
        error={errors?.subject?.message}
        {...register('message')}
      />
      <Button type="submit" variant="filled" disabled={isSubmitting}>
        Enviar mensagem
      </Button>
    </ContactFormContainer>
  )
}
