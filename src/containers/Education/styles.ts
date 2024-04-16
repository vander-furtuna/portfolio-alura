import styled from 'styled-components'

export const EducationContainer = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.gray[800]};
  padding: 4rem 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 850px) {
    padding: 2rem;
  }
`

export const EducationContent = styled.article`
  max-width: 1136px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  gap: 2rem;
`

export const CardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 6 colunas com tamanho igual */
  grid-gap: 1rem;

  @media screen and (max-width: 850px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`
