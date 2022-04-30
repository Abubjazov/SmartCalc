import { NavLink } from 'react-router-dom'
import { useActions } from '../../hooks/useActions'

import { useTypedSelector } from '../../hooks/useTypedSelector'

import { Logo } from '../Logo/Logo'

import './Header.scss'

export const Header = (): JSX.Element => {
	const { token } = useTypedSelector(state => state.auth)

	const { deleteToken } = useActions()

	return (
		<header className='header'>
			<Logo />
			<nav className='header-menu'>
				<ul>
					<li>
						<NavLink aria-label='На главную' end to='/smartcalc/'>
							Главная
						</NavLink>
					</li>

					{token && (
						<li>
							<NavLink aria-label='Калькулятор' to='/smartcalc/calc'>
								Калькулятор
							</NavLink>
						</li>
					)}
				</ul>
			</nav>
			<div className='in-out'>
				{token && <button onClick={deleteToken}>Выйти</button>}
				{!token && (
					<NavLink aria-label='Войти' to='/smartcalc/login'>
						Войти
					</NavLink>
				)}
			</div>
		</header>
	)
}
