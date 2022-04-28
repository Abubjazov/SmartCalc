import { nanoid } from 'nanoid'
import { Helmet } from 'react-helmet'

import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { InputItem } from '../../interfaces'

import './CalcDataInput.scss'

export const CalcDataInput = (): JSX.Element => {
	const { inputItems } = useTypedSelector(state => state.calc)
	const { token } = useTypedSelector(state => state.auth)
	const { addInputItem, changeInputItem, removeInputItem, switchToConfirm } =
		useActions()

	const convertArray = (arr: InputItem[]): number[] =>
		arr.map(item => +item.value)

	return (
		<div className='calc-data-input'>
			<Helmet>
				<title>Ввод данных</title>
			</Helmet>
			<h1>Введите данные</h1>
			{inputItems.map((item, index) =>
				index < 2 ? (
					<input
						key={item.key}
						type='number'
						placeholder='Введите число'
						onChange={e => changeInputItem(item.key, e.target.value)}
						value={item.value}
					/>
				) : (
					<div className='added-item' key={item.key}>
						<input
							type='number'
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

			<button onClick={() => switchToConfirm(convertArray(inputItems), token)}>
				Далее
			</button>
		</div>
	)
}
