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
