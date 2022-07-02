const bird = {
  name: 'Manguito',
  breed: 'Peachfaced Lovebird',
  age: 1,
}

const printName = (person: { first: string; last: string }): void => {
  console.log(`${person.first} ${person.last}`)
}

printName({ first: 'Manguito', last: 'Kim' })

let coordinate: { x: number; y: number } = { x: 34, y: 2 }

const randomCoordinate = (): { x: number; y: number } => {
  return { x: Math.random(), y: Math.random() }
}

// Type alias
type Point = {
  x: number
  y: number
}

let coordinateTwo: Point = { x: 34, y: 2 }

const doublePoint = (point: Point): Point => {
  return { x: point.x * 2, y: point.y * 2 }
}

// Nested Objects
type Song = {
  title: string
  artist: string
  numStreams: number
  credits: {
    producer: string
    writer: string
  }
}
const calculatePayout = (song: Song): number => {
  return song.numStreams * 0.0033
}

const printSong = (song: Song): void => {
  console.log(`${song.title} - ${song.artist}`)
}

const mySong: Song = {
  title: 'Manguito Chirping',
  artist: 'Manguito Lovebird',
  numStreams: 1239213921313,
  credits: {
    producer: 'Some bird',
    writer: 'Himself',
  },
}

const earnings = calculatePayout(mySong)
console.log(earnings)

printSong(mySong)

// Optional properties
type PointTwo = {
  x: number
  y: number
  z?: number // ? to mark that it is not required
}

const myPoint: PointTwo = { x: 1, y: 3 }

// Readonly Keyword
type User = {
  readonly id: number
  username: string
}

const user: User = {
  id: 123123,
  username: 'Catnip',
}

console.log(user.id)

// Intersection types - add two different types
type Circle = {
  radius: number
}

type Colorful = {
  color: string
}

type ColorfulCircle = Circle & Colorful

const happyFace: ColorfulCircle = {
  radius: 4,
  color: 'yellow',
}

type Cat = {
  numLives: number
}

type Dog = {
  breed: string
}

type CatDog = Cat &
  Dog & {
    age: number
  }

const christy: CatDog = {
  numLives: 7,
  breed: 'Husky',
  age: 9,
}
