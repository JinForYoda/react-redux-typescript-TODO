import React from 'react';
import { useAppSelector } from '../hooks';
import TodoElement from './TodoElement';
export default function ActiveTodo() {
	const completeTodoLits = useAppSelector(state => state.todoCreator.todoList).filter(todo => todo.complete === true)
	const syncCompleteTodoList = completeTodoLits.filter(todo => todo.isAsync === false)
	const asyncCompleteTodoList = completeTodoLits.filter(todo => todo.isAsync === true)
	const isDark = useAppSelector(state => state.theme.isDark)
	return (
		<>
			{completeTodoLits.length
				? <>
					< h5 className='d-flex justify-content-center'> Sync TODO's</h5>
					{
						syncCompleteTodoList.length
							? syncCompleteTodoList.map((todo, idx) => <TodoElement key={todo.id} todo={todo} idx={idx + 1} />)
							: < h6 className='d-flex justify-content-center font-italic'> No sync TODO's yet</h6>
					}
					<div className={!isDark ? 'line lineBlack' : 'line'}></div>
					< h5 className='d-flex justify-content-center'> Async TODO's</h5>
					{
						asyncCompleteTodoList.length
							? asyncCompleteTodoList.map((todo, idx) => <TodoElement key={todo.id} todo={todo} idx={idx + 1} />)
							: < h6 className='d-flex justify-content-center font-italic'> No async TODO's yet</h6>
					}
				</>
				: <>
					< h4 className='d-flex justify-content-center'> No completed TODO's here yet</h4>
					< h6 className='d-flex justify-content-center font-italic'> C`mon, you can do it. I believe in YOU!</h6>
				</>
			}
		</>
	)
}
