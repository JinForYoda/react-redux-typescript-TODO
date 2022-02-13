import React from 'react';
import { useAppSelector } from '../../hooks';
import './loader.css'
export default function Loader() {
	const isDark = useAppSelector(state => state.theme.isDark)
	return < div className='d-flex justify-content-center'><div className={isDark ? "lds-ripple" : "lds-ripple lds-rippleWhite"}><div></div><div></div></div></div>
}
