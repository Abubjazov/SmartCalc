import { NavLink } from 'react-router-dom'
import './ErrorMessage.scss'

export interface ErrorMessageProps {
	errorMessage: string | null
}

export const ErrorMessage = ({
	errorMessage,
}: ErrorMessageProps): JSX.Element => (
	<div role='alert' className='error-message'>
		<p className='error-message-p' tabIndex={0}>
			{errorMessage?.split('*')[0]}
		</p>
		<p className='error-message-p' tabIndex={0}>
			{errorMessage?.split('*')[1].split('>>')[0]}
		</p>

		<NavLink className='error-message-a' to='/smartcalc/'>
			Вернуться на главную
		</NavLink>
	</div>
)
