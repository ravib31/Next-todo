import React from 'react'
import Button from '../button/Button'
import Input from '../input/Input'
import Form from '../form/Form'


const AddTodo = () => {
  return (
    <div>
        <Form>
            <div className='flex gap-2'>
                <Input name="input" type="text" placeholder='Add Todo...'/>
                <Button type='submit' text="Add" bgColor='bg-blue-600'/>
            </div>
        </Form>
    </div>
  )
}

export default AddTodo