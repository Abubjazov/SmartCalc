import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { CalcActionTypes } from '../../interfaces'
import { CalcDataInput } from './CalcDataInput'

const mockStore = configureStore()

describe('Component: CalcDataInput', () => {
	test('should render CalcDataInput by default', () => {
		const store = mockStore({
			calc: {
				inputItems: [
					{ key: 'a13key1', value: '' },
					{ key: 'a13key2', value: '' },
				],
			},
			auth: {
				token: 'testtoken',
			},
		})

		const { asFragment } = render(
			<Provider store={store}>
				<CalcDataInput />
			</Provider>
		)

		expect(asFragment()).toMatchSnapshot()
	})

	test('should render CalcDataInput with added items < 10', () => {
		const store = mockStore({
			calc: {
				inputItems: [
					{ key: 'a13key1', value: '1' },
					{ key: 'a13key2', value: '2' },
					{ key: 'a13key3', value: '3' },
				],
			},
			auth: {
				token: 'testtoken',
			},
		})

		const { asFragment } = render(
			<Provider store={store}>
				<CalcDataInput />
			</Provider>
		)

		expect(asFragment()).toMatchSnapshot()
	})

	test('should render CalcDataInput with added items > 10', () => {
		const store = mockStore({
			calc: {
				inputItems: [
					{ key: 'a13key1', value: '1' },
					{ key: 'a13key2', value: '2' },
					{ key: 'a13key3', value: '3' },
					{ key: 'a13key4', value: '4' },
					{ key: 'a13key5', value: '5' },
					{ key: 'a13key6', value: '6' },
					{ key: 'a13key7', value: '7' },
					{ key: 'a13key8', value: '8' },
					{ key: 'a13key9', value: '9' },
					{ key: 'a13key10', value: '10' },
					{ key: 'a13key11', value: '11' },
				],
			},
			auth: {
				token: 'testtoken',
			},
		})

		const { asFragment } = render(
			<Provider store={store}>
				<CalcDataInput />
			</Provider>
		)

		expect(asFragment()).toMatchSnapshot()
	})

	test('should dispatch an action on "Remove item" Button Click', () => {
		const middlewares = [thunk]
		const mockStore = configureStore(middlewares)

		let store = mockStore({
			calc: {
				inputItems: [
					{ key: 'a13key1', value: '1' },
					{ key: 'a13key2', value: '2' },
					{ key: 'a13key3', value: '3' },
				],
			},
			auth: {
				token: 'testtoken',
			},
		})

		const expectedActions = [
			{ type: CalcActionTypes.REMOVE_INPUT_ITEM, payload: 'a13key3' },
		]

		render(
			<Provider store={store}>
				<CalcDataInput />
			</Provider>
		)

		userEvent.click(screen.getByText('-'))
		expect(store.getActions()).toEqual(expectedActions)
	})

	test('should dispatch an action on "Add item" Button Click', () => {
		const middlewares = [thunk]
		const mockStore = configureStore(middlewares)

		let store = mockStore({
			calc: {
				inputItems: [
					{ key: 'a13key1', value: '1' },
					{ key: 'a13key2', value: '2' },
				],
			},
			auth: {
				token: 'testtoken',
			},
		})

		const expectedActions = CalcActionTypes.ADD_INPUT_ITEM

		render(
			<Provider store={store}>
				<CalcDataInput />
			</Provider>
		)

		userEvent.click(screen.getByText('+'))
		expect(store.getActions()[0].type).toEqual(expectedActions)
	})

	test('should dispatch an action on "Remove item" Key Down', () => {
		const middlewares = [thunk]
		const mockStore = configureStore(middlewares)

		let store = mockStore({
			calc: {
				inputItems: [
					{ key: 'a13key1', value: '1' },
					{ key: 'a13key2', value: '2' },
					{ key: 'a13key3', value: '3' },
				],
			},
			auth: {
				token: 'testtoken',
			},
		})

		const expectedActions = [
			{ type: CalcActionTypes.REMOVE_INPUT_ITEM, payload: 'a13key3' },
			{ type: CalcActionTypes.REMOVE_INPUT_ITEM, payload: 'a13key3' },
		]

		render(
			<Provider store={store}>
				<CalcDataInput />
			</Provider>
		)

		fireEvent.keyDown(screen.getByText('-'), { key: 'Space', code: 'Space' })
		fireEvent.keyDown(screen.getByText('-'), { key: 'Enter', code: 'Enter' })
		fireEvent.keyDown(screen.getByText('-'), {
			key: 'ArrowDown',
			code: 'ArrowDown',
		})
		expect(store.getActions()).toEqual(expectedActions)
	})

	test('should dispatch an action on "Add item" Key Down', () => {
		const middlewares = [thunk]
		const mockStore = configureStore(middlewares)

		let store = mockStore({
			calc: {
				inputItems: [
					{ key: 'a13key1', value: '1' },
					{ key: 'a13key2', value: '2' },
				],
			},
			auth: {
				token: 'testtoken',
			},
		})

		const expectedActions = CalcActionTypes.ADD_INPUT_ITEM

		render(
			<Provider store={store}>
				<CalcDataInput />
			</Provider>
		)

		fireEvent.keyDown(screen.getByText('+'), { key: 'Space', code: 'Space' })
		expect(store.getActions()[0].type).toEqual(expectedActions)

		fireEvent.keyDown(screen.getByText('+'), { key: 'Enter', code: 'Enter' })
		expect(store.getActions()[1].type).toEqual(expectedActions)

		fireEvent.keyDown(screen.getByText('+'), {
			key: 'ArrowDown',
			code: 'ArrowDown',
		})
		expect(store.getActions().length).toEqual(2)
	})

	test('should dispatch an action on "Next" Button Click, SubmitStatus is TRUE', () => {
		const middlewares = [thunk]
		const mockStore = configureStore(middlewares)

		let store = mockStore({
			calc: {
				inputItems: [
					{ key: 'a13key1', value: '1' },
					{ key: 'a13key2', value: '2' },
				],
			},
			auth: {
				token: 'testtoken',
			},
		})

		const expectedActions = [
			{
				type: CalcActionTypes.SWITCH_TO_CONFIRM,
				payload: { items: [1, 2], token: 'testtoken' },
			},
		]

		render(
			<Provider store={store}>
				<CalcDataInput />
			</Provider>
		)

		userEvent.click(screen.getByText('Далее'))
		expect(store.getActions()).toEqual(expectedActions)
	})

	test('should dispatch an action on "Next" Button Click, SubmitStatus is FALSE', () => {
		const middlewares = [thunk]
		const mockStore = configureStore(middlewares)

		let store = mockStore({
			calc: {
				inputItems: [
					{ key: 'a13key1', value: '' },
					{ key: 'a13key2', value: '' },
				],
			},
			auth: {
				token: 'testtoken',
			},
		})

		const expectedActions: {
			type: CalcActionTypes
			payload: {
				items: number[]
				token: string
			}
		}[] = []

		render(
			<Provider store={store}>
				<CalcDataInput />
			</Provider>
		)

		userEvent.click(screen.getByText('Далее'))
		expect(store.getActions()).toEqual(expectedActions)
	})
})
