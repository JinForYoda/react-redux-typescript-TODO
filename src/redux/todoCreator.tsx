import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface TodoCreator {
	descriptionOn: boolean,
	todoList: Array<TodoList>,
	completeTodoLits: Array<TodoList>,
}

interface TodoList {
	todoName: string,
	todoDescription: string,
	id: string,
	complete: boolean
}

const initialState: TodoCreator = {
	descriptionOn: false,
	todoList: [],
	completeTodoLits: []
}

export const todoCreator = createSlice({
	name: 'todoCreactor',
	initialState,
	reducers: {
		switchDescription: (state) => {
			state.descriptionOn
				? state.descriptionOn = false
				: state.descriptionOn = true
		},
		addTodo: (state, action: PayloadAction<TodoList>) => {
			state.todoList.push(action.payload)
		},
		deleteTodo: (state, action: PayloadAction<TodoList>) => {
			action.payload.complete
				? state.completeTodoLits = state.completeTodoLits.filter(el => el.id !== action.payload.id)
				: state.todoList = state.todoList.filter(el => el.id !== action.payload.id)

		},
		switchTodoCompleteStatus: (state, action: PayloadAction<TodoList>) => {
			if (state.completeTodoLits.find(el => el.id === action.payload.id)) {
				let idx = state.completeTodoLits.findIndex(el => el.id === action.payload.id)
				state.completeTodoLits[idx].complete
					? state.completeTodoLits[idx].complete = false
					: state.completeTodoLits[idx].complete = true

				state.todoList.push(state.completeTodoLits.splice(idx, 1)[0])
			}
			else {
				let idx = state.todoList.findIndex(el => el.id === action.payload.id)
				state.todoList[idx].complete
					? state.todoList[idx].complete = false
					: state.todoList[idx].complete = true
				state.completeTodoLits.push(state.todoList.splice(idx, 1)[0])
			}

		}
	},
})

export const { switchDescription, addTodo, deleteTodo, switchTodoCompleteStatus } = todoCreator.actions
export default todoCreator.reducer