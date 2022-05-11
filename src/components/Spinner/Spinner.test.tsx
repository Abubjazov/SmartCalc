import { render } from '@testing-library/react'

import { Spinner } from './Spinner'

describe('Component: Spinner', () => {
	test('should render Spinners', () => {
		const { asFragment } = render(<Spinner />)

		expect(asFragment()).toMatchSnapshot()
	})
})
