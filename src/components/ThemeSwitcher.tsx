import React, { Component } from 'react';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

interface MyProps {

}

interface MyState {
	isDark: boolean
}

export default class ThemeSwitcher extends Component<MyProps, MyState> {
	state = {
		isDark: true
	}

	switchTheme() {
		this.setState(state => {
			return {
				isDark: !state.isDark
			}
		})
	}

	componentDidMount() {
		if (this.state.isDark === true) {
			document.body.classList.toggle('darkBody')
		}
	}

	componentDidUpdate(prevProps: MyProps, prevState: MyState) {
		if (prevState.isDark !== this.state.isDark) {
			document.body.classList.toggle('darkBody')
		}
	}
	render() {
		return <div className='themeWrapper'>
			<BootstrapSwitchButton onChange={() => this.switchTheme()} checked={this.state.isDark} onstyle="dark" />
		</div>
	}
}
