import { NavLink } from 'react-router-dom'

import './Calculator.scss'

export const Calculator = (): JSX.Element => (
	<div className='calc-widget'>
		<div className='calc-input'>
			<h1>Введите данные</h1>

			<input type='text' placeholder='Введите число' />
			<input type='text' placeholder='Введите число' />
			<div className='add-item'>+</div>
			<NavLink to='/smartcalc/calc'>Далее</NavLink>
		</div>

		<div className='calc-confirm' style={{ display: 'none' }}>
			<h1>Подтвердите данные</h1>
			<div className='calc-confirm-search'>
				<input type='text' placeholder='Поиск' />
				<div className='sort'>^</div>
			</div>

			<ul>
				<li>12</li>
				<li>13</li>
				<li>14</li>
			</ul>

			<div className='calc-confirm-footer'>
				<NavLink to='/smartcalc/calc'>Назад</NavLink>
				<NavLink to='/smartcalc/calc'>Подтверждаю</NavLink>
			</div>
		</div>

		<div className='calc-result' style={{ display: 'none' }}>
			<h1>Результаты расчёта</h1>

			<ul>
				<li>12</li>
				<li>13</li>
				<li>14</li>
			</ul>

			<h2>39</h2>
			<div className='calc-result-footer'>
				<NavLink to='/smartcalc/calc'>Назад</NavLink>
				<NavLink to='/smartcalc/calc'>Новый расчёт</NavLink>
			</div>
		</div>
	</div>
)
