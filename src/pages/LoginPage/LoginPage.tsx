import { Helmet } from 'react-helmet'

import { useTypedSelector } from '../../hooks/useTypedSelector'
import { Login, Spinner } from '../../components'

import './LoginPage.scss'

export const LoginPage = (): JSX.Element => {
	const { status } = useTypedSelector(state => state.auth)

	return (
		<main className='login-page'>
			<Helmet>
				<title>Авторизация</title>
			</Helmet>

			<div className='container'>
				{status === 'loading' ? <Spinner /> : null}
				{status === 'waiting' || status === 'error' ? <Login /> : null}
			</div>
		</main>
	)
}
