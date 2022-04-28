import { nanoid } from 'nanoid'
import { useActions } from '../../hooks/useActions'
import { Helmet } from 'react-helmet'

import { useTypedSelector } from '../../hooks/useTypedSelector'

import './CalcDataConfirm.scss'

export const CalcDataConfirm = (): JSX.Element => {
	const { sortedItems, sortDirection, searchString } = useTypedSelector(
		state => state.calc
	)
	const { token } = useTypedSelector(state => state.auth)

	const { sortItems, searchItems, switchToDataInput, switchToResult } =
		useActions()

	return (
		<div className='calc-data-confirm'>
			<Helmet>
				<title>Подтверждение</title>
			</Helmet>
			<h1>Подтвердите данные</h1>
			<div className='calc-data-confirm-search'>
				<input
					type='number'
					placeholder='Поиск'
					onChange={e => searchItems(e.target.value)}
					value={searchString}
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
				<button onClick={() => switchToDataInput(token)}>Назад</button>
				<button onClick={() => switchToResult(token)}>Подтверждаю</button>
			</div>
		</div>
	)
}
