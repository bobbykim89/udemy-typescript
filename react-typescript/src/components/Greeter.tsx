interface GreeterProps {
  person: string
}

const Greeter = ({ person }: GreeterProps): JSX.Element => {
  const items = [
    { id: 1, product: 'Lemon', quantity: 3 },
    { id: 2, product: 'Chicken Breast', quantity: 2 },
  ]
  return (
    <div>
      <h1>Hello, {person}</h1>
    </div>
  )
}

export default Greeter
