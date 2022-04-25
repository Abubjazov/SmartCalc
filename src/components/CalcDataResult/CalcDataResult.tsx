// import { nanoid } from 'nanoid'
// import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import './CalcDataResult.scss'

export const CalcDataResult = (): JSX.Element => {
	return (
		<div className='calc-data-result'>
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
	)
}
