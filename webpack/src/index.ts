import Dog from './Dog'
import { add, multiply, divide } from './utils'
import ShelterDog from './ShelterDog'

const elton = new Dog('Elton', 'Aussie', 0.5)
elton.bark()

console.log(add(4, 5))
console.log(multiply(4, 5))
console.log(divide(4, 5))

const buffy = new ShelterDog(
  'Buffy',
  'Golden Retriever',
  5,
  'Desert Springs Shelter'
)
buffy.bark()
