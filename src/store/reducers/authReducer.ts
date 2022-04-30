import { AuthAction, AuthActionTypes, AuthState } from '../../interfaces'

const authDataString = localStorage.getItem('smartcalc_token')
const authData = authDataString ? JSON.parse(authDataString) : null

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

		default:
			return state
	}
}
