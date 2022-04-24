import { NavLink } from 'react-router-dom'

import './Login.scss'

export const Login = (): JSX.Element => (
	<div className='login-widget'>
		<input type='email' placeholder='your@email.com' />
		<input type='password' placeholder='password' />
		<NavLink to='/smartcalc/calc'>Login</NavLink>
	</div>
)
