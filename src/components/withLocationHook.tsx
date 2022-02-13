import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


export default function WithLocationHook(props: any) {
	const location = useLocation()
	const navigate = useNavigate()
	const childrenWithProps = React.Children.map(props.children, child => {
		return React.cloneElement(child, {
			location,
			navigate
		})
	})
	return (
		<>
			{childrenWithProps}
		</>
	)
}
