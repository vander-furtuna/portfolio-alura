import styled from 'styled-components'

export const ContactContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  flex-direction: column;
  background-color: ${({ theme }) => theme.gray[800]};

  @media screen and (max-width: 850px) {
    padding: 2rem;
  }
`

export const ContactContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  max-width: 1136px;
  width: 100%;
`

export const ContactImg = styled.img`
  width: 29rem;
  height: auto;

  @media screen and (max-width: 850px) {
    display: none;
  }
`
