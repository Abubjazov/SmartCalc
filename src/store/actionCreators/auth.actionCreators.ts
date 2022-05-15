import axios from 'axios'
import { Dispatch } from 'redux'

import { AuthAction, AuthActionTypes, AuthData } from '../../interfaces'

export const fetchToken = (authData: AuthData): any => {
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
		} catch (error: any) {
			dispatch({
				type: AuthActionTypes.FETCH_TOKEN_ERROR,
				payload: `Извините, произошла ошибка при попытке аутентификации пользователя! Попробуйте повторить попытку позже.*Описание ошибки: ${
					error?.message + '>>' + error?.response?.data?.error
				}`,
			})
		}
	}
}

export const deleteToken = (): any => {
	return async (dispatch: Dispatch<AuthAction>) => {
		try {
			dispatch({ type: AuthActionTypes.DELETE_TOKEN })

			localStorage.removeItem('smartcalc_token')

			dispatch({
				type: AuthActionTypes.DELETE_TOKEN_SUCCESS,
			})
		} catch (error: any) {
			dispatch({
				type: AuthActionTypes.DELETE_TOKEN_ERROR,
				payload: `Извините, произошла ошибка при попытке удаления токена! Попробуйте повторить попытку.*Описание ошибки: ${
					error?.message + '>>' + error?.response?.data?.error
				}`,
			})
		}
	}
}

export const clearError = (): any => {
	return async (dispatch: Dispatch<AuthAction>) => {
		dispatch({ type: AuthActionTypes.CLEAR_ERROR })
	}
}
