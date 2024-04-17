import { ComponentProps } from 'react'

interface EmailTemplateProps extends ComponentProps<'div'> {
  message: string
  name: string
}

export function EmailTemplate({ name, message, ...props }: EmailTemplateProps) {
  return (
    <div {...props}>
      <h1>{name + ' ' + message}</h1>
    </div>
  )
}
