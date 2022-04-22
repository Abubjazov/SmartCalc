import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { MainPage } from '../../pages'
import { Header } from '../Header/Header'
import { Spinner } from '../Spinner/Spinner'

const Page404 = lazy(() =>
	import('../../pages').then(({ Page404 }) => ({ default: Page404 }))
)

export const App = (): JSX.Element => {
	return (
		<BrowserRouter>
			<Header />
			<Suspense fallback={<Spinner />}>
				<Routes>
					<Route path='/smartcalc/' element={<MainPage />} />
					<Route path='*' element={<Page404 />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	)
}
