import { nanoid } from 'nanoid'
import { NavLink } from 'react-router-dom'

import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'

import './CalcDataInput.scss'

export const CalcDataInput = (): JSX.Element => {
	const { inputItems } = useTypedSelector(state => state.calc)
	const { addInputItem, changeInputItem, removeInputItem } = useActions()

	return (
		<div className='calc-data-input'>
			<h1>Введите данные</h1>
			{inputItems.map((item, index) =>
				index < 2 ? (
					<input
						key={item.key}
						type='text'
						placeholder='Введите число'
						onChange={e => changeInputItem(item.key, e.target.value)}
						value={item.value}
					/>
				) : (
					<div className='added-item' key={item.key}>
						<input
							type='text'
							placeholder='Введите число'
							onChange={e => changeInputItem(item.key, e.target.value)}
							value={item.value}
						/>
						<div
							className='remove-item'
							onClick={() => removeInputItem(item.key)}
						>
							-
						</div>
					</div>
				)
			)}

			{inputItems.length < 10 ? (
				<div
					className='add-item'
					onClick={() => addInputItem({ key: nanoid(), value: '' })}
				>
					+
				</div>
			) : null}

			<button>Далее</button>
		</div>
	)
}
