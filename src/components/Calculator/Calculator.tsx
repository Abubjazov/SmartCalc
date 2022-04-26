import { useTypedSelector } from '../../hooks/useTypedSelector'

import { CalcDataConfirm } from '../CalcDataConfirm/CalcDataConfirm'
import { CalcDataInput } from '../CalcDataInput/CalcDataInput'
import { CalcDataResult } from '../CalcDataResult/CalcDataResult'

import './Calculator.scss'

export const Calculator = (): JSX.Element => {
	const { step } = useTypedSelector(state => state.calc)

	switch (step) {
		case 1:
			return (
				<div className='calc-widget'>
					<CalcDataInput />
				</div>
			)
		case 2:
			return (
				<div className='calc-widget'>
					<CalcDataConfirm />
				</div>
			)

		case 4:
			return (
				<div className='calc-widget'>
					<CalcDataResult />
				</div>
			)
		default:
			return <div className='calc-widget'></div>
	}
}
