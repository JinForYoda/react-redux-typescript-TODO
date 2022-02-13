import React, { Component } from 'react';
import TodoElement from './TodoElement';

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

}

export default class ActiveTodo extends Component<MyProps, MyState> {
	render() {
		const activeTodoList = this.props.todoList.filter(todo => todo.complete === false && todo.isAsync === false)
		return (
			<>
				{activeTodoList.length
					? activeTodoList.map((todo, idx) => <TodoElement todoMethods={this.props.todoMethods} key={todo.id} todo={todo} idx={idx + 1} />)
					: < h4 className='d-flex justify-content-center'> No TODO's here yet</h4>
				}
			</>
		)
	}
}
