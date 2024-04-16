import styled from 'styled-components'

export const SkillsAndHobbiesContainer = styled.div`
  width: 100%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex: 1;
  @media screen and (max-width: 850px) {
    padding: 2rem;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  max-width: 1136px;
`

export const CardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr); /* 6 colunas com tamanho igual */
  grid-gap: 1rem;

  @media screen and (max-width: 850px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2 1fr);
  }
`
