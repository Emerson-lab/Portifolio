import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  h1 {
    color: ${({ theme}) => theme.primary} !important;
    font-size: 4.5rem !important;
  }

  h2 {
    color: ${({ theme}) => theme.secondary} !important;
    font-weight: 300;
    font-size: 3.5rem !important;
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 2.5rem !important;
    }

    h2 {
      font-size: 1.8rem !important;
    }
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 1.8rem !important;
    }

    h2 {
      font-size: 1.2rem !important;
    }
  }
`;
