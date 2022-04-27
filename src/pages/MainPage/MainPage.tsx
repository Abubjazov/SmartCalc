import { NavLink } from 'react-router-dom'

import { useTypedSelector } from '../../hooks/useTypedSelector'

import './MainPage.scss'

export const MainPage = (): JSX.Element => {
	const { token } = useTypedSelector(state => state.auth)
	return (
		<main className='main-page'>
			{/* <PageMarker pageName='main' /> */}

			<div className='container'>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat autem
					dolores veritatis aliquid! Id accusamus rerum tempora dolor non. Sed
					ea molestias consequuntur ipsa totam est eos eum illo sapiente. Lorem,
					ipsum dolor sit amet consectetur adipisicing elit. Sapiente qui magnam
					similique impedit? Quos tempore omnis reiciendis similique possimus
					dicta placeat consequuntur laudantium, nobis qui ipsum optio saepe eos
					libero. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Sapiente qui magnam similique impedit? Quos tempore omnis reiciendis
					similique possimus dicta placeat consequuntur laudantium, nobis qui
					ipsum optio saepe eos libero.
				</p>

				{token ? (
					<NavLink to='/smartcalc/calc'>Calc</NavLink>
				) : (
					<NavLink to='/smartcalc/login'>Login</NavLink>
				)}
			</div>
		</main>
	)
}
