import styled from 'styled-components'

export const BannerContainer = styled.div`
  padding: 3rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 850px) {
    padding: 2rem;
  }
`

export const BannerContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  max-width: 1136px;
  @media screen and (max-width: 650px) {
    flex-direction: column-reverse;
    gap: 2rem;
  }
`

export const BannerImg = styled.img`
  width: 100%;
  height: 100%;
  max-width: 27rem;
  max-height: 27rem;
  border-radius: 50%;
  object-fit: cover;

  @media screen and (max-width: 1000px) {
    max-width: 18rem;
    max-height: 18rem;
  }
  @media screen and (max-width: 850px) {
    max-width: 9.125rem;
    max-height: 9.125rem;
  }
`

export const InformationContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1.5rem;
`

export const Title = styled.h1`
  color: white;
  font-weight: bold;
  font-size: 3rem;

  @media screen and (max-width: 1000px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 850px) {
    font-size: 1.375rem;
  }
`

export const Subtitle = styled.p`
  color: white;
  font-size: 1.25rem;
  font-weight: normal;
  @media screen and (max-width: 1000px) {
    font-size: 1rem;
  }
`

export const BannerLink = styled.a`
  color: ${({ theme }) => theme.primary[100]};
  text-decoration: none;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  position: relative;
  svg {
    color: ${({ theme }) => theme.primary[500]};
    transition: all 0.2s ease-in-out;
  }

  &:before {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    height: 2px;
    width: 0px;
    transition: all 0.2s ease-in-out;
    background: ${({ theme }) => theme.primary[500]};
  }

  &:hover {
    &:before {
      width: 80%;
    }

    svg {
      transform: translate(2px, -2px);
    }
  }
  @media screen and (max-width: 650px) {
    font-size: 0.875rem;
  }
`

export const LinksContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  @media screen and (max-width: 850px) {
    gap: 1rem;
  }
`
