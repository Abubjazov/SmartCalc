import { useEffect, useState } from 'react'
import { useActions } from '../../hooks/useActions'
import bcrypt from 'bcryptjs'

import { useTypedSelector } from '../../hooks/useTypedSelector'

import './Login.scss'

export const Login = (): JSX.Element => {
	const [submitStatus, setSubmitStatus] = useState<boolean>(true)

	const [email, setEmail] = useState<{ value: string; valid: boolean | null }>({
		value: '',
		valid: null,
	})
	const [password, setPassword] = useState<{
		value: string
		valid: boolean | null
	}>({
		value: '',
		valid: null,
	})

	const { status, error } = useTypedSelector(state => state.auth)
	const { fetchToken, clearError } = useActions()

	const setInputState = (value: string, field: string) => {
		let valid = false

		if (field === 'email') {
			valid =
				value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i) !== null
					? true
					: false
			setEmail({ value, valid })
		}

		if (field === 'password') {
			valid = value.length > 7 ? true : false
			setPassword({ value, valid })
		}
	}

	useEffect(() => {
		setSubmitStatus(!(email.valid === true && password.valid === true))
	}, [email.valid, password.valid])

	useEffect(() => {
		let resetError = setTimeout(clearError, 3000)

		return () => {
			clearTimeout(resetError)
		}
	}, [clearError, error])

	return (
		<div className='login-widget'>
			<input
				type='email'
				placeholder='your@email.com'
				onChange={e => setInputState(e.target.value, 'email')}
				value={email.value}
			/>
			{email.valid !== null ? (
				email.valid === true ? null : (
					<p>Неверный формат email</p>
				)
			) : null}
			<input
				type='password'
				placeholder='password'
				onChange={e => setInputState(e.target.value, 'password')}
				value={password.value}
			/>
			{password.valid !== null ? (
				password.valid === true ? null : (
					<p>Минимум 8 символов</p>
				)
			) : null}
			{status === 'error' && error?.includes('Authentication error!') ? (
				<p>Неверный логин или пароль</p>
			) : null}
			<button
				disabled={submitStatus}
				onClick={() =>
					fetchToken({
						email: email.value,
						password: bcrypt.hashSync(
							password.value,
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
