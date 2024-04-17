import styled from 'styled-components'

export const ContactFormContainer = styled.form`
  display: flex;
  gap: 1rem;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`
export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${({ theme }) => theme.gray[100]};
`
