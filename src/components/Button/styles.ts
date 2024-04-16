import styled, { css } from 'styled-components'

import { ButtonVariants } from '.'

type ButtonContainerProps = {
  variant: ButtonVariants
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  border: 2px solid ${({ theme }) => theme.primary[500]};
  border-radius: 8px;
  padding: 1rem;
  width: fit-conent;
  height: fit-content;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.1s ease;

  ${({ variant }) => {
    if (variant === 'filled') {
      return css`
        background-color: ${({ theme }) => theme.primary[500]};
        color: ${({ theme }) => theme.gray[800]};

        &:hover {
          background-color: ${({ theme }) => theme.primary[300]};
        }
      `
    } else if (variant === 'outlined') {
      return css`
        background-color: transparent;
        color: ${({ theme }) => theme.primary[500]};

        &:hover {
          color: ${({ theme }) => theme.primary[300]};
          border-color: ${({ theme }) => theme.primary[300]};
        }
      `
    }
  }}
`
