import { Helmet } from 'react-helmet'

import { ErrorGif } from '../../components'

export const Page404 = (): JSX.Element => (
	<main className='page-404'>
		<Helmet>
			<title>404</title>
		</Helmet>
		<ErrorGif />
		<p tabIndex={0} role='alert'>
			Страница не найдена
		</p>
		<a href='/smartcalc/' role='alert'>
			Вернуться на главную
		</a>
	</main>
)
