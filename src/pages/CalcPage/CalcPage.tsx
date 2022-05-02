import { Calculator, Info } from '../../components'

import './CalcPage.scss'

export const CalcPage = (): JSX.Element => (
	<main className='calc-page'>
		{/* <PageMarker pageName='calc' /> */}

		<div className='container'>
			<Info />
			<Calculator />
		</div>
	</main>
)
