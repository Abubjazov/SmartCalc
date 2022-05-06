import { Helmet } from 'react-helmet'
import { NavLink } from 'react-router-dom'

import { ErrorGif } from '../../components'

import './Page404.scss'

export const Page404 = (): JSX.Element => (
	<main className='page-404'>
		<Helmet>
			<title>404</title>
		</Helmet>
		<ErrorGif />
		<p tabIndex={0} role='alert'>
			Страница не найдена
		</p>
		<NavLink to='/smartcalc/' role='alert'>
			Вернуться на главную
		</NavLink>
	</main>
)
