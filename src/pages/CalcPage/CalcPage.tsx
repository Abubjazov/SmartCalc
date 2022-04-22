import { NavLink } from 'react-router-dom'
import { Spinner } from '../../components/Spinner/Spinner'
import './CalcPage.scss'

export const CalcPage = (): JSX.Element => {
	return (
		<main className='calc-page'>
			{/* <PageMarker pageName='calc' /> */}

			<div className='container'>
				CALC PAGE
				<input type='text' placeholder='ITEM' />
				<input type='text' placeholder='ITEM' />
				<NavLink to='/smartcalc/calc'>Calculate</NavLink>
				<Spinner />
			</div>
		</main>
	)
}
