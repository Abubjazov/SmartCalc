import { useEffect, useState } from 'react'
import { useActions } from '../../hooks/useActions'

import './CalcInput.scss'

export const CalcInput = ({
	itemKey,
	itemValue,
	submitStatus,
}: {
	itemKey: string
	itemValue: string
	submitStatus: boolean | null
}): JSX.Element => {
	const { changeInputItem } = useActions()

	const [isValid, setIsValid] = useState<boolean | null>(null)

	const changeInput = (value: string) => {
		changeInputItem(itemKey, value.replace(/\D/, ''))
		setIsValid(value.length > 0)
	}

	useEffect(() => {
		submitStatus !== null && setIsValid(itemValue.length > 0)

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [submitStatus])

	return (
		<div className='calc-input'>
			<input
				className={isValid !== null ? (isValid ? 'null' : 'warning') : 'null'}
				key={itemKey}
				type='text'
				placeholder='Введите число'
				onChange={e => changeInput(e.target.value)}
				onBlur={e => changeInput(e.target.value)}
				value={itemValue}
			/>

			{isValid !== null ? (
				isValid ? null : (
					<p className='calc-input-warning'>Введите число</p>
				)
			) : null}
		</div>
	)
}
