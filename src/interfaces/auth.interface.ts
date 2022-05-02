export enum AuthActionTypes {
	FETCH_TOKEN = 'FETCH_TOKEN',
	FETCH_TOKEN_SUCCESS = 'FETCH_TOKEN_SUCCESS',
	FETCH_TOKEN_ERROR = 'FETCH_TOKEN_ERROR',

	DELETE_TOKEN = 'DELETE_TOKEN',
	DELETE_TOKEN_SUCCESS = 'DELETE_TOKEN_SUCCESS',
	DELETE_TOKEN_ERROR = 'DELETE_TOKEN_ERROR',

	CLEAR_ERROR = 'CLEAR_ERROR',
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

interface DeleteTokenAction {
	type: AuthActionTypes.DELETE_TOKEN
}

interface DeleteTokenSuccessAction {
	type: AuthActionTypes.DELETE_TOKEN_SUCCESS
}

interface DeleteTokenErrorAction {
	type: AuthActionTypes.DELETE_TOKEN_ERROR
	payload: string
}

interface ClearErrorAction {
	type: AuthActionTypes.CLEAR_ERROR
}

export type AuthAction =
	| FetchTokenAction
	| FetchTokenSuccessAction
	| FetchTokenErrorAction
	| DeleteTokenAction
	| DeleteTokenSuccessAction
	| DeleteTokenErrorAction
	| ClearErrorAction
