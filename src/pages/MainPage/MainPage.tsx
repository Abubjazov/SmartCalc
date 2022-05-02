import { NavLink } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import { useTypedSelector } from '../../hooks/useTypedSelector'
import { Info } from '../../components'

import './MainPage.scss'

export const MainPage = (): JSX.Element => {
	const { token } = useTypedSelector(state => state.auth)
	return (
		<main className='main-page'>
			<Helmet>
				<title>Главная</title>
			</Helmet>

			<div className='container'>
				<Info />
				{token ? (
					<NavLink to='/smartcalc/calc'>Калькулятор</NavLink>
				) : (
					<NavLink to='/smartcalc/login'>Войти</NavLink>
				)}
			</div>
		</main>
	)
}
