import { nanoid } from 'nanoid'
import { ChangeEvent, useState } from 'react'
import { NavLink } from 'react-router-dom'

import './CalcDataConfirm.scss'

export const CalcDataConfirm = (): JSX.Element => {
	const [itemsI] = useState<number[]>([12, 11, 13])
	const [items, setItems] = useState<number[]>([12, 11, 13])
	const [search, setSearch] = useState<string | undefined>()
	const [sortDirection, setSortDirection] = useState<boolean | undefined>(true)

	const sort = () => {
		if (sortDirection) {
			setItems(items.sort((a, b) => a - b))
			setSortDirection(false)
		} else {
			setItems(items.sort((a, b) => b - a))
			setSortDirection(true)
		}
	}

	const matchCheck = (item: number, value: string) => {
		const stringItem = item.toString()

		return splitString(stringItem, value.length).includes(value)
	}

	const splitString = (item: string, step: number) => {
		const result: string[] = []

		for (let i = 0; i < item.length - step + 1; i++) {
			result.push(item.substring(i, i + step))
		}

		return result
	}

	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value)

		setItems(
			itemsI
				.filter(item => matchCheck(item, e.target.value))
				.sort(sortDirection ? (a, b) => b - a : (a, b) => a - b)
		)
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
					onClick={sort}
				>
					^
				</div>
			</div>

			<ul>
				{items.map(item => (
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
