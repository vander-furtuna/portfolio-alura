import styled from 'styled-components'

export const TextareaContainer = styled.div`
  width: 100%;
  height: fit-content;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.gray[700]};
  border-bottom: 1px solid ${({ theme }) => theme.gray[400]};
  color: ${({ theme }) => theme.gray[400]};
  padding: 0.5rem 0.75rem;
  transition: all 0.15s ease-in-out;
  &:focus-within {
    border-color: ${({ theme }) => theme.primary[500]};
    color: ${({ theme }) => theme.primary[100]};
  }
`

export const Label = styled.label`
  font-size: 0.75rem;
  font-weight: normal;
  color: inherit;
`

export const TextareaElement = styled.textarea`
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
`
