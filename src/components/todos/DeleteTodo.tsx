import { todoProps } from '@/types'
import React from 'react'
import Form from '../form/Form'
import Button from '../button/Button'
import Input from '../input/Input'
import { FaTrash } from 'react-icons/fa'
import * as actions from '@/action'

const DeleteTodo = ({ todo }: { todo: todoProps }) => {
  return (
    <Form action={actions.deleteTodo}>
         <Input type="hidden" name="inputId" value={todo.id}></Input>
         <Button actionButton bgColor="bg-red-400" type="submit" text={<FaTrash/>}></Button>
    </Form>
  )
}

export default DeleteTodo