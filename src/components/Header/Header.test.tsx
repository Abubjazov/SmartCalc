import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import configureStore from 'redux-mock-store'

import { Header } from './Header'

const mockStore = configureStore()

describe('Component: Header', () => {
	test('should render Header then "token" is NULL', () => {
		const store = mockStore({
			auth: {
				token: null,
			},
		})

		const { asFragment } = render(
			<Provider store={store}>
				<BrowserRouter>
					<Header />
				</BrowserRouter>
			</Provider>
		)

		expect(asFragment()).toMatchSnapshot()
	})

	test('should render Header then "token" is NOT NULL', () => {
		const store = mockStore({
			auth: {
				token: 'testtoken',
			},
		})

		const { asFragment } = render(
			<Provider store={store}>
				<BrowserRouter>
					<Header />
				</BrowserRouter>
			</Provider>
		)

		expect(asFragment()).toMatchSnapshot()
	})

	test('should render Header then "Главная" is "active"', () => {
		const store = mockStore({
			auth: {
				token: 'testtoken',
			},
		})

		window.innerWidth = 789

		const { asFragment } = render(
			<Provider store={store}>
				<BrowserRouter>
					<Header />
				</BrowserRouter>
			</Provider>
		)

		userEvent.click(screen.getByText('Главная'))
		expect(asFragment()).toMatchSnapshot()
	})

	test('should render Header then "Калькулятор" is "active"', () => {
		const store = mockStore({
			auth: {
				token: 'testtoken',
			},
		})

		window.innerWidth = 791

		const { asFragment } = render(
			<Provider store={store}>
				<BrowserRouter>
					<Header />
				</BrowserRouter>
			</Provider>
		)

		userEvent.click(screen.getByText('Калькулятор'))
		expect(asFragment()).toMatchSnapshot()
	})

	test('should render Header then "Войти" button press', () => {
		const store = mockStore({
			auth: {
				token: null,
			},
		})

		window.innerWidth = 791

		const { asFragment } = render(
			<Provider store={store}>
				<BrowserRouter>
					<Header />
				</BrowserRouter>
			</Provider>
		)

		userEvent.click(screen.getByText('Войти'))
		expect(asFragment()).toMatchSnapshot()
	})
})
