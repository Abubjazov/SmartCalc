import { CalcDataConfirm } from '../CalcDataConfirm/CalcDataConfirm'
import { CalcDataInput } from '../CalcDataInput/CalcDataInput'
import { CalcDataResult } from '../CalcDataResult/CalcDataResult'
import './Calculator.scss'

export const Calculator = (): JSX.Element => {
	return (
		<div className='calc-widget'>
			{/* <CalcDataInput /> */}
			{/* <CalcDataConfirm /> */}
			<CalcDataResult />
		</div>
	)
}
