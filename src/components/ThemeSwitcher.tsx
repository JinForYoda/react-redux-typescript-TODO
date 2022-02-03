import React from 'react';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import { useAppSelector, useAppDispatch } from '../hooks'
import { switchTheme } from '../redux/themeSwitch'

export default function ThemeSwitcher() {
	const isDark = useAppSelector(state => state.theme.isDark)
	const dispatch = useAppDispatch()
	return <div className='themeWrapper'>
		<BootstrapSwitchButton onChange={() => dispatch(switchTheme())} checked={!isDark} onstyle="dark" />
	</div>
}
