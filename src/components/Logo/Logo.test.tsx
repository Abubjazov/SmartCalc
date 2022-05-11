import { render } from '@testing-library/react'

import { Logo } from './Logo'

describe('Component: Spinner', () => {
	test('should render Spinners', () => {
		const { asFragment } = render(<Logo />)

		expect(asFragment()).toMatchSnapshot()
	})
})
