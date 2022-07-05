import axios from 'axios'
import _ from 'lodash'

// Axios
interface User {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      long: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

axios
  .get<User>('https://jsonplaceholder.typicode.com/users/1')
  .then((res) => {
    printUser(res.data)
  })
  .catch((e) => {
    console.log('Error!', e)
  })

const printUser = (user: User) => {
  console.log(user.name)
  console.log(user.email)
  console.log(user.phone)
}

axios
  .get<User[]>('https://jsonplaceholder.typicode.com/users')
  .then((res) => {
    res.data.forEach(printUser)
  })
  .catch((e) => {
    console.log('Error!', e)
  })

// Lodash
_.shuffle
