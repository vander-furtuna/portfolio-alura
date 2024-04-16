import styled from 'styled-components'

type ExperienceCardContainerProps = {
  isReverse: boolean
}

export const ExperieceCardContainer = styled.div<ExperienceCardContainerProps>`
  width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ isReverse }) => (isReverse ? 'row-reverse' : 'row')};

  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
`

export const Image = styled.img`
  height: 25rem;
  width: 45rem;
  object-fit: cover;
  border-radius: 12px;

  @media screen and (max-width: 1000px) {
    height: 20rem;
    width: 35rem;
  }
  @media screen and (max-width: 850px) {
    width: 100%;
  }
`

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 1rem;
  flex: 1;
  strong {
    font-size: 1.325rem;
    color: white;
    font-weight: bold;
  }

  span {
    font-size: 1rem;
    font-weight: 500;
    color: white;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`
