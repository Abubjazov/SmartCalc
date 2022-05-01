import { useState } from 'react'
import { useActions } from '../../hooks/useActions'
import bcrypt from 'bcryptjs'

import { useTypedSelector } from '../../hooks/useTypedSelector'

import './Login.scss'

export const Login = (): JSX.Element => {
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	const { status, error } = useTypedSelector(state => state.auth)
	const { fetchToken } = useActions()

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
			{status === 'error' && error?.includes('Authentication error!') ? (
				<p style={{ color: 'red', fontSize: 14 }}>
					Неправильный логин или пароль
				</p>
			) : null}
			<button
				onClick={() =>
					fetchToken({
						email,
						password: bcrypt.hashSync(
							password,
							'$2a$10$9k5n.PAjQUFjv08.OlWN0e'
						),
					})
				}
			>
				Войти
			</button>
		</div>
	)
}
