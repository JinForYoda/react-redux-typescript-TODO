import React from 'react';
import { useAppSelector } from '../hooks';
import TodoElement from './TodoElement';
export default function ActiveTodo() {
	const activeTodoList = useAppSelector(state => state.todoCreator.todoList).filter(todo => todo.complete === false && todo.isAsync === false)
	return (
		<>
			{activeTodoList.length
				? activeTodoList.map((todo, idx) => <TodoElement key={todo.id} todo={todo} idx={idx + 1} />)
				: < h4 className='d-flex justify-content-center'> No TODO's here yet</h4>
			}
		</>
	)
}
