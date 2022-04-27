import { useTypedSelector } from '../../hooks/useTypedSelector'

import { Login, Spinner } from '../../components'

import './LoginPage.scss'

export const LoginPage = (): JSX.Element => {
	const { status } = useTypedSelector(state => state.auth)
	return (
		<main className='login-page'>
			{/* <PageMarker pageName='main' /> */}

			<div className='container'>
				{status === 'loading' ? <Spinner /> : null}
				{status === 'waiting' ? <Login /> : null}
			</div>
		</main>
	)
}
