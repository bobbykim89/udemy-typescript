const square = (num: number): number => {
  return num * num
}

const greet = (person: string = 'stranger'): string => {
  return `Hi there, ${person}`
}

const doSomething = (person: string, age: number, isFunny: boolean): void => {}

square(3)
greet('Manguito')
doSomething('Manguito', 1, true)

const rando = (num: number): number | string => {
  if (Math.random() < 0.5) {
    return num.toString()
  }
  return num
}

const colors = ['red', 'orange', 'yellow']

colors.map((color) => {
  return color.toUpperCase()
})

// Never type
const makeError = (msg: string): never => {
  throw new Error(msg)
}

const gameLoop = (): never => {
  while (true) {
    console.log('Game loop running!')
  }
}
