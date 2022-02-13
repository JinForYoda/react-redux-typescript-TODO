import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import uniqid from 'uniqid';

interface ITodoList {
	todoName: string,
	todoDescription: string,
	id: string,
	complete: boolean,
	isAsync: boolean
}

interface MyProps {
	addTodo: (arg0: ITodoList) => void,
	location?: any,
	navigate?: any
}

interface MyState {
	descriptionOn: boolean,
	todoName: string,
	todoDescription: string
}

export default class TodoCreator extends Component<MyProps, MyState> {
	state = {
		descriptionOn: false,
		todoName: '',
		todoDescription: ''
	}
	addTodoToList = (e: React.SyntheticEvent) => {
		e.preventDefault()
		this.props.addTodo({
			todoName: this.state.todoName,
			todoDescription: this.state.todoDescription,
			id: uniqid(),
			complete: false,
			isAsync: false
		})
		this.setState({
			descriptionOn: false,
			todoName: '',
			todoDescription: ''
		})
		this.props.navigate('/active')
	}

	changeTodoName(e: React.ChangeEvent<HTMLInputElement>) {
		this.setState({
			todoName: e.target.value
		})
	}
	changeTodoDescription(e: React.ChangeEvent<HTMLInputElement>) {
		this.setState({
			todoDescription: e.target.value
		})
	}

	switchDescriptionOn(e: React.ChangeEvent<HTMLInputElement>) {
		this.setState({
			descriptionOn: !this.state.descriptionOn,
			todoDescription: ''
		})
	}
	render() {
		return (
			<Form onSubmit={(e) => this.addTodoToList(e)} className='todoCreatorWrapper'>
				<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
					<Form.Label><h5>TODO Name</h5></Form.Label>
					<Form.Control onChange={(e) => this.changeTodoName(e as any)} value={this.state.todoName} type="text" placeholder="Place for your TODO" />
					<Form.Text className="text-muted">
						Put here any name you want to.
					</Form.Text>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check type="checkbox" checked={this.state.descriptionOn} onChange={(e) => this.switchDescriptionOn(e)} label="Use description" />
				</Form.Group>
				{
					this.state.descriptionOn &&
					<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
						<Form.Label><h6>Description area</h6></Form.Label>
						<Form.Control onChange={(e) => this.changeTodoDescription(e as any)} value={this.state.todoDescription} as="textarea" rows={1} />
					</Form.Group>
				}
				<Button variant="primary" type="submit">
					Create
				</Button>
			</Form>
		)
	}
}

