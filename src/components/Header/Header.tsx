import { NavLink } from 'react-router-dom'

import './Header.scss'

export const Header = (): JSX.Element => (
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

				<li>
					<NavLink
						aria-label='Go to login page'
						to='/smartcalc/login'
						style={({ isActive }) => ({ color: isActive ? '#696969' : '' })}
					>
						Login
					</NavLink>
				</li>
			</ul>
		</nav>
	</header>
)
