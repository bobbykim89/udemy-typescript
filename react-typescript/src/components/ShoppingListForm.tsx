import React, { useRef } from 'react'

interface ShoppingListFormProps {
  onAddItem: (item: string, quantity: number) => void
}

const ShoppingListForm = ({
  onAddItem,
}: ShoppingListFormProps): JSX.Element => {
  const productInputRef = useRef<HTMLInputElement>(null)
  const quantityInputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newProduct = productInputRef.current!.value
    const quantity = parseInt(quantityInputRef.current!.value)
    onAddItem(newProduct, quantity)
    productInputRef.current!.value = ''
    quantityInputRef.current!.value = ''
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Product Name' ref={productInputRef} />
      <input type='number' min={0} ref={quantityInputRef} />
      <button type='submit'>Add Item</button>
    </form>
  )
}

export default ShoppingListForm
