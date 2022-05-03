import { useEffect, useState } from 'react'
import { useActions } from '../../hooks/useActions'
import bcrypt from 'bcryptjs'

import { useTypedSelector } from '../../hooks/useTypedSelector'

import './Login.scss'

export const Login = (): JSX.Element => {
	const [submitStatus, setSubmitStatus] = useState<boolean>(true)

	const [email, setEmail] = useState<{
		value: string
		isValid: boolean | null
	}>({
		value: '',
		isValid: null,
	})
	const [password, setPassword] = useState<{
		value: string
		isValid: boolean | null
	}>({
		value: '',
		isValid: null,
	})

	const { status, error } = useTypedSelector(state => state.auth)
	const { fetchToken, clearError } = useActions()

	const setInputState = (value: string, field: string) => {
		let isValid = false

		if (field === 'email') {
			isValid =
				value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i) !== null
					? true
					: false
			setEmail({ value, isValid })
		}

		if (field === 'password') {
			isValid = value.length > 7
			setPassword({ value, isValid })
		}
	}

	useEffect(() => {
		setSubmitStatus(!(email.isValid === true && password.isValid === true))
	}, [email.isValid, password.isValid])

	useEffect(() => {
		let resetError = setTimeout(clearError, 3000)

		return () => {
			clearTimeout(resetError)
		}
	}, [clearError, error])

	return (
		<div className='login-widget'>
			<input
				className={
					email.isValid !== null ? (email.isValid ? 'null' : 'warning') : 'null'
				}
				type='email'
				placeholder='your@email.com'
				onChange={e => setInputState(e.target.value, 'email')}
				value={email.value}
			/>
			{email.isValid !== null ? (
				email.isValid ? null : (
					<p>Неверный формат email</p>
				)
			) : null}
			<input
				className={
					password.isValid !== null
						? email.isValid
							? 'null'
							: 'warning'
						: 'null'
				}
				type='password'
				placeholder='password'
				onChange={e => setInputState(e.target.value, 'password')}
				value={password.value}
			/>
			{password.isValid !== null ? (
				password.isValid ? null : (
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
