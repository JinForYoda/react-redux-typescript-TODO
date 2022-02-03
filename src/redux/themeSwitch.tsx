import { createSlice } from '@reduxjs/toolkit'

interface ThemeState {
	isDark: boolean
}

const initialState: ThemeState = {
	isDark: false,
}

export const themeSwitch = createSlice({
	name: 'switcher',
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
export default themeSwitch.reducer