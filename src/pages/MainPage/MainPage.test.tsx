import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import configureStore from 'redux-mock-store'

import { MainPage } from './MainPage'

const mockStore = configureStore()

describe('Component: MainPage', () => {
	test('should render MainPage with "Войти"', () => {
		const store = mockStore({
			auth: {
				token: null,
			},
		})

		const { asFragment } = render(
			<Provider store={store}>
				<BrowserRouter>
					<MainPage />
				</BrowserRouter>
			</Provider>
		)

		expect(asFragment()).toMatchSnapshot()
	})

	test('should render MainPage with "Калькулятор"', () => {
		const store = mockStore({
			auth: {
				token: 'testtoken',
			},
		})

		const { asFragment } = render(
			<Provider store={store}>
				<BrowserRouter>
					<MainPage />
				</BrowserRouter>
			</Provider>
		)

		expect(asFragment()).toMatchSnapshot()
	})
})
