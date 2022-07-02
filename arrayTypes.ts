const activeUsers: string[] = []

// Another way of defining array type
const bools: Array<boolean> = []

// Custom array type
type Point = {
  x: number
  y: number
}

const coords: Point[] = []
coords.push({ x: 23, y: 8 })

// Nested array
const board: string[][] = [
  ['X', 'O', 'X'],
  ['X', 'O', 'X'],
  ['X', 'O', 'X'],
]
