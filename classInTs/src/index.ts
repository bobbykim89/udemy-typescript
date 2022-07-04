class Player {
  public readonly first: string
  public last: string
  protected _score: number = 0

  constructor(first: string, last: string) {
    this.first = first
    this.last = last
  }

  private secretMethod(): void {
    console.log('Secret Method')
  }

  get fullName(): string {
    return `${this.first} ${this.last}`
  }
  get score(): number {
    return this._score
  }

  set score(newScore: number) {
    if (newScore < 0) {
      throw new Error('Score cannot be negative!')
    }
    this._score = newScore
  }
}

class SuperPlayer extends Player {
  public isAdmin: boolean = true
  maxScore() {
    this._score = 999999
  }
}

interface Colorful {
  color: string
}

interface Printable {
  print(): void
}

class Bike implements Colorful {
  constructor(public color: string) {}
}

class Jacket implements Colorful, Printable {
  constructor(public brand: string, public color: string) {}
  print() {
    console.log(`${this.color} ${this.brand} jacket`)
  }
}

const elton = new Player('Elton', 'Steele')

elton.score = 100
console.log(elton.score)

const bike1 = new Bike('red')
const jacket1 = new Jacket('Prada', 'black')
jacket1.print()

abstract class Employee {
  constructor(public first: string, public last: string) {}
  abstract getPay(): number
  greet() {
    console.log('Hello!')
  }
}

class FullTimeEmployee extends Employee {
  constructor(first: string, last: string, private salary: number) {
    super(first, last)
  }
  getPay(): number {
    return this.salary
  }
}

class PartTimeEmployee extends Employee {
  constructor(
    first: string,
    last: string,
    private hourlyRate: number,
    private hoursWorked: number
  ) {
    super(first, last)
  }
  getPay(): number {
    return this.hourlyRate * this.hoursWorked
  }
}

const betty = new FullTimeEmployee('Betty', 'White', 95000)
console.log(betty.getPay())
console.log(betty.greet())

const bill = new PartTimeEmployee('Bill', 'Washington', 24, 1100)
console.log(bill.getPay())
