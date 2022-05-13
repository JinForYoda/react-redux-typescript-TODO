import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TodoCreator {
  todoList: Array<TodoList>;
  isFetching: boolean;
}

export interface TodoList {
  todoName: string;
  todoDescription: string;
  id: string;
  complete: boolean;
  isAsync: boolean;
}

interface AsyncTodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const initialState: TodoCreator = {
  todoList: [],
  isFetching: false,
};

export const 
getAsyncTodoList = (function () {
  let page = 1;
  return createAsyncThunk("todoCreator/getAsyncTodoList", async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=10&_page=" + page
    );
    page++;
    return response.json();
  });
})();

export const todoCreator = createSlice({
  name: "todoCreator",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoList>) => {
      state.todoList.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todoList = state.todoList.filter((el) => el.id !== action.payload);
    },
    switchTodoCompleteStatus: (state, action: PayloadAction<string>) => {
      const todo = state.todoList.find((todo) => todo.id === action.payload);
      todo!.complete = !todo?.complete;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAsyncTodoList.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(
        getAsyncTodoList.fulfilled,
        (state, action: PayloadAction<AsyncTodo[]>) => {
          state.isFetching = false;
          action.payload.forEach((todo) => {
            state.todoList.push({
              todoName: todo.title,
              todoDescription: "",
              id: todo.id.toString(),
              complete: todo.completed,
              isAsync: true,
            });
          });
        }
      );
  },
});

export const { addTodo, deleteTodo, switchTodoCompleteStatus } =
  todoCreator.actions;
export default todoCreator.reducer;
