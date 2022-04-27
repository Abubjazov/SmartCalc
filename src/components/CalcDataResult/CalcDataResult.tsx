import { nanoid } from 'nanoid'

import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'

import './CalcDataResult.scss'

export const CalcDataResult = (): JSX.Element => {
	const { items, summary } = useTypedSelector(state => state.calc)
	const { token } = useTypedSelector(state => state.auth)
	const { resetToDataInput, resetToNewCalculation } = useActions()

	return (
		<div className='calc-data-result'>
			<h1>Результаты расчёта</h1>

			<ul>
				{items.map(item => (
					<li key={nanoid()} className={item > 10 ? 'green' : ''}>
						{item}
					</li>
				))}
			</ul>

			<h2>Сумма: {summary}</h2>

			<div className='calc-data-result-footer'>
				<button onClick={() => resetToDataInput(token)}>Ввод данных</button>
				<button onClick={() => resetToNewCalculation(token)}>
					Новый расчёт
				</button>
			</div>
		</div>
	)
}
