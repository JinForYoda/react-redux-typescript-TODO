import { configureStore } from '@reduxjs/toolkit'
import themeSwitch from './redux/themeSwitch'
import todoCreator from './redux/todoCreator'

export const store = configureStore({
	reducer: {
		theme: themeSwitch,
		todoCreator: todoCreator,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch