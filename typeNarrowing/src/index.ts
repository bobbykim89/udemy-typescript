// Using typeof
const triple = (value: number | string) => {
  if (typeof value === 'string') {
    return value.repeat(3)
  }
  return value * 3
}

// Truthinesss guards
const el = document.getElementById('idk')
if (el) {
  el // HTMLElement
} else {
  el // null
}

const printLetters = (word: string | null) => {
  if (word) {
    for (let char of word) {
      console.log(char)
    }
  } else {
    console.log('You did not pass in a word')
  }
}

// Equality Narrowing
const someDemo = (x: string | number, y: string | boolean) => {
  if (x === y) {
    x
    y
  }
}

// Narrowing type with operator
interface Movie {
  title: string
  duration: number
}

interface TVShow {
  title: string
  numEpisodes: number
  episodeDuration: number
}

const getRuntime = (media: Movie | TVShow) => {
  if ('numEpisodes' in media) {
    return media.numEpisodes * media.episodeDuration
  }
  return media.duration
}

// instanceof Narrowing
const printFullData = (date: string | Date) => {
  if (date instanceof Date) {
    console.log(date.toUTCString())
  } else {
    console.log(new Date(date).toUTCString())
  }
}

class User {
  constructor(public username: string) {}
}
class Company {
  constructor(public name: string) {}
}

const printName = (entity: User | Company) => {
  if (entity instanceof User) {
    entity
  } else {
    entity
  }
}

/**Type Predicates
 @TypePredicates typescript allows us to write custom functions that can narrow the type of a value. These functions have a very special return type called a type predicate
 */

interface Cat {
  name: string
  numLives: number
}
interface Dog {
  name: string
  breed: string
}

const isCat = (animal: Cat | Dog): animal is Cat => {
  return (animal as Cat).numLives !== undefined
}

const makeNoise = (animal: Cat | Dog): string => {
  if (isCat(animal)) {
    animal
    return 'Miau'
  } else {
    animal
    return 'Rau'
  }
}

// Discriminated unions
interface Rooster {
  name: string
  weight: number
  age: number
  kind: 'rooster'
}
interface Cow {
  name: string
  weight: number
  age: number
  kind: 'cow'
}
interface Pig {
  name: string
  weight: number
  age: number
  kind: 'pig'
}

interface Sheep {
  name: string
  weight: number
  age: number
  kind: 'sheep'
}

type FarmAnimal = Pig | Rooster | Cow | Sheep

const getFarmAnimalSound = (animal: FarmAnimal) => {
  switch (animal.kind) {
    case 'pig':
      return 'Oink!'
    case 'cow':
      return 'Moo!'
    case 'rooster':
      return 'Cockadoodledoo!'
    case 'sheep':
      return 'Baa!'
    default:
      // We should never make it here, if we handled all cases correctly.
      const _exhaustiveCheck: never = animal
      return _exhaustiveCheck
  }
}

const stevie: Rooster = {
  name: 'Stevie Chicks',
  weight: 2,
  age: 1.5,
  kind: 'rooster',
}

console.log(getFarmAnimalSound(stevie))
