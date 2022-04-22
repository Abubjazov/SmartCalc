import { render } from '@testing-library/react'

import { ErrorGif } from './ErrorGif'

describe('Component: ErrorGif', () => {
	test('should render ErrorGif', () => {
		const { asFragment } = render(<ErrorGif />)
		expect(asFragment()).toMatchSnapshot()
	})
})
