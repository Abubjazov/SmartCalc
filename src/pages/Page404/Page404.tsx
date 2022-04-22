import { ErrorGif } from '../../components'

export const Page404 = (): JSX.Element => (
	<main
		style={{
			paddingTop: 200,
		}}
	>
		<ErrorGif />
		<p
			tabIndex={0}
			role='alert'
			style={{
				textAlign: 'center',
				fontWeight: 300,
				fontSize: 24,
				marginTop: 13,
				color: '#696969',
			}}
		>
			Page doesn't exist
		</p>
		<a
			href='/smartcalc/'
			role='alert'
			style={{
				display: 'block',
				textAlign: 'center',
				fontWeight: 300,
				fontSize: 24,
				marginTop: 31,
				color: '#ff8c00',
			}}
		>
			Back to main page
		</a>
	</main>
)
