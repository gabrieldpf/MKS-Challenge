import styled from 'styled-components'

export const SkeletonContainer = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 250px);
  justify-content: center;
  gap: 30px;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, 250px);
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 250px);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 250px);
  }
`
export const SkeletonLoading = styled.div`
  width: 250px;
  height: 383px;
  background-color: #d6d6d6;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.13);
  border-radius: 8px;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`
