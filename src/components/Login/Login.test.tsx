import { render } from '@testing-library/react'

import { Login } from './Login'

describe('Component: Login', () => {
	test('should render Login', () => {
		const { asFragment } = render(<Login />)

		expect(asFragment()).toMatchSnapshot()
	})
})
