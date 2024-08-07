import React from 'react'
import Button from '../button/Button'
import Input from '../input/Input'
import Form from '../form/Form'
import * as actions from '@/action'


const AddTodo = () => {
  return (
    <div>
        <Form action={actions.createTodo}>
            <div className='flex gap-4 items-center'>
                <Input name="input" type="text" placeholder='Add Todo...'/>
                <Button  type='submit' text="Add" bgColor='bg-blue-600 m-2'/>
            </div>
        </Form>
    </div>
  )
}

export default AddTodo