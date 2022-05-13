import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { CalcPage } from './CalcPage'

import { inputItemsInitValue } from '../../store/reducers/calcReducer'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('Component: CalcPage', () => {
	test('should render CalcPage default', () => {
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
				<BrowserRouter>
					<CalcPage />
				</BrowserRouter>
			</Provider>
		)

		expect(asFragment()).toMatchSnapshot()
	})
})
