import errorGif from './Error.gif'

export const ErrorGif = (): JSX.Element => (
	<img
		style={{
			display: 'block',
			width: '128px',
			height: '102px',
			objectFit: 'contain',
			margin: '0 auto',
		}}
		src={errorGif}
		alt='An error has occurred'
	/>
)
