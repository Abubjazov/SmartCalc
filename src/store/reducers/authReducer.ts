import { AuthAction, AuthActionTypes, AuthState } from '../../interfaces'
import { convertAuthData } from '../../utils/utils'

const authDataString = localStorage.getItem('smartcalc_token')
const authData = convertAuthData(authDataString)

export const initialState: AuthState = {
	token: authData?.token || null,
	name: authData?.name || '',
	email: authData?.email || '',
	status: 'waiting',
	error: null,
}

export const authReducer = (
	state: AuthState = initialState,
	action: AuthAction
): AuthState => {
	switch (action.type) {
		case AuthActionTypes.FETCH_TOKEN:
			return {
				...state,
				status: 'loading',
				error: null,
			}

		case AuthActionTypes.FETCH_TOKEN_SUCCESS:
			return {
				...state,
				status: 'waiting',
				token: action.payload.token,
				name: action.payload.name,
				email: action.payload.email,
			}

		case AuthActionTypes.FETCH_TOKEN_ERROR:
			return {
				...state,
				status: 'error',
				error: action.payload,
			}

		case AuthActionTypes.DELETE_TOKEN:
			return {
				...state,
				status: 'loading',
				error: null,
			}

		case AuthActionTypes.DELETE_TOKEN_SUCCESS:
			return {
				...state,
				status: 'waiting',
				token: null,
				name: '',
				email: '',
			}

		case AuthActionTypes.DELETE_TOKEN_ERROR:
			return {
				...state,
				status: 'error',
				error: action.payload,
			}

		case AuthActionTypes.CLEAR_ERROR:
			return {
				...state,
				status: 'waiting',
				error: null,
			}

		default:
			return state
	}
}
