import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import TodoElement from './TodoElement';
import Button from 'react-bootstrap/Button'
import { getAsyncTodoList } from '../redux/todoCreator'
import Loader from './Loader/Loader';
export default function AsyncTodo() {
	const dispatch = useAppDispatch()

	const asyncTodoList = useAppSelector(store => store.todoCreator.todoList).filter(todo => todo.isAsync === true && todo.complete === false)
	const isFetching = useAppSelector(store => store.todoCreator.isFetching)

	const getAsyncTodos = () => {
		dispatch(getAsyncTodoList())
	}
	return (
		<>
			{asyncTodoList.length
				? <>
					{asyncTodoList.map((todo, idx) => <TodoElement key={todo.id} todo={todo} idx={idx + 1} />)}
					{isFetching ? <Loader /> : null}
					< div className='d-flex justify-content-center mb-3'>
						<Button variant="primary" type="button" onClick={getAsyncTodos}>
							Get more TODO's
						</Button>
					</div>
				</>
				: <>
					{isFetching
						? <Loader />
						: < div className='d-flex justify-content-center'>
							<Button variant="primary" type="button" onClick={getAsyncTodos}>
								Get Async TODO's
							</Button>
						</div>
					}
				</>
			}
		</>
	)
}
