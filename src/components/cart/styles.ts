import * as Dialog from '@radix-ui/react-dialog'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const CartContainer = styled(Dialog.Content)`
  position: fixed;
  background-color: #0f52ba;
  right: 0;
  bottom: 0;
  z-index: 9;
  display: flex;
  flex-direction: column;
  border-left: 1px solid #3685ff;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.13);

  height: 100vh;
  width: 550px;

  @media (max-width: 600px) {
    width: 90%;
    height: 100%;
  }

  a {
    display: flex;
    text-decoration: none;
    border-radius: 0;
    background-color: #111;
    color: #fff;
    font-weight: bold;
    justify-content: center;
    width: 100%;
    padding: 1rem;
    transition: 0.3s;

    &:hover {
      background-color: #000;
    }
  }
`

export const HeaderCart = styled.header`
  display: flex;
  justify-content: space-between;

  span {
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
  }

  button {
    border-style: none;
    padding: 0.5rem;
    line-height: 0;
    color: #fff;
    border-radius: 9999px;
    background-color: #111;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      background-color: #000;
    }
  }

  @media (max-width: 600px) {
    align-items: start;
  }
`

export const CartInfo = styled.div`
  padding: 2rem;
  height: calc(100% - 51px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ProductsContainerCart = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px 0;
  padding: 10px 10px;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    background-color: #3685ff;
    border-radius: 999px;
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #fff;
    border-radius: 999px;
  }
`

export const ProductCart = styled(motion.div)`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  gap: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.13);

  @media (max-width: 600px) {
    flex-direction: column;
  }

  .price {
    font-weight: bold;

    @media (max-width: 600px) {
      font-weight: bold;
      color: #fff;
      background-color: #373737;
      padding: 6px 7px;
      border-radius: 10px;
    }
  }

  .delete-product {
    position: absolute;
    right: -8px;
    top: -8px;

    border-style: none;
    padding: 0.3rem;
    line-height: 0;
    color: #fff;
    border-radius: 9999px;
    background-color: #111;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      background-color: #000;
    }

    @media (max-width: 600px) {
      background-color: transparent;
      color: #171717;
      padding: 0;
      right: 8px;
      top: 8px;
      svg {
        width: 30px;
        height: 30px;
      }
    }
  }
`

export const ProductCartHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
  }

  img {
    height: 80px;
    width: auto;
    @media (max-width: 600px) {
      height: 100px;
    }
  }
`

export const ProductCartQuantity = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  span {
    font-size: 12px;

    @media (max-width: 600px) {
      display: none;
    }
  }

  div {
    display: flex;
    min-width: 80px;
    justify-content: space-between;
    border: 1px solid #bfbfbf;
    align-items: center;
    line-height: 0;
    border-radius: 4px;
    gap: 10px;
    padding: 4px;

    span {
      text-align: center;
      font-size: 16px;
      width: 100%;

      @media (max-width: 600px) {
        display: block;
        font-size: 20px;
      }
    }

    button {
      background-color: transparent;
      border-style: none;
      cursor: pointer;

      &:disabled {
        cursor: not-allowed;
      }

      @media (max-width: 600px) {
        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
`

export const ResumeCart = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    color: #fff;
    font-size: 1.2rem;
    font-weight: bold;
  }
`

export const ProductCartBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`
