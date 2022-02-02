import { createSlice, PayloadAction } from '@reduxjs/toolkit'


// Define a type for the slice state
interface ThemeState {
	isDark: boolean
}

// Define the initial state using that type
const initialState: ThemeState = {
	isDark: false,
}

export const themeSwitch = createSlice({
	name: 'switcher',
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		switchTheme: (state) => {
			state.isDark
				? state.isDark = false
				: state.isDark = true
		},
	},
})

export const { switchTheme } = themeSwitch.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default themeSwitch.reducer