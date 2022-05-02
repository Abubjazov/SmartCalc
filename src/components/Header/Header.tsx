import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useActions } from '../../hooks/useActions'

import { useTypedSelector } from '../../hooks/useTypedSelector'

import { Logo } from '../Logo/Logo'

import './Header.scss'

export const Header = (): JSX.Element => {
	const [active, setActive] = useState<boolean>(false)

	const { token } = useTypedSelector(state => state.auth)

	const { deleteToken } = useActions()

	const navigate = useNavigate()

	const hamburgerClickHandler = () => {
		const windowInnerWidth: number = window.innerWidth

		if (windowInnerWidth < 790) {
			setActive(!active)
		} else {
			setActive(false)
		}
	}

	return (
		<header className='header'>
			<Logo />
			<nav
				className={active ? 'header-menu header-menu_active' : 'header-menu'}
			>
				<div
					className={active ? 'hamburger hamburger_active' : 'hamburger'}
					onClick={hamburgerClickHandler}
				>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<ul>
					<li>
						<NavLink
							aria-label='На главную'
							end
							to='/smartcalc/'
							onClick={hamburgerClickHandler}
						>
							Главная
						</NavLink>
					</li>

					{token && (
						<li>
							<NavLink
								aria-label='Калькулятор'
								to='/smartcalc/calc'
								onClick={hamburgerClickHandler}
							>
								Калькулятор
							</NavLink>
						</li>
					)}
				</ul>
			</nav>
			<div className='in-out'>
				{token && <button onClick={deleteToken}>Выйти</button>}
				{!token && (
					<button onClick={() => navigate('/smartcalc/login')}>Войти</button>
				)}
			</div>
		</header>
	)
}
