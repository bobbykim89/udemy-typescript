import type { Person } from './types'

export const add = (x: number, y: number) => {
  return x + y
}

export const sample = <T>(arr: T[]): T => {
  const idx = Math.floor(Math.random() * arr.length)
  return arr[idx]
}

export default class User implements Person {
  constructor(public username: string, public email: string) {}
  logout() {
    console.log(`${this.username} logs out!`)
  }
}
