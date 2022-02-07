import React, { useEffect, useState } from 'react';

import Nav from 'react-bootstrap/Nav'
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import { useAppSelector } from '../hooks';
import ActiveTodo from './ActiveTodo';
import AsyncTodo from './AsyncTodo';
import CompleteTodo from './CompleteTodo';


export default function TodoList() {
	const todoList = useAppSelector(state => state.todoCreator.todoList)
	const activeTodoList = todoList.filter(todo => todo.complete === false && todo.isAsync === false)
	const asyncTodoList = todoList.filter(todo => todo.complete === false && todo.isAsync === true)
	const completeTodoList = todoList.filter(todo => todo.complete === true)

	const [activeNav, setActiveNav] = useState(false)
	const [completeNav, setCompleteNav] = useState(false)
	const [asyncNav, setAsyncNav] = useState(false)

	const location = useLocation()

	useEffect(() => {
		switch (location.pathname) {
			case '/active':
				setActiveNav(true)
				setCompleteNav(false)
				setAsyncNav(false)
				break
			case '/complete':
				setActiveNav(false)
				setCompleteNav(true)
				setAsyncNav(false)
				break
			case '/async':
				setActiveNav(false)
				setCompleteNav(false)
				setAsyncNav(true)
				break

		}
	}, [location])

	return (
		<>
			<Nav variant="tabs" defaultActiveKey="/home">
				<Nav.Item>
					<Nav.Link active={activeNav} eventKey="link-1" as={Link} to='/active'>Active {activeTodoList.length ? `(${activeTodoList.length})` : null}</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link active={completeNav} eventKey="link-2" as={Link} to='/complete'>Complete {completeTodoList.length ? `(${completeTodoList.length})` : null}</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link active={asyncNav} eventKey="link-3" as={Link} to='/async'>Async {asyncTodoList.length ? `(${asyncTodoList.length})` : null}</Nav.Link>
				</Nav.Item>
			</Nav>
			<Routes>
				<Route path='/active' element={<ActiveTodo />} />
				<Route path='/complete' element={<CompleteTodo />} />
				<Route path='/async' element={<AsyncTodo />} />
				<Route path='*' element={<ActiveTodo />} />

			</Routes>
		</>

	)
}
