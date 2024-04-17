import styled from 'styled-components'

type TextareaContainerProps = {
  isError: boolean
}

export const TextareaContainer = styled.div<TextareaContainerProps>`
  width: 100%;
  height: fit-content;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.gray[700]};
  border-bottom: 1px solid ${({ theme }) => theme.gray[400]};
  color: ${({ theme, isError }) =>
    isError ? theme.red[600] : theme.gray[400]};
  padding: 0.5rem 0.75rem;
  transition: all 0.15s ease-in-out;
  border-color: ${({ theme, isError }) =>
    isError ? theme.red[600] : theme.gray[400]};
  &:focus-within {
    border-color: ${({ theme }) => theme.primary[500]};
    color: ${({ theme }) => theme.primary[100]};
  }

  textarea {
    width: 100%;
    height: 8rem;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.gray[50]};
    font-size: 1rem;
    font-weight: 500;
    resize: none;

    &:focus {
      outline: none;
    }
  }
`

export const Label = styled.label`
  font-size: 0.75rem;
  font-weight: normal;
  color: inherit;
`
