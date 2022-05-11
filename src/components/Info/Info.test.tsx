import { render } from '@testing-library/react'

import { Info } from './Info'

describe('Component: Spinner', () => {
	test('should render Spinners', () => {
		const { asFragment } = render(<Info />)

		expect(asFragment()).toMatchSnapshot()
	})
})
