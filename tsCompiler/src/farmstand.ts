interface Product {
  price: number
  name: string
  quantity: number
}

const printProductSummary = (product: Product): void => {
  console.log(`${product.name} - $${product.price}`)
}
