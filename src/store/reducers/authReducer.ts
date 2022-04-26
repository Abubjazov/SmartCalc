import { AuthAction, AuthActionTypes, AuthState } from '../../interfaces'

export const initialState: AuthState = {
	token: null,
	name: '',
	email: '',
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

		default:
			return state
	}
}
