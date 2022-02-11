import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter basename='/react-redux-typescript-TODO'>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);


reportWebVitals();
