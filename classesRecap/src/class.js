class Player {
  static description = 'Player in our game' // static property
  #score = 0 // Initial value set, # symbol for private
  numLives = 10
  constructor(first, last) {
    // Constructor for dynamic value
    this.first = first
    this.last = last
    console.log('IN CONSTRUCTOR!')
    this.#secret()
  }
  static randomPlayer() {
    return new Player('Andy', 'Pollito')
  }
  get fullName() {
    // getter
    return `${this.first} ${this.last}`
  }
  get score() {
    return this.#score
  }
  set score(newScore) {
    if (newScore < 0) {
      throw new Error('Score must be positive')
    }
    this.#score = newScore
  }
  set fullName(newName) {
    const [first, last] = newName.split(' ')
    this.first = first
    this.last = last
  }
  taunt() {
    console.log('Booyah!')
  }
  loseLife() {
    this.numLives -= 1
  }
  getScore() {
    return this.#score
  }
  updateScore(newScore) {
    this.#score = newScore
  }
  #secret() {
    // Private function
    console.log('Secret!')
  }
}

class AdminPlayer extends Player {
  isAdmin = true
  constructor(first, last, powers) {
    super(first, last)
    this.powers = powers
  }
}

const player1 = new Player('blue', 'steele')
// player1.taunt()
// console.log(player1.first)
// console.log(player1.last)
// console.log(player1)
// console.log(player1.numLives)
// player1.loseLife()
// console.log(player1.numLives)
// player1.updateScore(8)
// console.log(player1.getScore())
// console.log(player1.fullName)
// console.log(player1.score)
// player1.score = 300
// console.log(player1.score)
console.log(player1.fullName)
player1.fullName = 'Manguito Lovebird'
console.log(player1)

console.log(Player.randomPlayer())

// const player2 = new Player('charlie', 'brown')
// player2.taunt()

const admin = new AdminPlayer('Admin', 'Manguito', [
  'Eat',
  'Fly',
  'Chirp',
  'Bite',
])
console.log(admin)
