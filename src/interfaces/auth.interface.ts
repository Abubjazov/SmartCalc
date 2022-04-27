export enum AuthActionTypes {
	FETCH_TOKEN = 'FETCH_TOKEN',
	FETCH_TOKEN_SUCCESS = 'FETCH_TOKEN_SUCCESS',
	FETCH_TOKEN_ERROR = 'FETCH_TOKEN_ERROR',
}

export interface AuthData {
	email: string
	password: string
}

export interface UserData {
	token: string
	name: string
	email: string
}

export interface AuthState {
	token: null | string
	name: string
	email: string
	status: 'waiting' | 'error' | 'loading'
	error: null | string
}

interface FetchTokenAction {
	type: AuthActionTypes.FETCH_TOKEN
	payload: AuthData
}

interface FetchTokenSuccessAction {
	type: AuthActionTypes.FETCH_TOKEN_SUCCESS
	payload: UserData
}

interface FetchTokenErrorAction {
	type: AuthActionTypes.FETCH_TOKEN_ERROR
	payload: string
}

export type AuthAction =
	| FetchTokenAction
	| FetchTokenSuccessAction
	| FetchTokenErrorAction
