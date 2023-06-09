import React from 'react'
import Link from 'next/link'

import { Todo } from '../../typings'

const fetchTodos = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/')
    const todos: Todo[] = await res.json()
    return todos;
}


async function TodosList() {
    const todos = await fetchTodos()
    // const trimmedTodos = todos.splice(0, 10)

  return <>
    {todos.map((todo) => (
        <p key={todo.id}>
            <Link href={`/todos/${todo.id}`}>Todo: {todo.id}</Link>
        </p>
    ))}
  </>
}

export default TodosList