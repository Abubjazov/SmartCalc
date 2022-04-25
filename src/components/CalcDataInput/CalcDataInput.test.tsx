import { render } from '@testing-library/react'

import { CalcDataInput } from './CalcDataInput'

describe('Component: Calculator', () => {
	test('should render Calculator', () => {
		const { asFragment } = render(<CalcDataInput />)

		expect(asFragment()).toMatchSnapshot()
	})
})
