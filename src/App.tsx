import React, { useEffect } from 'react';
import './styles/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import { useAppSelector, useAppDispatch } from './hooks'
import { switchTheme } from './redux/themeSwitch'

function App() {
	const isDark = useAppSelector(state => state.theme.isDark)
	const dispatch = useAppDispatch()
	useEffect(() => {
		console.log(isDark)
	}, [isDark])

	return (
		<div className={isDark ? 'container containerDark' : 'container'}>
			<BootstrapSwitchButton onChange={() => dispatch(switchTheme())} checked={isDark} onstyle="dark" />
			<h1 className='d-flex justify-content-center'>T O D O</h1>
			<Button>CLICK</Button>
		</div>

	);
}

export default App;
