import { useEffect } from 'react'
import { Helmet } from 'react-helmet'

import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'

import { Login, Spinner } from '../../components'
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage'

import './LoginPage.scss'

export const LoginPage = (): JSX.Element => {
	const { status, error } = useTypedSelector(state => state.auth)
	const { clearError } = useActions()

	useEffect(() => {
		status === 'error' && clearError()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<main className='login-page'>
			<Helmet>
				<title>Авторизация</title>
			</Helmet>

			<div className='container'>
				{status === 'loading' ? <Spinner /> : null}
				{status === 'waiting' ||
				(status === 'error' && error?.includes('Пользователь не найден')) ? (
					<Login />
				) : null}
				{status === 'error' && !error?.includes('Пользователь не найден') ? (
					<main>
						<ErrorMessage errorMessage={error} />
					</main>
				) : null}
			</div>
		</main>
	)
}
