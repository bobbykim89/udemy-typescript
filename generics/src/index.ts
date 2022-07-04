const nums: Array<number> = []
const colors: Array<string> = []

const inputEl = document.querySelector<HTMLInputElement>('#username')!
console.dir(inputEl)
inputEl.value = 'Hacked!'

const btn = document.querySelector<HTMLButtonElement>('.btn')!

const numberIdentity = (item: number): number => {
  return item
}

const stringIdentity = (item: string): string => {
  return item
}

interface Cat {
  name: string
  age: number
}
const identity = <Type>(item: Type): Type => {
  return item
}

identity<number>(1)
identity<Cat>({ name: 'Miau', age: 1 })

const getRandomElement = <T>(list: T[]): T => {
  const randIdx = Math.floor(Math.random() * list.length)
  return list[randIdx]
}

const someFunction = getRandomElement<string>(['a', 'b', 'c'])
console.log(someFunction)

getRandomElement(['a', 'b', 'c'])

// Generics with multiple type
const merge = <T extends object, U extends object>(object1: T, object2: U) => {
  return {
    ...object1,
    ...object2,
  }
}

const comboObj = merge({ name: 'colt' }, { pets: ['blue', 'elton'] })

// Adding type constraints
const merge2 = <T extends object, U extends object>(object1: T, object2: U) => {
  return {
    ...object1,
    ...object2,
  }
}

// Applying interface in type constraints
interface Lengthy {
  length: number
}

const printDoubleLength = <T extends Lengthy>(thing: T): number => {
  return thing.length * 2
}

// Default type parameters
const makeEmptyArray = <T = number>(): T[] => {
  return []
}

const strings = makeEmptyArray()
makeEmptyArray<boolean>() // Default only comes to play only when you don't specify that.

// Generic classes
interface Song {
  title: string
  artist: string
}
interface Video {
  title: string
  creator: string
  resolution: string
}

class PlayList<T> {
  public queue: T[] = []
  add(el: T) {
    this.queue.push(el)
  }
}

const song = new PlayList<Song>()
const videos = new PlayList<Video>()
