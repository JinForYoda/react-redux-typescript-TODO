import React from 'react';
import { useAppDispatch } from '../hooks';
import CloseButton from 'react-bootstrap/CloseButton'
import { deleteTodo, switchTodoCompleteStatus } from '../redux/todoCreator';
import Form from 'react-bootstrap/Form'
import { TodoList } from '../redux/todoCreator';
export default function TodoElement({ todo, idx }: { todo: TodoList, idx: number }) {
	const dispatch = useAppDispatch()

	const deleteThisTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
		dispatch(deleteTodo(todo.id))
	}
	const switchCompleteStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(switchTodoCompleteStatus(todo.id))
	}

	return (
		<div className="todoWrapper">
			<Form className="checkBoxWrapper">
				<Form.Check onChange={switchCompleteStatus} checked={todo.complete} type="checkbox" label="" />
			</Form>
			<h5 className='todoNumber'>{idx}. </h5>
			<h5 className='todoName'>{todo.todoName}</h5>
			<h6 className='todoDescription text-muted'>{todo.isAsync === true ? 'async' : todo.todoDescription}</h6>
			<div className="btnWrapper"><CloseButton onClick={deleteThisTodo} className='closeBtn' /></div>
		</div >
	)
}
