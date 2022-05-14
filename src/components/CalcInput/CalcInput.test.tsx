import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { CalcInput } from './CalcInput'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('Component: CalcInput', () => {
	test('should render CalcInput default', () => {
		const store = mockStore({})

		const { asFragment } = render(
			<Provider store={store}>
				<CalcInput itemKey='a13key1' itemValue='' submitStatus={null} />
			</Provider>
		)

		expect(asFragment()).toMatchSnapshot()

		userEvent.tab()

		expect(asFragment()).toMatchSnapshot()

		userEvent.tab()

		expect(asFragment()).toMatchSnapshot()
	})

	test('should render CalcInput input value, submitStatus is null', () => {
		const store = mockStore({
			calc: { inputItems: [{ key: 'a13key1', value: '' }] },
		})

		const { asFragment } = render(
			<Provider store={store}>
				<CalcInput itemKey='a13key1' itemValue='' submitStatus={null} />
			</Provider>
		)
		const inputItem = screen.getByPlaceholderText('Введите число')

		userEvent.type(inputItem, '1')

		expect(asFragment()).toMatchSnapshot()

		userEvent.type(inputItem, '13')

		expect(asFragment()).toMatchSnapshot()
	})

	test('should render CalcInput input value, submitStatus is true', () => {
		const store = mockStore({
			calc: { inputItems: [{ key: 'a13key1', value: '' }] },
		})

		const { asFragment } = render(
			<Provider store={store}>
				<CalcInput itemKey='a13key1' itemValue='' submitStatus={true} />
			</Provider>
		)
		const inputItem = screen.getByPlaceholderText('Введите число')

		userEvent.type(inputItem, '1')

		expect(asFragment()).toMatchSnapshot()
	})
})
