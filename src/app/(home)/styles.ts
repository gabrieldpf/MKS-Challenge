import Image from 'next/image'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.main`
  min-height: calc(
    100vh - 7.051875rem
  ); // calculo para manter o conteudo sempre ocupado a tela toda
  padding: 5rem 10rem;
  background-color: #e5e5e5;

  @media (max-width: 900px) {
    padding: 3rem 5rem;
  }
  @media (max-width: 600px) {
    padding: 2rem 2rem;
  }
`

export const Product = styled(motion.div)`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.13);
  padding-top: 30px;

  &:hover {
    img {
      transition: 0.4s;
      transform: scale(1.1);
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    background-color: #0f52ba;
    color: #fff;
    border-style: none;

    padding: 0.5rem;
    font-size: 14px;
    font-weight: 600;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      background-color: #0c387c;
    }
  }
`
export const ProductImage = styled(Image)`
  margin: 0 auto;
  width: 150px;
  height: auto;
  /* padding-bottom: 10px; */
`
export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
  padding: 20px 16px;
  div {
    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: 4px;
    h1 {
      font-size: 17px;
      font-weight: 400;
      color: #2c2c2c;
    }

    span {
      font-size: 15px;
      font-weight: bold;
      color: #fff;
      background-color: #373737;
      padding: 6px 7px;
      border-radius: 10px;
    }
  }

  p {
    font-size: 11px;
    font-weight: 400;
    color: #2c2c2c;
  }
`
export const ProductContainer = styled.div`
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

export const ConteinerError = styled.div`
  margin: 0 auto;
  width: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 30px;
    font-weight: bold;
  }

  img {
    height: 500px;
    width: auto;
  }

  @media (max-width: 900px) {
    width: 100%;
    span {
      font-size: 30px;
      text-align: center;
      font-weight: bold;
    }

    img {
      height: 500px;
      width: auto;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    span {
      font-size: 20px;
      text-align: center;
      font-weight: bold;
    }

    img {
      height: 300px;
      width: auto;
    }
  }
`
