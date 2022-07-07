import { useState } from 'react'
import { v4 as getId } from 'uuid'
import ShoppingList from './components/ShoppingList'
import ShoppingListForm from './components/ShoppingListForm'
import Item from './models/item'

function App() {
  const [items, setItems] = useState<Item[]>([])
  const addItem = (product: string, quantity: number) => {
    console.log('Made to the app component')
    console.log(product)
    setItems([...items, { id: getId(), product, quantity }])
  }
  // const items = [
  //   { id: 1, product: 'Lemon', quantity: 3 },
  //   { id: 2, product: 'Chicken Breast', quantity: 2 },
  // ]

  return (
    <div className='App'>
      <h1>Hello World!</h1>
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem={addItem} />
    </div>
  )
}

export default App
