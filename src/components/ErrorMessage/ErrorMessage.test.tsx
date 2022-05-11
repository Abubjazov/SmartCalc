import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import { ErrorMessage } from './ErrorMessage'

describe('Component: ErrorMessage', () => {
	test('should render ErrorMessage', () => {
		const { asFragment } = render(
			<BrowserRouter>
				<ErrorMessage
					errorMessage={
						'Test Error String*Test Error String 2>>Test Error String 3'
					}
				/>
			</BrowserRouter>
		)

		expect(asFragment()).toMatchSnapshot()
	})
})
