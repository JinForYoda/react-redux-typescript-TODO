import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
	<BrowserRouter basename='/react-redux-typescript-TODO'>
		<App />
	</BrowserRouter>,
	document.getElementById('root')
);


reportWebVitals();
