import { Calculator } from '../../components'

import './CalcPage.scss'

export const CalcPage = (): JSX.Element => (
	<main className='calc-page'>
		{/* <PageMarker pageName='calc' /> */}

		<div className='container'>
			<div className='calc-info'>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
				laboriosam quisquam nobis, neque unde, eaque dolor ea molestiae,
				pariatur commodi minus tempora consectetur culpa nam. Quia earum animi
				labore aperiam.Lorem, ipsum dolor sit amet consectetur adipisicing elit.
				Error laboriosam quisquam nobis, neque unde, eaque dolor ea molestiae,
				pariatur commodi minus tempora consectetur culpa nam. Quia earum animi
				labore aperiam.
			</div>
			<Calculator />
		</div>
	</main>
)
