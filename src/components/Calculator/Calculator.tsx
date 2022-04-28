import { useEffect } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { maskEmail } from '../../utils/utils'

import { CalcDataConfirm } from '../CalcDataConfirm/CalcDataConfirm'
import { CalcDataInput } from '../CalcDataInput/CalcDataInput'
import { CalcDataResult } from '../CalcDataResult/CalcDataResult'
import { Spinner } from '../Spinner/Spinner'

import './Calculator.scss'

export const Calculator = (): JSX.Element => {
	const { step, status } = useTypedSelector(state => state.calc)
	const { token, email } = useTypedSelector(state => state.auth)

	const { fetchCurrentState } = useActions()

	useEffect(() => {
		token && fetchCurrentState(token)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	switch (step) {
		case 1:
			return (
				<div className='calc-widget'>
					{status === 'loading' ? <Spinner /> : null}
					{status === 'waiting' ? (
						<>
							<p>Привет, {maskEmail(email)}</p>
							<CalcDataInput />
						</>
					) : null}
				</div>
			)
		case 2:
			return (
				<div className='calc-widget'>
					{status === 'loading' ? <Spinner /> : null}
					{status === 'waiting' ? (
						<>
							<p>Привет, {maskEmail(email)}</p>
							<CalcDataConfirm />
						</>
					) : null}
				</div>
			)

		case 4:
			return (
				<div className='calc-widget'>
					{status === 'loading' ? <Spinner /> : null}
					{status === 'waiting' ? (
						<>
							<p>Привет, {maskEmail(email)}</p>
							<CalcDataResult />
						</>
					) : null}
				</div>
			)
		default:
			return <div className='calc-widget'></div>
	}
}
