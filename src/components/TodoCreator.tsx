import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useAppDispatch } from '../hooks';
import { addTodo } from '../redux/todoCreator';
import uniqid from 'uniqid';
import { useNavigate } from 'react-router-dom';

export default function TodoCreator() {
	const dispatch = useAppDispatch()

	const [descriptionOn, setDescriptionOn] = useState(false)
	const [todoName, setTodoName] = useState('')
	const [todoDescription, setTodoDescription] = useState('')

	const navigate = useNavigate()

	const addTodoToList = (e: React.SyntheticEvent) => {
		e.preventDefault()

		dispatch(addTodo({
			todoName,
			todoDescription,
			id: uniqid(),
			complete: false,
			isAsync: false
		}))

		setTodoName('')
		setTodoDescription('')

		descriptionOn && setDescriptionOn(!descriptionOn)

		navigate('/active')
	}

	const changeState = (e: React.ChangeEvent<HTMLInputElement>, setState: React.Dispatch<React.SetStateAction<string>>) => {
		setState(e.target.value)
	}

	return (
		<Form onSubmit={addTodoToList} className='todoCreatorWrapper'>
			<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
				<Form.Label><h5>TODO Name</h5></Form.Label>
				<Form.Control onChange={(e) => changeState(e as any, setTodoName)} value={todoName} type="text" placeholder="Place for your TODO" />
				<Form.Text className="text-muted">
					Put here any name you want to.
				</Form.Text>
			</Form.Group>
			<Form.Group className="mb-3" controlId="formBasicCheckbox">
				<Form.Check type="checkbox" checked={descriptionOn} onChange={() => setDescriptionOn(!descriptionOn)} label="Use description" />
			</Form.Group>
			{
				descriptionOn &&
				<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
					<Form.Label><h6>Description area</h6></Form.Label>
					<Form.Control onChange={(e) => changeState(e as any, setTodoDescription)} value={todoDescription} as="textarea" rows={1} />
				</Form.Group>
			}

			<Button variant="primary" type="submit">
				Create
			</Button>
		</Form>
	)
}
