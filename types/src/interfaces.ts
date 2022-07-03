// Interface is very similar to type
interface Point {
  x: number
  y: number
}

const pt: Point = { x: 123, y: 456 }

// Optional properties
interface Person {
  readonly id: number
  first: string
  last: string
  nickname?: string
}

const Manguito: Person = {
  id: 123123123,
  first: 'Manguito',
  last: 'Lovebird',
  nickname: 'Pollito',
}

// Interface methods
interface Bird {
  readonly id: number
  first: string
  last: string
  nickname?: string
  //   sayHi: () => string
  sayHi(): string // Either way works
}

const ManguitoTwo: Bird = {
  id: 123123123,
  first: 'Manguito',
  last: 'Lovebird',
  nickname: 'Pollito',
  sayHi: () => {
    return 'Hello!'
  },
}

interface Product {
  name: string
  price: number
  applyDiscount(discount: number): number
}

const shoes: Product = {
  name: 'Blue Suede Shoes',
  price: 100,
  applyDiscount(amount: number) {
    const newPrice = this.Price * (1 - amount)
    this.price = newPrice
    return this.price
  },
}

console.log(shoes.name)

const newShoes = shoes.applyDiscount(0.4)
console.log(newShoes)

// Reopening Interfaces
interface Dog {
  name: string
  age: number
}

interface Dog {
  breed: string
  bark(): string
}

const elton: Dog = {
  name: 'Elton',
  age: 0.5,
  breed: 'Australian Shepherd',
  bark() {
    return 'Woof Woof!'
  },
}

console.log(elton.bark())

interface ServiceDog extends Dog {
  job: 'drug sniffer' | 'bomb' | 'guide dog'
}

const chewy: ServiceDog = {
  name: 'Chewy',
  age: 4.5,
  breed: 'Lab',
  bark() {
    return 'bark!'
  },
  job: 'guide dog',
}

interface Human {
  name: string
}

interface Employee {
  readonly id: number
  email: string
}

interface Engineer extends Human, Employee {
  level: string
  languages: string[]
}

const pierre: Engineer = {
  name: 'Pierre',
  id: 11231231232,
  email: 'pierre@gmail.com',
  level: 'senior',
  languages: ['JS', 'Python'],
}
