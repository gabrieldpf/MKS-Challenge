import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 4.2rem;
  background-color: #0f52ba;

  @media (max-width: 900px) {
    padding: 1rem 1rem;
  }

  button {
    display: flex;
    gap: 1rem;
    align-items: center;
    background-color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: bold;

    border-style: none;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: #ddd;
    }
  }
`
