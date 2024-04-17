import { ComponentProps, forwardRef } from 'react'
import { MdError } from 'react-icons/md'

import { Error, InputContainer, Label } from './styles'

interface InputProps extends ComponentProps<'input'> {
  label: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, name, ...props }, ref) => {
    return (
      <InputContainer isError={!!error}>
        <Label htmlFor={name}>
          {label}
          {error && (
            <Error>
              <MdError size={16} />
              {error}
            </Error>
          )}
        </Label>
        <input name={name} ref={ref} {...props} />
      </InputContainer>
    )
  },
)

Input.displayName = 'Input'
