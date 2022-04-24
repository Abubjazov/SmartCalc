import { Login } from '../../components'

import './LoginPage.scss'

export const LoginPage = (): JSX.Element => {
	return (
		<main className='login-page'>
			{/* <PageMarker pageName='main' /> */}

			<div className='container'>
				<Login />
			</div>
		</main>
	)
}
