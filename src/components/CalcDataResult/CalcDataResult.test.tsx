import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { CalcActionTypes } from '../../interfaces'
import { CalcDataResult } from './CalcDataResult'

describe('Component: CalcDataResult', () => {
	const middlewares = [thunk]
	const mockStore = configureStore(middlewares)

	const store = mockStore({
		calc: {
			items: [1, 2, 3, 44],
			summary: 51,
		},
		auth: {
			token: 'testtoken',
		},
	})

	let expectedActions = []

	beforeEach(() => {
		expectedActions = []
		store.clearActions()
	})

	test('should render CalcDataResult by default', () => {
		const { asFragment } = render(
			<Provider store={store}>
				<CalcDataResult />
			</Provider>
		)

		expect(asFragment()).toMatchSnapshot()
	})

	test('should dispatch an action on "To Data Input" Button Click', () => {
		expectedActions = [
			{ type: CalcActionTypes.RESET_TO_DATA_INPUT, payload: 'testtoken' },
		]

		render(
			<Provider store={store}>
				<CalcDataResult />
			</Provider>
		)

		userEvent.click(screen.getByText('Ввод данных'))
		expect(store.getActions()).toEqual(expectedActions)
	})

	test('should dispatch an action on "To New Calculation" Button Click', () => {
		expectedActions = [
			{ type: CalcActionTypes.RESET_TO_NEW_CALCULATION, payload: 'testtoken' },
		]

		render(
			<Provider store={store}>
				<CalcDataResult />
			</Provider>
		)

		userEvent.click(screen.getByText('Новый расчёт'))
		expect(store.getActions()).toEqual(expectedActions)
	})
})
