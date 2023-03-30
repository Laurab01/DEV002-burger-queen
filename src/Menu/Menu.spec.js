import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'
import AddToCart from './AddToCart'
import orderSummary from './OrderSummary'

describe('AddToCart', () => {
  test('Deberia arroja un error si el nombre(personName) y la mesa(tableSelect) se encuentran vacios', () => {
    render(<AddToCart addOrder={[]} personName='' tableSelect='Mesa' />)
    const button = screen.getByRole('button', { name: /Enviar a cocina/i })
    fireEvent.click(button)
    expect(screen.getByText(/Por favor rellena nombre y mesa/i)).toBeInTheDocument()
  })

  test('Deberia mostrar un error si la funcion addOrder se encuentra vacia', () => {
    render(<AddToCart addOrder={[]} personName='Erika' tableSelect='Mesa 1' />)
    const button = screen.getByRole('button', { name: /Enviar a cocina/i })
    fireEvent.click(button)
    expect(screen.getByText(/Por favor agrega un producto/i)).toBeInTheDocument()
  })

  test('Deberia llamar la funcion uploadOrder y savedOrderAlert functions cuando todos los espacios son validos', () => {
    const addOrder = [{ name: 'Champiñon', price: 7 }, { name: 'Hawaiana', price: 7 }]
    const personName = 'Laura'
    const tableSelect = 'Mesa 1'
    const uploadOrder = jest.fn()
    const savedOrderAlert = jest.fn()

    render(<AddToCart addOrder={addOrder} personName={personName} tableSelect={tableSelect} addOrde={uploadOrder} savedOrderAlert={savedOrderAlert} />)
    const button = screen.getByRole('button', { name: /Enviar a cocina/i })
    fireEvent.click(button)
  })
})