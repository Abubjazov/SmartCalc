export enum CalcActionTypes {
	FETCH_CURRENT_STATE = 'FETCH_CURRENT_STATE',
	FETCH_CURRENT_STATE_SUCCESS = 'FETCH_CURRENT_STATE_SUCCESS',
	FETCH_CURRENT_STATE_ERROR = 'FETCH_CURRENT_STATE_ERROR',
}

export interface InputItems {
	key: string
	value: string
}

export interface UserState {
	items: number[]
	step: number
}

export interface CalcState {
	items: number[]
	inputItems: InputItems[]
	sortedItems: number[]
	sortDirection: boolean
	searchString: string
	status: 'waiting' | 'error' | 'loading'
	step: number
	error: null | string
}

interface FetchCurrentStateAction {
	type: CalcActionTypes.FETCH_CURRENT_STATE
}

interface FetchCurrentStateSuccessAction {
	type: CalcActionTypes.FETCH_CURRENT_STATE_SUCCESS
	payload: UserState
}

interface FetchCurrentStateErrorAction {
	type: CalcActionTypes.FETCH_CURRENT_STATE_ERROR
	payload: string
}

export type CalcAction =
	| FetchCurrentStateAction
	| FetchCurrentStateSuccessAction
	| FetchCurrentStateErrorAction
