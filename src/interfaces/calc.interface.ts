export enum CalcActionTypes {
	FETCH_CURRENT_STATE = 'FETCH_CURRENT_STATE',
	FETCH_CURRENT_STATE_SUCCESS = 'FETCH_CURRENT_STATE_SUCCESS',
	FETCH_CURRENT_STATE_ERROR = 'FETCH_CURRENT_STATE_ERROR',

	SWITCH_TO_CONFIRM = 'SWITCH_TO_CONFIRM',
	SWITCH_TO_CONFIRM_SUCCESS = 'SWITCH_TO_CONFIRM_SUCCESS',
	SWITCH_TO_CONFIRM_ERROR = 'SWITCH_TO_CONFIRM_ERROR',

	CHANGE_INPUT_ITEM = 'CHANGE_INPUT_ITEM',
	ADD_INPUT_ITEM = 'ADD_INPUT_ITEM',
	REMOVE_INPUT_ITEM = 'REMOVE_INPUT_ITEM',
}

export interface InputItem {
	key: string
	value: string
}

export interface UserState {
	items: number[]
	step: number
}

export interface CalcState {
	items: number[]
	inputItems: InputItem[]
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

interface SwitchToConfirmAction {
	type: CalcActionTypes.SWITCH_TO_CONFIRM
}

interface SwitchToConfirmSuccessAction {
	type: CalcActionTypes.SWITCH_TO_CONFIRM_SUCCESS
	payload: UserState
}

interface SwitchToConfirmErrorAction {
	type: CalcActionTypes.SWITCH_TO_CONFIRM_ERROR
	payload: string
}

interface ChangeInputItemAction {
	type: CalcActionTypes.CHANGE_INPUT_ITEM
	payload: InputItem
}

interface AddInputItemAction {
	type: CalcActionTypes.ADD_INPUT_ITEM
	payload: InputItem
}

interface RemoveInputItemAction {
	type: CalcActionTypes.REMOVE_INPUT_ITEM
	payload: string
}

export type CalcAction =
	| FetchCurrentStateAction
	| FetchCurrentStateSuccessAction
	| FetchCurrentStateErrorAction
	| SwitchToConfirmAction
	| SwitchToConfirmSuccessAction
	| SwitchToConfirmErrorAction
	| ChangeInputItemAction
	| AddInputItemAction
	| RemoveInputItemAction
