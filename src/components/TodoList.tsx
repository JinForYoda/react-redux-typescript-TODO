import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'
import { Link, Routes, Route, Navigate } from 'react-router-dom';
import ActiveTodo from './ActiveTodo';
import AsyncTodo from './AsyncTodo';
import CompleteTodo from './CompleteTodo';

interface ITodoList {
	todoName: string,
	todoDescription: string,
	id: string,
	complete: boolean,
	isAsync: boolean
}

interface MyProps {
	todoList: ITodoList[],
	todoMethods: any
	location?: any,
	navigate?: any
}

interface MyState {
	activeNav: boolean,
	completeNav: boolean,
	asyncNav: boolean
}

export default class TodoList extends Component<MyProps, MyState> {
	state = {
		activeNav: false,
		completeNav: false,
		asyncNav: false
	}

	componentDidMount() {
		switch (this.props.location.pathname) {
			case '/active':
				this.setState({
					activeNav: true,
					completeNav: false,
					asyncNav: false
				})
				break
			case '/complete':
				this.setState({
					activeNav: false,
					completeNav: true,
					asyncNav: false
				})
				break
			case '/async':
				this.setState({
					activeNav: false,
					completeNav: false,
					asyncNav: true
				})
				break
		}
	}

	componentDidUpdate(prevProps: MyProps, prevState: MyState) {
		if (prevProps.location !== this.props.location) {
			switch (this.props.location.pathname) {
				case '/active':
					this.setState({
						activeNav: true,
						completeNav: false,
						asyncNav: false
					})
					break
				case '/complete':
					this.setState({
						activeNav: false,
						completeNav: true,
						asyncNav: false
					})
					break
				case '/async':
					this.setState({
						activeNav: false,
						completeNav: false,
						asyncNav: true
					})
					break
			}
		}

	}

	render() {
		const todoList = this.props.todoList
		const activeTodoList = todoList.filter(todo => todo.complete === false && todo.isAsync === false)
		const asyncTodoList = todoList.filter(todo => todo.complete === false && todo.isAsync === true)
		const completeTodoList = todoList.filter(todo => todo.complete === true)

		return (
			<>
				<Nav variant="tabs" defaultActiveKey="/home">
					<Nav.Item>
						<Nav.Link active={this.state.activeNav} eventKey="link-1" as={Link} to='/active'>Active {activeTodoList.length ? `(${activeTodoList.length})` : null}</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link active={this.state.completeNav} eventKey="link-2" as={Link} to='/complete'>Complete {completeTodoList.length ? `(${completeTodoList.length})` : null}</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link active={this.state.asyncNav} eventKey="link-3" as={Link} to='/async'>Async {asyncTodoList.length ? `(${asyncTodoList.length})` : null}</Nav.Link>
					</Nav.Item>
				</Nav>
				<Routes>
					<Route path='/active' element={<ActiveTodo todoList={todoList} todoMethods={this.props.todoMethods} />} />
					<Route path='/complete' element={<CompleteTodo todoList={todoList} todoMethods={this.props.todoMethods} />} />
					<Route path='/async' element={<AsyncTodo todoList={todoList} todoMethods={this.props.todoMethods} />} />
					<Route path='*' element={<Navigate to="/active" />} />
					<Route path="/" element={<Navigate to="/active" />}
					/>
				</Routes>
			</>
		)
	}
}

