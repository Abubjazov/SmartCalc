import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import { Page404 } from './Page404'

describe('Component: Page404', () => {
	test('should render Page404', () => {
		const { asFragment } = render(
			<BrowserRouter>
				<Page404 />
			</BrowserRouter>
		)
		expect(asFragment()).toMatchSnapshot()
	})
})
