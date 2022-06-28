import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>,
]

interface Todo1 {
  title: string
  description: string
  // completed: boolean
  // meta: {
  //   author: string
  // }
}

const todo: Readonly<Todo1> = {
  title: 'Hey',
  description: 'foobar',
}

// todo.title = 'Hello' // Error: cannot reassign a readonly property
// todo.description = 'barFoo' // Error: cannot reassign a readonly property
