import { render } from '@testing-library/react'
import { CalcDataResult } from './CalcDataResult'

describe('Component: Calculator', () => {
	test('should render Calculator', () => {
		const { asFragment } = render(<CalcDataResult />)

		expect(asFragment()).toMatchSnapshot()
	})
})
