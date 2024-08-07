import React from 'react'
import Input from '../input/Input'
import Button from '../button/Button'
import * as actions from '@/action'
import Form from '../form/Form'
import { todoProps } from '@/types'
import { FaCheck } from 'react-icons/fa'

const UpdateStatus = ({ todo }: {todo:todoProps}) => {
    return (
        <Form action={actions.changeStatus }>
            <Input name='inputId' value={todo.id} type='hidden'></Input>
            <Button text={<FaCheck />} type='submit' actionButton bgColor={todo.isCompleted ? "bg-green-800" : "bg-blue-500"}></Button>
        </Form >
    )
}

export default UpdateStatus