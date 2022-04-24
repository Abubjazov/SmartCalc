import { render } from '@testing-library/react'

import { Calculator } from './Calculator'

describe('Component: Calculator', () => {
	test('should render Calculator', () => {
		const { asFragment } = render(<Calculator />)

		expect(asFragment()).toMatchSnapshot()
	})
})
