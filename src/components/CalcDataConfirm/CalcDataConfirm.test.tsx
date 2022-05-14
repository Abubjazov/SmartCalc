import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { CalcActionTypes } from '../../interfaces'
import { CalcDataConfirm } from './CalcDataConfirm'

describe('Component: CalcDataConfirm', () => {
	const middlewares = [thunk]
	const mockStore = configureStore(middlewares)

	const store = mockStore({
		calc: {
			sortedItems: [2, 3, 1, 5],
			sortDirection: false,
			searchString: '',
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

	test('should render CalcDataConfirm by default', () => {
		const { asFragment } = render(
			<Provider store={store}>
				<CalcDataConfirm />
			</Provider>
		)

		expect(asFragment()).toMatchSnapshot()
	})

	test('should dispatch an action on "To Data Input" Button Click', () => {
		expectedActions = [
			{ type: CalcActionTypes.SWITCH_TO_DATAINPUT, payload: 'testtoken' },
		]

		render(
			<Provider store={store}>
				<CalcDataConfirm />
			</Provider>
		)

		userEvent.click(screen.getByText('Назад'))
		expect(store.getActions()).toEqual(expectedActions)
	})

	test('should dispatch an action on "Confirm Data" Button Click', () => {
		expectedActions = [
			{ type: CalcActionTypes.SWITCH_TO_RESULT, payload: 'testtoken' },
		]

		render(
			<Provider store={store}>
				<CalcDataConfirm />
			</Provider>
		)

		userEvent.click(screen.getByText('Подтверждаю'))
		expect(store.getActions()).toEqual(expectedActions)
	})

	test('should dispatch an action on "Sort items" Key Down', () => {
		const expectedActions = [
			{ type: CalcActionTypes.SORT_ITEMS },
			{ type: CalcActionTypes.SORT_ITEMS },
		]

		render(
			<Provider store={store}>
				<CalcDataConfirm />
			</Provider>
		)

		fireEvent.keyDown(screen.getByText('^'), { key: 'Space', code: 'Space' })
		fireEvent.keyDown(screen.getByText('^'), { key: 'Enter', code: 'Enter' })
		fireEvent.keyDown(screen.getByText('^'), {
			key: 'ArrowDown',
			code: 'ArrowDown',
		})
		expect(store.getActions()).toEqual(expectedActions)
	})

	test('should dispatch an action on "Search items" On Change', () => {
		const expectedActions = [
			{ type: CalcActionTypes.SEARCH_ITEMS, payload: '1' },
			{ type: CalcActionTypes.SEARCH_ITEMS, payload: '3' },
		]

		render(
			<Provider store={store}>
				<CalcDataConfirm />
			</Provider>
		)

		const inputItem = screen.getByPlaceholderText('Поиск')

		userEvent.type(inputItem, '1')
		userEvent.type(inputItem, '3')

		expect(store.getActions()).toEqual(expectedActions)
	})
})
