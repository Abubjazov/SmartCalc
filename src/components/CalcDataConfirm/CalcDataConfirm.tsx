import { nanoid } from 'nanoid'
import { useActions } from '../../hooks/useActions'
import { Helmet } from 'react-helmet'

import { useTypedSelector } from '../../hooks/useTypedSelector'

import './CalcDataConfirm.scss'
import { KeyboardEvent } from 'react'

export const CalcDataConfirm = (): JSX.Element => {
	const { sortedItems, sortDirection, searchString } = useTypedSelector(
		state => state.calc
	)
	const { token } = useTypedSelector(state => state.auth)

	const { sortItems, searchItems, switchToDataInput, switchToResult } =
		useActions()

	const sortHandler = (key: KeyboardEvent) => {
		if (key.code === 'Space' || key.code === 'Enter') {
			sortItems()
		}
	}

	return (
		<div className='calc-data-confirm'>
			<Helmet>
				<title>Подтверждение</title>
			</Helmet>
			<h1>Подтвердите данные</h1>
			<div className='calc-data-confirm-search'>
				<input
					type='text'
					placeholder='Поиск'
					onChange={e => searchItems(e.target.value.replace(/\D/, ''))}
					value={searchString}
				/>

				<div
					tabIndex={0}
					className={`sort ${sortDirection ? null : 'rotated'}`}
					onClick={sortItems}
					onKeyDown={(key: KeyboardEvent) => sortHandler(key)}
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
				<button onClick={() => switchToDataInput(token)}>Назад</button>
				<button onClick={() => switchToResult(token)}>Подтверждаю</button>
			</div>
		</div>
	)
}
