import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2rem 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 850px) {
    padding: 2rem;
  }
`

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1136px;
`

export const Logo = styled.img`
  height: 2rem;
  width: auto;
`

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media screen and (max-width: 850px) {
    display: none;
  }
`

export const NavItem = styled.a`
  color: #fff;
  opacity: 0.9;
  font-size: 1rem;
  text-decoration: none;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    width: 0px;
    height: 2px;
    left: 50%;
    transform: translateX(-50%);
    bottom: -5px;
    background: ${({ theme }) => theme.primary[100]};
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.primary[100]};
    &:before {
      width: 80%;
      background-color: ${({ theme }) => theme.primary[300]};
    }
  }
`
