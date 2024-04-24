import { Dialog } from '@radix-ui/react-dialog'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Cart } from '.'

const mockRemoveProduct = jest.fn().mockReturnValue('removeu o item')
const mockIncreaseQuantity = jest.fn().mockReturnValue('aumentou 1')
const mockDecreaseQuantity = jest.fn().mockReturnValue('diminuiu 1')

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
            quantity: 2,
          },
        ],
        increaseQuantity: mockIncreaseQuantity,
        decreaseQuantity: mockDecreaseQuantity,
        removeProduct: mockRemoveProduct,
      }
    },
  }
})

describe('Cart Components', () => {
  it('renders correctly', () => {
    render(
      <Dialog open={true}>
        <Cart />
      </Dialog>,
    )
    expect(screen.getByText('Carrinho de Compras')).toBeInTheDocument()
    expect(screen.getByText('Mocked Product')).toBeInTheDocument()
    expect(screen.getByText(2)).toBeInTheDocument()
  })

  it('Increase button works correctly ', async () => {
    render(
      <Dialog open={true}>
        <Cart />
      </Dialog>,
    )
    expect(screen.getByText('Mocked Product')).toBeInTheDocument()
    expect(screen.getByText(2)).toBeInTheDocument()

    await waitFor(() => {
      fireEvent.click(screen.getByTestId('buttonIncrease'))
      expect(mockIncreaseQuantity).toHaveBeenCalled()
    })
  })

  it('Decrease button works correctly ', async () => {
    render(
      <Dialog open={true}>
        <Cart />
      </Dialog>,
    )
    expect(screen.getByText('Mocked Product')).toBeInTheDocument()
    expect(screen.getByText(2)).toBeInTheDocument()

    await waitFor(() => {
      fireEvent.click(screen.getByTestId('buttonDecrease'))
      expect(mockDecreaseQuantity).toHaveBeenCalled()
    })
  })

  it('Remove button works correctly ', async () => {
    render(
      <Dialog open={true}>
        <Cart />
      </Dialog>,
    )
    expect(screen.getByText('Mocked Product')).toBeInTheDocument()
    expect(screen.getByText(2)).toBeInTheDocument()

    await waitFor(() => {
      fireEvent.click(screen.getByTestId('buttonRemove'))
      expect(mockRemoveProduct).toHaveBeenCalled()
    })
  })
})
