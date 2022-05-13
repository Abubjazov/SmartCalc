import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { LoginPage } from './LoginPage'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('Component: LoginPage', () => {
	test('should render LoginPage default', () => {
		const store = mockStore({
			auth: {
				status: 'waiting',
				error: null,
			},
		})

		const { asFragment } = render(
			<Provider store={store}>
				<BrowserRouter>
					<LoginPage />
				</BrowserRouter>
			</Provider>
		)

		expect(asFragment()).toMatchSnapshot()
	})

	test('should render LoginPage with loading spinner', () => {
		const store = mockStore({
			auth: {
				status: 'loading',
				error: null,
			},
		})

		const { asFragment } = render(
			<Provider store={store}>
				<BrowserRouter>
					<LoginPage />
				</BrowserRouter>
			</Provider>
		)

		expect(asFragment()).toMatchSnapshot()
	})

	test('should render LoginPage with error message', () => {
		const store = mockStore({
			auth: {
				status: 'error',
				error: 'ERROR*Test Error String>>test',
			},
		})

		const { asFragment } = render(
			<Provider store={store}>
				<BrowserRouter>
					<LoginPage />
				</BrowserRouter>
			</Provider>
		)

		expect(asFragment()).toMatchSnapshot()
	})
})
