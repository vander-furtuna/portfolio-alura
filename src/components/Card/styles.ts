import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 1rem;
  border-radius: 12px;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.gray[800]};

  transition: all 0.2s ease-in-out;

  svg {
    transition: inherit;
    color: ${({ theme }) => theme.primary[500]};
  }

  span {
    transition: inherit;
    font-size: 1rem;
    color: white;
    font-weight: bold;
    text-align: left;
  }

  &:hover {
    background-color: ${({ theme }) => theme.primary[500]};
    transform: translateY(-5px);
    span,
    svg {
      color: ${({ theme }) => theme.gray[800]};
    }
  }
`
