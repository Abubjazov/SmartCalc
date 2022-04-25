// import { nanoid } from 'nanoid'
// import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import './CalcDataConfirm.scss'

export const CalcDataConfirm = (): JSX.Element => {
	return (
		<div className='calc-data-confirm'>
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
	)
}
