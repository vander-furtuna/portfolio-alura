import { ComponentProps, forwardRef } from 'react'
import { MdError } from 'react-icons/md'

import { Error, Label } from '../Input/styles'
import { TextareaContainer } from './styles'

interface TextareaProps extends ComponentProps<'textarea'> {
  label: string
  error?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, name, error, ...props }, ref) => {
    return (
      <TextareaContainer isError={!!error}>
        <Label htmlFor={name}>
          {label}
          {error && (
            <Error>
              <MdError size={16} />
              {error}
            </Error>
          )}
        </Label>
        <textarea name={name} ref={ref} {...props} />
      </TextareaContainer>
    )
  },
)

Textarea.displayName = 'Textarea'
