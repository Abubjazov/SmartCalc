import { NavLink } from 'react-router-dom'
import { useTypedSelector } from '../../hooks/useTypedSelector'

import './Header.scss'

export const Header = (): JSX.Element => {
	const { token } = useTypedSelector(state => state.auth)

	return (
		<header className='header'>
			<h1>
				SMART<span>C</span>
			</h1>

			<nav className='header-menu'>
				<ul>
					<li>
						<NavLink
							aria-label='Go to main page'
							end
							to='/smartcalc/'
							style={({ isActive }) => ({ color: isActive ? '#696969' : '' })}
						>
							Main
						</NavLink>
					</li>

					{token ? (
						<li>
							<NavLink
								aria-label='Go to calc page'
								to='/smartcalc/calc'
								style={({ isActive }) => ({ color: isActive ? '#696969' : '' })}
							>
								Calc
							</NavLink>
						</li>
					) : (
						<li>
							<NavLink
								aria-label='Go to login page'
								to='/smartcalc/login'
								style={({ isActive }) => ({ color: isActive ? '#696969' : '' })}
							>
								Login
							</NavLink>
						</li>
					)}
				</ul>
			</nav>
		</header>
	)
}
