import styled from 'styled-components'

export const EducationCardContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 1rem;
`

export const LogoContainer = styled.div`
  width: 100%;
  height: 18rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.primary[100]};
  border-radius: 12px;
  img {
    height: auto;
    width: 9rem;
  }
`

export const DescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  strong {
    font-size: 1.375rem;
    color: white;
    font-weight: bold;
    text-align: flex-start;
    line-height: 26px;
  }

  span {
    font-size: 1rem;
    font-weight: 500;
    color: white;
    line-height: 19px;
  }
`
