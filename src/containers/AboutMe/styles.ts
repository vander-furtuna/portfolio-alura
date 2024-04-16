import styled from 'styled-components'

export const AboutMeContainer = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.gray[800]};
  padding: 4rem 3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 850px) {
    padding: 2rem;
  }
`

export const AboutMeContent = styled.article`
  max-width: 1136px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const AboutMeInformations = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  flex: 2;

  p {
    font-size: 1rem;
    font-weight: regular;
    color: white;
    text-align: left;
  }
`

export const Separator = styled.div`
  flex: 1;
  @media screen and (max-width: 650px) {
    display: none;
  }
`

export const Signature = styled.img`
  height: 3.5rem;
  width: auto;
`
