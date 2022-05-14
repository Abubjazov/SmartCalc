import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { Calculator } from './Calculator'

import { inputItemsInitValue } from '../../store/reducers/calcReducer'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('Component: Calculator', () => {
	test('should render CalcDataInput with loading spinner', () => {
		const store = mockStore({
			auth: {
				token: 'testtoken',
				email: 'test@test.com',
			},
			calc: {
				step: 1,
				status: 'loading',
				error: null,
				inputItems: [...inputItemsInitValue],
			},
		})

		const { asFragment } = render(
			<Provider store={store}>
				<Calculator />
			</Provider>
		)

		expect(asFragment()).toMatchSnapshot()
	})

	test('should render CalcDataConfirm with loading spinner', () => {
		const store = mockStore({
			auth: {
				token: 'testtoken',
				email: 'test@test.com',
			},
			calc: {
				step: 2,
				status: 'loading',
				error: null,
				inputItems: [...inputItemsInitValue],
			},
		})

		const { asFragment } = render(
			<Provider store={store}>
				<Calculator />
			</Provider>
		)

		expect(asFragment()).toMatchSnapshot()
	})

	test('should render CalcDataResult with loading spinner', () => {
		const store = mockStore({
			auth: {
				token: 'testtoken',
				email: 'test@test.com',
			},
			calc: {
				step: 4,
				status: 'loading',
				error: null,
				inputItems: [...inputItemsInitValue],
			},
		})

		const { asFragment } = render(
			<Provider store={store}>
				<Calculator />
			</Provider>
		)

		expect(asFragment()).toMatchSnapshot()
	})

	test('should render CalcDataInput with error message', () => {
		const store = mockStore({
			auth: {
				token: 'testtoken',
				email: 'test@test.com',
			},
			calc: {
				step: 1,
				status: 'error',
				error: 'ERROR*Test Error String>>test',
				inputItems: [...inputItemsInitValue],
			},
		})

		const { asFragment } = render(
			<Provider store={store}>
				<BrowserRouter>
					<Calculator />
				</BrowserRouter>
			</Provider>
		)

		expect(asFragment()).toMatchSnapshot()
	})

	test('should render CalcDataConfirm with error message', () => {
		const store = mockStore({
			auth: {
				token: 'testtoken',
				email: 'test@test.com',
			},
			calc: {
				step: 2,
				status: 'error',
				error: 'ERROR*Test Error String>>test',
				inputItems: [...inputItemsInitValue],
			},
		})

		const { asFragment } = render(
			<Provider store={store}>
				<BrowserRouter>
					<Calculator />
				</BrowserRouter>
			</Provider>
		)

		expect(asFragment()).toMatchSnapshot()
	})

	test('should render CalcDataResult with error message', () => {
		const store = mockStore({
			auth: {
				token: 'testtoken',
				email: 'test@test.com',
			},
			calc: {
				step: 4,
				status: 'error',
				error: 'ERROR*Test Error String>>test',
				inputItems: [...inputItemsInitValue],
			},
		})

		const { asFragment } = render(
			<Provider store={store}>
				<BrowserRouter>
					<Calculator />
				</BrowserRouter>
			</Provider>
		)

		expect(asFragment()).toMatchSnapshot()
	})

	test('should render CalcDataInput', () => {
		const store = mockStore({
			auth: {
				token: 'testtoken',
				email: 'test@test.com',
			},
			calc: {
				step: 1,
				status: 'waiting',
				error: null,
				inputItems: [...inputItemsInitValue],
			},
		})

		const { asFragment } = render(
			<Provider store={store}>
				<Calculator />
			</Provider>
		)

		expect(asFragment()).toMatchSnapshot()
	})

	test('should render CalcDataConfirm', () => {
		const store = mockStore({
			auth: {
				token: 'testtoken',
				email: 'test@test.com',
			},
			calc: {
				step: 2,
				status: 'waiting',
				error: null,
				items: [1, 2, 3],
				sortedItems: [1, 2, 3],
				sortDirection: true,
				searchString: '',
				inputItems: [
					{ key: 'a13key1', value: '1' },
					{ key: 'a13key2', value: '2' },
					{ key: 'a13key3', value: '3' },
				],
			},
		})

		const { asFragment } = render(
			<Provider store={store}>
				<Calculator />
			</Provider>
		)

		expect(asFragment()).toMatchSnapshot()
	})

	test('should render CalcDataResult', () => {
		const store = mockStore({
			auth: {
				token: 'testtoken',
				email: 'test@test.com',
			},
			calc: {
				step: 4,
				status: 'waiting',
				error: null,
				items: [1, 2, 11],
				sortedItems: [1, 2, 11],
				sortDirection: true,
				searchString: '',
				inputItems: [
					{ key: 'a13key1', value: '1' },
					{ key: 'a13key2', value: '2' },
					{ key: 'a13key3', value: '11' },
				],
				summary: 14,
			},
		})

		const { asFragment } = render(
			<Provider store={store}>
				<Calculator />
			</Provider>
		)

		expect(asFragment()).toMatchSnapshot()
	})

	test('should render empty Calculator', () => {
		const store = mockStore({
			auth: {
				token: 'testtoken',
				email: 'test@test.com',
			},
			calc: {
				step: 3,
				status: 'waiting',
				error: null,
				inputItems: [...inputItemsInitValue],
			},
		})

		const { asFragment } = render(
			<Provider store={store}>
				<Calculator />
			</Provider>
		)

		expect(asFragment()).toMatchSnapshot()
	})
})
