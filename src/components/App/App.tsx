import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { useTypedSelector } from '../../hooks/useTypedSelector'

import { MainPage } from '../../pages'
import { Header } from '../Header/Header'
import { Spinner } from '../Spinner/Spinner'

const LoginPage = lazy(() =>
	import('../../pages').then(({ LoginPage }) => ({ default: LoginPage }))
)

const CalcPage = lazy(() =>
	import('../../pages').then(({ CalcPage }) => ({ default: CalcPage }))
)

const Page404 = lazy(() =>
	import('../../pages').then(({ Page404 }) => ({ default: Page404 }))
)

export const App = (): JSX.Element => {
	const { token } = useTypedSelector(state => state.auth)

	return (
		<BrowserRouter>
			<Header />
			<Suspense fallback={<Spinner />}>
				<Routes>
					<Route path='/smartcalc/' element={<MainPage />} />
					<Route
						path='/smartcalc/login'
						element={token ? <Navigate to='/smartcalc/calc' /> : <LoginPage />}
					/>
					<Route
						path='/smartcalc/calc'
						element={!token ? <Navigate to='/smartcalc/login' /> : <CalcPage />}
					/>
					<Route path='*' element={<Page404 />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	)
}
