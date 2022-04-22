import { NavLink } from 'react-router-dom'
import './LoginPage.scss'

export const LoginPage = (): JSX.Element => {
	return (
		<main className='login-page'>
			{/* <PageMarker pageName='main' /> */}

			<div className='container'>
				LOGIN PAGE
				<input type='text' placeholder='LOGIN' />
				<input type='text' placeholder='PASSWORD' />
				<NavLink to='/smartcalc/calc'>Login</NavLink>
			</div>
		</main>
	)
}
