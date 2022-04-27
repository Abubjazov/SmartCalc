import { nanoid } from 'nanoid'
import { ChangeEvent, useState } from 'react'
import { NavLink } from 'react-router-dom'
// import { useActions } from '../../hooks/useActions'
// import { useTypedSelector } from '../../hooks/useTypedSelector'
import { matchCheck } from '../../utils/utils'

import './CalcDataConfirm.scss'

export const CalcDataConfirm = (): JSX.Element => {
	const [items] = useState<number[]>([12, 11, 13])
	const [sortedItems, setSortedItems] = useState<number[]>([12, 11, 13])
	const [search, setSearch] = useState<string>('')
	const [sortDirection, setSortDirection] = useState<boolean>(true)

	const sortItems = () => {
		if (sortDirection) {
			setSortedItems(sortedItems.sort((a, b) => a - b))
			setSortDirection(false)
		} else {
			setSortedItems(sortedItems.sort((a, b) => b - a))
			setSortDirection(true)
		}
	}

	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value)

		setSortedItems(items.filter(item => matchCheck(item, e.target.value)))
	}

	return (
		<div className='calc-data-confirm'>
			<h1>Подтвердите данные</h1>
			<div className='calc-data-confirm-search'>
				<input
					type='text'
					placeholder='Поиск'
					onChange={changeHandler}
					value={search}
				/>

				<div
					className={`sort ${sortDirection ? null : 'rotated'}`}
					onClick={sortItems}
				>
					^
				</div>
			</div>

			<ul>
				{sortedItems.map(item => (
					<li key={nanoid()}>{item}</li>
				))}
			</ul>

			<div className='calc-data-confirm-footer'>
				<NavLink to='/smartcalc/calc'>Назад</NavLink>
				<NavLink to='/smartcalc/calc'>Подтверждаю</NavLink>
			</div>
		</div>
	)
}

// const [items] = useState<number[]>([12, 11, 13])
// 	const [sortedItems, setSortedItems] = useState<number[]>([12, 11, 13])
// 	const [search, setSearch] = useState<string>('')
// 	const [sortDirection, setSortDirection] = useState<boolean>(true)

// 	const sortItems = () => {
// 		if (sortDirection) {
// 			setSortedItems(sortedItems.sort((a, b) => a - b))
// 			setSortDirection(false)
// 		} else {
// 			setSortedItems(sortedItems.sort((a, b) => b - a))
// 			setSortDirection(true)
// 		}
// 	}

// 	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
// 		setSearch(e.target.value)

// 		setSortedItems(items.filter(item => matchCheck(item, e.target.value)))
// 	}

// 	return (
// 		<div className='calc-data-confirm'>
// 			<h1>Подтвердите данные</h1>
// 			<div className='calc-data-confirm-search'>
// 				<input
// 					type='text'
// 					placeholder='Поиск'
// 					onChange={changeHandler}
// 					value={search}
// 				/>

// 				<div
// 					className={`sort ${sortDirection ? null : 'rotated'}`}
// 					onClick={sortItems}
// 				>
// 					^
// 				</div>
// 			</div>

// 			<ul>
// 				{sortedItems.map(item => (
// 					<li key={nanoid()}>{item}</li>
// 				))}
// 			</ul>

// 			<div className='calc-data-confirm-footer'>
// 				<NavLink to='/smartcalc/calc'>Назад</NavLink>
// 				<NavLink to='/smartcalc/calc'>Подтверждаю</NavLink>
// 			</div>
// 		</div>
// 	)
