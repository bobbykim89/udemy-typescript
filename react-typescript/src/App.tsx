import { useState } from 'react'
import ShoppingList from './components/ShoppingList'
import Item from './models/item'

function App() {
  const [items, setItems] = useState<Item[]>([])
  // const items = [
  //   { id: 1, product: 'Lemon', quantity: 3 },
  //   { id: 2, product: 'Chicken Breast', quantity: 2 },
  // ]

  return (
    <div className='App'>
      <h1>Hello World!</h1>
      <ShoppingList items={items} />
    </div>
  )
}

export default App
