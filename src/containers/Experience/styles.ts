import styled from 'styled-components'

export const ExperienceContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3rem;
  @media screen and (max-width: 850px) {
    padding: 2rem;
  }
`

export const ExperienceContent = styled.div`
  gap: 2rem;
  max-width: 1136px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`

export const ExperienceCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  justify-content: center;
  align-items: center;
  width: 100%;
`
