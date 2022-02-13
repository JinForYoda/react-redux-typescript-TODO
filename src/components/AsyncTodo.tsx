import React, { Component } from 'react';
import TodoElement from './TodoElement';
import Button from 'react-bootstrap/Button'
import Loader from './Loader/Loader';

interface ITodoList {
	todoName: string,
	todoDescription: string,
	id: string,
	complete: boolean,
	isAsync: boolean
}
interface MyProps {
	todoList: ITodoList[]
	todoMethods: any
}


interface MyState {
	isFetching: boolean
}

interface IAsyncTodo {
	userId: number,
	id: number,
	title: string,
	completed: boolean,
}

const getTodos = (() => {
	let page = 1
	return async (that: any) => {
		that.setState({
			isFetching: true
		})
		const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10&_page=' + page)
		page++
		that.setState({
			isFetching: false
		})
		const asyncTodos = await response.json()
		asyncTodos.map((todo: IAsyncTodo) => {
			that.props.todoMethods.addTodo({
				todoName: todo.title,
				todoDescription: '',
				id: todo.id.toString(),
				complete: todo.completed,
				isAsync: true
			})
		})
	}
})()

export default class AsyncTodo extends Component<MyProps, MyState>  {
	state = {
		isFetching: false
	}
	getTodos: any

	getAsyncTodos(e: React.MouseEvent<HTMLButtonElement>) {
		getTodos(this)
	}

	render() {
		const asyncTodoList = this.props.todoList.filter(todo => todo.complete === false && todo.isAsync === true)
		return (
			<>
				{asyncTodoList.length
					? <>
						{asyncTodoList.map((todo, idx) => <TodoElement todoMethods={this.props.todoMethods} key={todo.id} todo={todo} idx={idx + 1} />)}
						{this.state.isFetching ? <Loader /> : null}
						< div className='d-flex justify-content-center mb-3'>
							<Button variant="primary" type="button" onClick={(e) => this.getAsyncTodos(e)}>
								Get more TODO's
							</Button>
						</div>
					</>
					: <>
						{this.state.isFetching
							? <Loader />
							: < div className='d-flex justify-content-center'>
								<Button variant="primary" type="button" onClick={(e) => this.getAsyncTodos(e)}>
									Get Async TODO's
								</Button>
							</div>
						}
					</>
				}
			</>
		)
	}
}
