import React, { useEffect, useState } from 'react';

import Nav from 'react-bootstrap/Nav'
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import ActiveTodo from './ActiveTodo';
import CompleteTodo from './CompleteTodo';


export default function TodoList() {

	const [activeNav, setActiveNav] = useState(false)
	const [completeNav, setCompleteNav] = useState(false)
	const location = useLocation()
	useEffect(() => {
		switch (location.pathname) {
			case '/active':
				setActiveNav(true)
				setCompleteNav(false)
				break
			case '/complete':
				setActiveNav(false)
				setCompleteNav(true)
				break

		}
	}, [location])

	return (
		<>
			<Nav variant="tabs" defaultActiveKey="/home">
				<Nav.Item>
					<Nav.Link active={activeNav} eventKey="link-1" as={Link} to='/active'>Active</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link active={completeNav} eventKey="link-2" as={Link} to='/complete'>Complete</Nav.Link>
				</Nav.Item>
			</Nav>
			<Routes>
				<Route path='/active' element={<ActiveTodo />} />
				<Route path='/complete' element={<CompleteTodo />} />
				<Route path='*' element={<ActiveTodo />} />

			</Routes>
		</>

	)
}
