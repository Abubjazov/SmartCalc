import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../store'

import { App } from './App'

describe('Component: App', () => {
	test('should render App', () => {
		const { asFragment } = render(
			<Provider store={store}>
				<App />
			</Provider>
		)
		expect(asFragment()).toMatchSnapshot()
	})
})
