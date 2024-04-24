import { fireEvent, render, screen } from '@testing-library/react'
import { Header } from '.'

jest.mock('@/context/cart-context', () => {
  return {
    useCart() {
      return {
        items: [
          {
            id: 1,
            name: 'Mocked Product',
            price: 10.0,
            photo:
              'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp',
            quantity: 1,
          },
        ],
      }
    },
  }
})

describe('CartButton Component', () => {
  it('render correctly', () => {
    render(<Header />)

    expect(screen.getByText(1)).toBeInTheDocument()
  })

  it('open Cart Component', () => {
    render(<Header />)

    const cartButton = screen.getByText(1)

    fireEvent.click(cartButton)

    expect(screen.getByText('Carrinho de Compras')).toBeInTheDocument()
  })
})
