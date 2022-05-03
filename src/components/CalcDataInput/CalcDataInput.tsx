import { nanoid } from 'nanoid'
import { KeyboardEvent, useState } from 'react'
import { Helmet } from 'react-helmet'

import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { checkInputItems, convertArray } from '../../utils/utils'
import { CalcInput } from '../CalcInput/CalcInput'

import './CalcDataInput.scss'

export const CalcDataInput = (): JSX.Element => {
	const { inputItems } = useTypedSelector(state => state.calc)
	const { token } = useTypedSelector(state => state.auth)
	const { addInputItem, removeInputItem, switchToConfirm } = useActions()

	const [submitStatus, setSubmitStatus] = useState<boolean | null>(null)

	const removeItem = (key: KeyboardEvent, itemKey: string) => {
		if (key.code === 'Space' || key.code === 'Enter') {
			removeInputItem(itemKey)
		}
	}

	const addItem = (key: KeyboardEvent) => {
		if (key.code === 'Space' || key.code === 'Enter') {
			addInputItem({ key: nanoid(), value: '' })
		}
	}

	const submitHandler = () => {
		if (checkInputItems(inputItems)) {
			setSubmitStatus(false)
			return
		}

		switchToConfirm(convertArray(inputItems), token)
	}

	return (
		<div className='calc-data-input'>
			<Helmet>
				<title>Ввод данных</title>
			</Helmet>
			<h1>Введите данные</h1>
			{inputItems.map((item, index) =>
				index < 2 ? (
					<CalcInput
						itemKey={item.key}
						itemValue={item.value}
						submitStatus={submitStatus}
					/>
				) : (
					<div className='added-item' key={item.key}>
						<CalcInput
							itemKey={item.key}
							itemValue={item.value}
							submitStatus={submitStatus}
						/>
						<div
							tabIndex={0}
							className='remove-item'
							onClick={() => removeInputItem(item.key)}
							onKeyDown={(key: KeyboardEvent) => removeItem(key, item.key)}
						>
							-
						</div>
					</div>
				)
			)}

			{inputItems.length < 10 ? (
				<div
					tabIndex={0}
					className='add-item'
					onClick={() => {
						addInputItem({ key: nanoid(), value: '' })
						setSubmitStatus(null)
					}}
					onKeyDown={(key: KeyboardEvent) => addItem(key)}
				>
					+
				</div>
			) : null}

			<button onClick={submitHandler}>Далее</button>
		</div>
	)
}
