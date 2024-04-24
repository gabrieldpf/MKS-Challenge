'use client'
import { Skeleton } from '@/components/skeleton'
import { useCart } from '@/context/cart-context'
import { ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import { useQuery } from 'react-query'
import {
  Container,
  ConteinerError,
  Product,
  ProductContainer,
  ProductDetails,
  ProductImage,
} from './styles'

export interface Product {
  id: number
  name: string
  description?: string
  photo: string
  price: string
}

export default function Home() {
  const { addToCart } = useCart()
  const { data, isLoading, error } = useQuery('Products', async () => {
    const response = await fetch(
      'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC',
    )
    const data = await response.json()

    return data
  })

  function handleAddProductToCart(product: Product) {
    const { id, name, photo, price } = product
    addToCart({ id, name, photo, price })
  }

  return (
    <Container>
      {isLoading ? (
        <Skeleton />
      ) : error ? (
        <ConteinerError>
          <Image
            src="/erro-image.png"
            width={500}
            height={500}
            alt="Imagem de Erro"
          />
          <span>Ocorreu um erro Porfavor entrar em contato com o suporte</span>
        </ConteinerError>
      ) : (
        <ProductContainer>
          {data.products.map((product: Product) => {
            return (
              <Product
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
                key={product.id}
              >
                <ProductImage
                  src={product.photo}
                  width={500}
                  height={500}
                  alt=""
                  quality={100}
                />
                <ProductDetails>
                  <div>
                    <h1>{product.name}</h1>
                    <span>
                      {parseFloat(product.price).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </span>
                  </div>
                  <p>{product.description}</p>
                </ProductDetails>
                <button
                  type="button"
                  onClick={() => handleAddProductToCart(product)}
                >
                  <ShoppingBag />
                  Comprar
                </button>
              </Product>
            )
          })}
        </ProductContainer>
      )}
    </Container>
  )
}
