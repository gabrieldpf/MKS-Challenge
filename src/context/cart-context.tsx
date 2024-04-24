'use client'

import { Product } from '@/app/(home)/page'
import { ReactNode, createContext, useContext, useState } from 'react'

interface CartItem {
  id: number
  name: string
  price: number
  photo: string
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (product: Product) => void
  decreaseQuantity: (id: number) => void
  increaseQuantity: (id: number) => void
  removeProduct: (id: number) => void
}

const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addToCart(product: Product) {
    setCartItems((state) => {
      const productInCart = state.some((item) => item.id === product.id)

      if (productInCart) {
        return state.map((item) => {
          if (item.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
              price: parseFloat(product.price) * (item.quantity + 1),
            }
          } else {
            return item
          }
        })
      } else {
        const newProduct: CartItem = {
          id: product.id,
          name: product.name,
          price: parseFloat(product.price),
          photo: product.photo,
          quantity: 1,
        }
        return [...state, newProduct]
      }
    })
  }

  function decreaseQuantity(id: number) {
    setCartItems((state) => {
      const productInCart = state.some((item) => item.id === id)

      if (productInCart) {
        return state.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity - 1,
              price: (item.price / item.quantity) * (item.quantity - 1),
            }
          } else {
            return item
          }
        })
      }
      return state
    })
  }

  function increaseQuantity(id: number) {
    setCartItems((state) => {
      const productInCart = state.some((item) => item.id === id)

      if (productInCart) {
        return state.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + 1,
              price: (item.price / item.quantity) * (item.quantity + 1),
            }
          } else {
            return item
          }
        })
      }

      return state
    })
  }

  function removeProduct(id: number) {
    const newAllProducts = cartItems.filter((item) => item.id !== id)
    console.log(newAllProducts)
    setCartItems(newAllProducts)
  }
  return (
    <CartContext.Provider
      value={{
        items: cartItems,
        addToCart,
        decreaseQuantity,
        increaseQuantity,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
