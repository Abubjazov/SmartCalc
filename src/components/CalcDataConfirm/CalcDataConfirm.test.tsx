import { render } from '@testing-library/react'
import { CalcDataConfirm } from './CalcDataConfirm'

describe('Component: Calculator', () => {
	test('should render Calculator', () => {
		const { asFragment } = render(<CalcDataConfirm />)

		expect(asFragment()).toMatchSnapshot()
	})
})
