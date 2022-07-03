interface Todo {
  text: string
  completed: boolean
}

const btn = document.getElementById('btn')! as HTMLButtonElement // Option 1, add ! at the end of line to tell it is not null (non-null assertion operator)
const input = document.getElementById('todoinput')! as HTMLInputElement
// console.log(btn)
const form = document.querySelector('form')!
const list = document.getElementById('todolist')!

const readTodos = (): Todo[] => {
  const todosJSON = localStorage.getItem('todos')
  if (todosJSON === null) {
    return []
  }
  return JSON.parse(todosJSON)
}

const todos: Todo[] = readTodos()

// btn?.addEventListener('click', () => {
//   // Option2, run conditionally if btn exists
//   alert('CLICKED!')
// })

// Type assertions
// const mystery: unknown = 'Hello World!!!'

// const numChars = (mystery as string).length

// btn.addEventListener('click', () => {
//   alert(input.value)
//   input.value = ''
// })

const saveTodos = () => {
  localStorage.setItem('todos', JSON.stringify(todos))
}

const handleSubmit = (e: SubmitEvent) => {
  e.preventDefault()
  const newTodo: Todo = {
    text: input.value,
    completed: false,
  }
  createTodo(newTodo)
  todos.push(newTodo)

  saveTodos()
  input.value = ''
}

const createTodo = (todo: Todo) => {
  const newLi = document.createElement('li')
  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.checked = todo.completed
  checkbox.addEventListener('change', () => {
    todo.completed = checkbox.checked
    saveTodos()
  })
  newLi.append(todo.text)
  newLi.append(checkbox)
  list.append(newLi)
}

todos.forEach(createTodo)

form.addEventListener('submit', handleSubmit)
