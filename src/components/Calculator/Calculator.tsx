import { useTypedSelector } from '../../hooks/useTypedSelector'

import { CalcDataConfirm } from '../CalcDataConfirm/CalcDataConfirm'
import { CalcDataInput } from '../CalcDataInput/CalcDataInput'
import { CalcDataResult } from '../CalcDataResult/CalcDataResult'
import { Spinner } from '../Spinner/Spinner'

import './Calculator.scss'

export const Calculator = (): JSX.Element => {
	const { step, status } = useTypedSelector(state => state.calc)

	switch (step) {
		case 1:
			return (
				<div className='calc-widget'>
					{status === 'loading' ? <Spinner /> : null}
					{status === 'waiting' ? <CalcDataInput /> : null}
				</div>
			)
		case 2:
			return (
				<div className='calc-widget'>
					{status === 'loading' ? <Spinner /> : null}
					{status === 'waiting' ? <CalcDataConfirm /> : null}
				</div>
			)

		case 4:
			return (
				<div className='calc-widget'>
					{status === 'loading' ? <Spinner /> : null}
					{status === 'waiting' ? <CalcDataResult /> : null}
				</div>
			)
		default:
			return <div className='calc-widget'></div>
	}
}
