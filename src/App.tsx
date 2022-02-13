import React, { Component } from 'react';
import './styles/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import ThemeSwitcher from './components/ThemeSwitcher';
import TodoCreator from './components/TodoCreator';
import TodoList from './components/TodoList';
import WithLocationHook from './components/withLocationHook';

interface MyProps {

}

interface MyState {
	todoList: ITodoList[]
}

interface ITodoList {
	todoName: string,
	todoDescription: string,
	id: string,
	complete: boolean,
	isAsync: boolean
}

export default class App extends Component<MyProps, MyState> {
	state = {
		todoList: []
	}

	deleteThisTodo = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
		this.setState(state => {
			return {
				todoList: state.todoList.filter(el => el.id !== id)
			}
		})
	}

	switchCompleteStatus = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
		this.setState(state => {
			const todo: ITodoList = state.todoList.find(el => el.id === id)!
			todo.complete = !todo.complete
			return state
		})
	}

	addTodo = (newTodo: ITodoList) => {
		this.setState(state => {
			return {
				todoList: [...state.todoList, newTodo]
			}
		})
	}

	render() {
		return (
			<Container className='d-flex flex-column gap-3'>
				<ThemeSwitcher />
				<h1 className='d-flex justify-content-center'>T O D O</h1>
				<WithLocationHook>
					<TodoCreator addTodo={this.addTodo} />
					<TodoList todoList={this.state.todoList} todoMethods={{ deleteThisTodo: this.deleteThisTodo, switchCompleteStatus: this.switchCompleteStatus, addTodo: this.addTodo }} />
				</WithLocationHook>
			</Container>
		)
	}
}
