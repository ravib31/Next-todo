"use client";
import React, { useState } from 'react'
import Button from '../button/Button';
import { MdEdit } from 'react-icons/md';
import Form from '../form/Form';
import Input from '../input/Input';
import { todoProps } from '@/types';
import * as actions from '@/action'


const EditTodo = ({ todo }: { todo: todoProps }) => {
  const [updateTodo, setUpdateTodo] = useState(false);
  const handleEdit = () => {
    if(todo.isCompleted){
      return alert("You can't edit completed todo")
    }
    setUpdateTodo(!updateTodo)
  };
  const handleSubmit = () => {
    setUpdateTodo(false)
  }
  // console.log(todo)
  return (
    <div className='flex gap-5 items-center'>
      <Button onClick={handleEdit} text={<MdEdit />} actionButton />
      {updateTodo ? (
        <Form action={actions.editTodo} onSubmit={handleSubmit}>
          <Input name="inputId" value={todo.id} type='hidden'></Input>
          <div className='flex justify-center'>
            <Input name="newTitle" type="text" placeholder='Edit Todo...'></Input>
            <Button type="submit" text="Update"></Button>
          </div>
        </Form>

      ) : null}
    </div>
  )
}

export default EditTodo;