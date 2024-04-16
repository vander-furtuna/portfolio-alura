import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;

  @media screen and (max-width: 850px) {
    padding: 2rem;
  }
`

export const FooterContent = styled.div`
  max-width: 1136px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    height: 2rem;
    width: auto;
  }

  span {
    font-size: 1rem;
    color: ${({ theme }) => theme.gray[100]};
    font-weight: 400;
  }
`

export const ArrowButton = styled.a`
  padding: 0.5rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primary[500]};
  cursor: pointer;
  transition: all 0.1s ease;
  color: ${({ theme }) => theme.gray[800]};

  svg {
    transform: translateY(2px);
  }

  &:hover {
    background-color: ${({ theme }) => theme.primary[300]};
  }
`
