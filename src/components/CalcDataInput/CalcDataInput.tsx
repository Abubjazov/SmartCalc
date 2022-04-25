import { nanoid } from 'nanoid'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import './CalcDataInput.scss'

export const CalcDataInput = (): JSX.Element => {
	const [items, setItems] = useState<
		{ key: string; value: number | undefined }[]
	>([
		{ key: nanoid(), value: undefined },
		{ key: nanoid(), value: undefined },
	])

	const changeHandler = (changedItem: {
		key: string
		value: number | undefined
	}) => {
		setItems(
			items.map(item => {
				if (item.key === changedItem.key) item.value = changedItem.value
				return item
			})
		)
	}

	const addItem = () => {
		setItems([...items, { key: nanoid(), value: undefined }])
	}

	const removeItem = (itemKey: string) => {
		setItems(items.filter(item => item.key !== itemKey))
	}

	return (
		<div className='calc-data-input'>
			<h1>Введите данные</h1>
			{items.map((item, index) =>
				index < 2 ? (
					<input
						key={item.key}
						item-key={item.key}
						type='text'
						placeholder='Введите число'
						onChange={() => changeHandler(item)}
						value={item.value}
					/>
				) : (
					<div className='added-item' key={item.key}>
						<input
							type='text'
							placeholder='Введите число'
							onChange={() => changeHandler(item)}
							value={item.value}
						/>
						<div
							item-key={item.key}
							className='remove-item'
							onClick={() => removeItem(item.key)}
						>
							-
						</div>
					</div>
				)
			)}

			{items.length < 10 ? (
				<div className='add-item' onClick={addItem}>
					+
				</div>
			) : null}

			<NavLink to='/smartcalc/calc'>Далее</NavLink>
		</div>
	)
}
