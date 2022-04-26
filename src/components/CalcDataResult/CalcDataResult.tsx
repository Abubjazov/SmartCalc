import { nanoid } from 'nanoid'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import './CalcDataResult.scss'

export const CalcDataResult = (): JSX.Element => {
	const [items] = useState<number[]>([10, 11, 9])

	return (
		<div className='calc-data-result'>
			<h1>Результаты расчёта</h1>

			<ul>
				{items.map(item => (
					<li key={nanoid()} className={item > 10 ? 'green' : ''}>
						{item}
					</li>
				))}
			</ul>

			<h2>Сумма: 39</h2>

			<div className='calc-data-result-footer'>
				<NavLink to='/smartcalc/calc'>Назад</NavLink>
				<NavLink to='/smartcalc/calc'>Новый расчёт</NavLink>
			</div>
		</div>
	)
}
