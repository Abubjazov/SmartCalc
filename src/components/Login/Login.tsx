import { useState } from 'react'
import { useActions } from '../../hooks/useActions'

import bcrypt from 'bcryptjs'

import './Login.scss'

export const Login = (): JSX.Element => {
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	const { fetchToken } = useActions()

	const loginN = () => {
		fetchToken({
			email,
			password: bcrypt.hashSync(password, '$2a$10$9k5n.PAjQUFjv08.OlWN0e'),
		})
	}

	const changeHandler = (value: string) => {
		setEmail(value)
	}

	const changeHandlerPwd = (value: string) => {
		setPassword(value)
	}

	return (
		<div className='login-widget'>
			<input
				type='email'
				placeholder='your@email.com'
				onChange={e => changeHandler(e.target.value)}
				value={email}
			/>
			<input
				type='password'
				placeholder='password'
				onChange={e => changeHandlerPwd(e.target.value)}
				value={password}
			/>
			<button onClick={loginN}>Login</button>
		</div>
	)
}
