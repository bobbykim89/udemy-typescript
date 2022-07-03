// Enables multiple types
let age: number | string = 21
age = 23
age = '24'

type Point = {
  x: number
  y: number
}

type Loc = {
  lat: number
  long: number
}

let coordinates: Point | Loc = {
  x: 1,
  y: 34,
}

coordinates = { lat: 321.213, long: 23.334 }

// Union types with functions
const printAge = (age: number | string): void => {
  console.log(`You are ${age} years old`)
}

const calculateTax = (price: number | string, tax: number) => {
  if (typeof price === 'string') {
    price = parseFloat(price.replace('$', ''))
  }
  return price * tax
}

// Union types and arrays
const stuff: (number | string)[] = [1, 2, '3']

const coords: (Point | Loc)[] = [
  { x: 1, y: 34 },
  { lat: 321.213, long: 23.334 },
]

// Literal Types
let zero: 0 = 0
let mood: 'Happy' | 'Sad' = 'Happy'
mood = 'Sad'

type DayOfWeek =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday'

let today: DayOfWeek = 'Monday'
today = 'Sunday'
