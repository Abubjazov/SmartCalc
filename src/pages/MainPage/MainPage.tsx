import { NavLink } from 'react-router-dom'

import { useTypedSelector } from '../../hooks/useTypedSelector'

import './MainPage.scss'

export const MainPage = (): JSX.Element => {
	const { token } = useTypedSelector(state => state.auth)
	return (
		<main className='main-page'>
			{/* <PageMarker pageName='main' /> */}

			<div className='container'>
				<div className='calc-info'>
					<h1>Smart Calc - простой онлайн калькулятор.</h1>
					<hr />
					<br />
					Smart C - простое онлайн приложение на основе React, Redux и
					Typescript.
					<br />
					<br />
					<h2>Логин и пароль для Demo:</h2>
					<br />
					login: test@test.com <br /> password: password
					<br />
					<br />
					<h2>На данный момент приложение имеет 3 реализованных раздела:</h2>
					<br />
					-Главная страница - первое что видит пользователь.
					<br />
					<br />
					- Страница ввода логина и пароля - где пользователь уже
					зарегистрированный в системе может ввести свой логин и пароль и
					попасть на страницу "Калькулятор".
					<br />
					<br />- Страница калькулятора - где пользователь может ввести данные и
					получить результат расчёта.
				</div>
				{token ? (
					<NavLink to='/smartcalc/calc'>Калькулятор</NavLink>
				) : (
					<NavLink to='/smartcalc/login'>Авторизация</NavLink>
				)}
			</div>
		</main>
	)
}
