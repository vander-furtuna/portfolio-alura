import styled from 'styled-components'

type InputContainerProps = {
  isError: boolean
}

export const InputContainer = styled.div<InputContainerProps>`
  width: 100%;
  height: 3.5rem;
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

  input {
    width: 100%;
    height: 1.5rem;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.gray[50]};
    font-size: 1rem;
    font-weight: 500;

    &:focus {
      outline: none;
    }
  }
`

export const Label = styled.label`
  font-size: 0.75rem;
  font-weight: normal;
  width: 100%;
  text-align: left;
  display: flex;
`

export const Error = styled.span`
  font-size: 0.75rem;
  font-weight: normal;
  color: ${({ theme }) => theme.red[600]};
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`
