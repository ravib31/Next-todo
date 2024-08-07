import { todoProps } from '@/types'
import React from 'react'

import UpdateStatus from './UpdateStatus'
import EditTodo from './EditTodo'
import DeleteTodo from './DeleteTodo'
import { text } from 'stream/consumers'

const Todo = ({ todo }: { todo: todoProps }) => {
  const todoStyle={
    textDecoration: todo.isCompleted ? 'line-through' : 'none',
    opacity:todo.isCompleted ? '0.5' : '1'
  }
  return (
    <div style={todoStyle} className='w-10/12 mx-auto flex items-center justify-between bg-slate-900 py-4 px-20 rounded-2xl'>
      <UpdateStatus todo={todo} />
      <span className='text-center font-bold uppercase grow'>
        {todo.title}
      </span>
      <div className='flex items-center mx-2'>
        <EditTodo todo={todo} />
      </div>
      <div className='flex items-center mx-2'>
        <DeleteTodo todo={todo} />
      </div>
      {/* <DeleteTodo></DeleteTodo> */}
    </div>
  )
}

export default Todo