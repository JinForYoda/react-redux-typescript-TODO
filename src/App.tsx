import React, { useEffect } from 'react';
import './styles/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import { useAppSelector } from './hooks'
import ThemeSwitcher from './components/ThemeSwitcher';
import TodoCreator from './components/TodoCreator';
import TodoList from './components/TodoList';

function App() {
	const isDark = useAppSelector(state => state.theme.isDark)
	useEffect(() => {
		document.body.classList.toggle('darkBody')
	}, [isDark])
	return (
		<Container className='d-flex flex-column gap-3'>

			<ThemeSwitcher />

			<h1 className='d-flex justify-content-center'>T O D O</h1>

			<TodoCreator />

			<TodoList />

		</Container>

	);
}

export default App;
