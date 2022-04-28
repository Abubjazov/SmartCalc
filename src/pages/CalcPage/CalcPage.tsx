import { Calculator } from '../../components'

import './CalcPage.scss'

export const CalcPage = (): JSX.Element => (
	<main className='calc-page'>
		{/* <PageMarker pageName='calc' /> */}

		<div className='container'>
			<div className='calc-info'>
				<h2>Smart Calc - простой онлайн калькулятор.</h2>
				<hr />
				<br />
				Smart C - простое онлайн приложение на основе React, Redux и Typescript.
				<br />
				<br />
				<h3>Логин и пароль для Demo:</h3>
				<br />
				login: test@test.com <br /> password: password
				<br />
				<br />
				<h3>На данный момент приложение имеет 3 реализованных раздела:</h3>
				<br />
				-Главная страница - первое что видит пользователь.
				<br />
				<br />
				- Страница ввода логина и пароля - где пользователь уже
				зарегистрированный в системе может ввести свой логин и пароль и попасть
				на страницу "Калькулятор".
				<br />
				<br />- Страница калькулятора - где пользователь может ввести данные и
				получить результат расчёта.
			</div>
			<Calculator />
		</div>
	</main>
)
