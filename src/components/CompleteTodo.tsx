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
	todoList: ITodoList[],
	todoMethods: any
}

interface MyState {

}


export default class CompleteTodo extends Component<MyProps, MyState> {
	render() {
		const completeTodoList = this.props.todoList.filter(todo => todo.complete === true)
		const syncCompleteTodoList = completeTodoList.filter(todo => todo.isAsync === false)
		const asyncCompleteTodoList = completeTodoList.filter(todo => todo.isAsync === true)
		return (
			<>
				{completeTodoList.length
					? <>
						< h5 className='d-flex justify-content-center'> Sync TODO's</h5>
						{
							syncCompleteTodoList.length
								? syncCompleteTodoList.map((todo, idx) => <TodoElement todoMethods={this.props.todoMethods} key={todo.id} todo={todo} idx={idx + 1} />)
								: < h6 className='d-flex justify-content-center font-italic'> No sync TODO's yet</h6>
						}
						<div className='line lineWhite'></div>
						< h5 className='d-flex justify-content-center'> Async TODO's</h5>
						{
							asyncCompleteTodoList.length
								? asyncCompleteTodoList.map((todo, idx) => <TodoElement todoMethods={this.props.todoMethods} key={todo.id} todo={todo} idx={idx + 1} />)
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
}
