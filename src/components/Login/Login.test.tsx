import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { AuthActionTypes } from '../../interfaces'

import { Login } from './Login'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

let store = mockStore({
	auth: {
		status: 'waiting',
		error: null,
	},
})

describe('Component: Login', () => {
	test('should render Login default', () => {
		const { asFragment } = render(
			<Provider store={store}>
				<Login />
			</Provider>
		)

		expect(asFragment()).toMatchSnapshot()
	})

	test('should render Login with "valid login & password"', () => {
		const { asFragment } = render(
			<Provider store={store}>
				<Login />
			</Provider>
		)

		let inputItem = screen.getByPlaceholderText('your@email.com')
		userEvent.type(inputItem, 'test@test.com')
		expect(asFragment()).toMatchSnapshot()

		inputItem = screen.getByPlaceholderText('password')
		userEvent.type(inputItem, 'password')
		expect(asFragment()).toMatchSnapshot()

		inputItem = screen.getByPlaceholderText('your@email.com')
		userEvent.type(inputItem, '@.')
		expect(asFragment()).toMatchSnapshot()
	})

	test('should render Login status is "Error"', () => {
		store = mockStore({
			auth: {
				status: 'error',
				error: 'Пользователь не найден',
			},
		})
		const { asFragment } = render(
			<Provider store={store}>
				<Login />
			</Provider>
		)

		expect(asFragment()).toMatchSnapshot()
	})

	test('should dispatch an action on "Login" Button Click', () => {
		store = mockStore({
			auth: {
				status: 'waiting',
				error: null,
			},
		})

		const expectedActions = [
			{
				type: AuthActionTypes.FETCH_TOKEN,
				payload: {
					email: 'test@test.com',
					password:
						'$2a$10$9k5n.PAjQUFjv08.OlWN0eTRBKToGb2cen4PSPcja3PW8LsRYtVya',
				},
			},
		]

		render(
			<Provider store={store}>
				<Login />
			</Provider>
		)

		let inputItem = screen.getByPlaceholderText('your@email.com')
		userEvent.type(inputItem, 'test@test.com')

		inputItem = screen.getByPlaceholderText('password')
		userEvent.type(inputItem, 'password')

		userEvent.click(screen.getByText('Войти'))

		expect(store.getActions()).toEqual(expectedActions)
	})
})
