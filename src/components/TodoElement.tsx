import React, { Component } from 'react';
import CloseButton from 'react-bootstrap/CloseButton'
import Form from 'react-bootstrap/Form'

interface ITodoList {
	todoName: string,
	todoDescription: string,
	id: string,
	complete: boolean,
}

interface MyProps {
	todo: ITodoList,
	idx: number,
	todoMethods: any
}

interface MyState {

}


export default class TodoElement extends Component<MyProps, MyState> {
	render() {
		return (
			<div className="todoWrapper">
				<Form className="checkBoxWrapper">
					<Form.Check onChange={(e) => this.props.todoMethods.switchCompleteStatus(e, this.props.todo.id)} checked={this.props.todo.complete} type="checkbox" label="" />
				</Form>
				<h5 className='todoNumber'>{this.props.idx}. </h5>
				<h5 className='todoName'>{this.props.todo.todoName}</h5>
				<h6 className='todoDescription text-muted'>{this.props.todo.todoDescription}</h6>
				<div className="btnWrapper"><CloseButton onClick={(e) => this.props.todoMethods.deleteThisTodo(e, this.props.todo.id)} className='closeBtn' /></div>
			</div >
		)
	}
}
