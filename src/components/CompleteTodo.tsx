import React from 'react';
import { useAppSelector } from '../hooks';
import TodoElement from './TodoElement';
export default function ActiveTodo() {
	const completeTodoLits = useAppSelector(state => state.todoCreator.completeTodoLits)
	return (
		<>
			{completeTodoLits.length
				? completeTodoLits.map((todo, idx) => <TodoElement key={todo.id} todo={todo} idx={idx + 1} />)
				: < h4 className='d-flex justify-content-center'> No TODO's here yet</h4>
			}
		</>
	)
}
