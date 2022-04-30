import axios from 'axios'
import { Dispatch } from 'redux'

import { AuthAction, AuthActionTypes, AuthData } from '../../interfaces'

export const fetchToken = (authData: AuthData) => {
	return async (dispatch: Dispatch<AuthAction>) => {
		try {
			dispatch({ type: AuthActionTypes.FETCH_TOKEN, payload: authData })

			const response = await axios.post(
				process.env.REACT_APP_BASE_URL + 'auth/login',
				authData
			)

			dispatch({
				type: AuthActionTypes.FETCH_TOKEN_SUCCESS,
				payload: response.data,
			})

			localStorage.setItem('smartcalc_token', JSON.stringify(response.data))
		} catch (error) {
			dispatch({
				type: AuthActionTypes.FETCH_TOKEN_ERROR,
				payload: `Authentication error!*${error}`,
			})
		}
	}
}

export const deleteToken = () => {
	return async (dispatch: Dispatch<AuthAction>) => {
		try {
			dispatch({ type: AuthActionTypes.DELETE_TOKEN })

			localStorage.removeItem('smartcalc_token')

			dispatch({
				type: AuthActionTypes.DELETE_TOKEN_SUCCESS,
			})
		} catch (error) {
			dispatch({
				type: AuthActionTypes.FETCH_TOKEN_ERROR,
				payload: `Delete token error!*${error}`,
			})
		}
	}
}
