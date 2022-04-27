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

	SORT_ITEMS = 'SORT_ITEMS',
	SEARCH_ITEMS = 'SEARCH_ITEMS',

	SWITCH_TO_DATAINPUT = 'SWITCH_TO_DATAINPUT',
	SWITCH_TO_DATAINPUT_SUCCESS = 'SWITCH_TO_DATAINPUT_SUCCESS',
	SWITCH_TO_DATAINPUT_ERROR = 'SWITCH_TO_DATAINPUT_ERROR',

	SWITCH_TO_RESULT = 'SWITCH_TO_RESULT',
	SWITCH_TO_RESULT_SUCCESS = 'SWITCH_TO_RESULT_SUCCESS',
	SWITCH_TO_RESULT_ERROR = 'SWITCH_TO_RESULT_ERROR',

	RESET_TO_DATA_INPUT = 'RESET_TO_DATA_INPUT',
	RESET_TO_DATA_INPUT_SUCCESS = 'RESET_TO_DATA_INPUT_SUCCESS',
	RESET_TO_DATA_INPUT_ERROR = 'RESET_TO_DATA_INPUT_ERROR',

	RESET_TO_NEW_CALCULATION = 'RESET_TO_NEW_CALCULATION',
	RESET_TO_NEW_CALCULATION_SUCCESS = 'RESET_TO_NEW_CALCULATION_SUCCESS',
	RESET_TO_NEW_CALCULATION_ERROR = 'RESET_TO_NEW_CALCULATION_ERROR',
}

export interface InputItem {
	key: string
	value: string
}

export interface CalcReceivedData {
	items: number[]
	step: number
}

export interface CalcResultData extends CalcReceivedData {
	summary: number
}

export interface CalcState {
	items: number[]
	inputItems: InputItem[]
	sortedItems: number[]
	sortDirection: boolean
	searchString: string
	status: 'waiting' | 'error' | 'loading'
	step: number
	summary: number
	error: null | string
}

interface FetchCurrentStateAction {
	type: CalcActionTypes.FETCH_CURRENT_STATE
	payload: string
}

interface FetchCurrentStateSuccessAction {
	type: CalcActionTypes.FETCH_CURRENT_STATE_SUCCESS
	payload: CalcReceivedData
}

interface FetchCurrentStateErrorAction {
	type: CalcActionTypes.FETCH_CURRENT_STATE_ERROR
	payload: string
}

interface SwitchToConfirmAction {
	type: CalcActionTypes.SWITCH_TO_CONFIRM
	payload: { items: number[]; token: string | null }
}

interface SwitchToConfirmSuccessAction {
	type: CalcActionTypes.SWITCH_TO_CONFIRM_SUCCESS
	payload: CalcReceivedData
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

interface SortItemsAction {
	type: CalcActionTypes.SORT_ITEMS
}

interface SearchItemsAction {
	type: CalcActionTypes.SEARCH_ITEMS
	payload: string
}

interface SwitchToDataInputAction {
	type: CalcActionTypes.SWITCH_TO_DATAINPUT
	payload: string | null
}

interface SwitchToDataInputSuccessAction {
	type: CalcActionTypes.SWITCH_TO_DATAINPUT_SUCCESS
	payload: CalcReceivedData
}

interface SwitchToDataInputErrorAction {
	type: CalcActionTypes.SWITCH_TO_DATAINPUT_ERROR
	payload: string
}

interface SwitchToResultAction {
	type: CalcActionTypes.SWITCH_TO_RESULT
	payload: string | null
}

interface SwitchToResultSuccessAction {
	type: CalcActionTypes.SWITCH_TO_RESULT_SUCCESS
	payload: CalcResultData
}

interface SwitchToResultErrorAction {
	type: CalcActionTypes.SWITCH_TO_RESULT_ERROR
	payload: string
}

interface ResetToDataInputAction {
	type: CalcActionTypes.RESET_TO_DATA_INPUT
	payload: string | null
}

interface ResetToDataInputSuccessAction {
	type: CalcActionTypes.RESET_TO_DATA_INPUT_SUCCESS
	payload: CalcReceivedData
}

interface ResetToDataInputErrorAction {
	type: CalcActionTypes.RESET_TO_DATA_INPUT_ERROR
	payload: string
}

interface ResetToNewCalculationAction {
	type: CalcActionTypes.RESET_TO_NEW_CALCULATION
	payload: string | null
}

interface ResetToNewCalculationSuccessAction {
	type: CalcActionTypes.RESET_TO_NEW_CALCULATION_SUCCESS
	payload: CalcReceivedData
}

interface ResetToNewCalculationErrorAction {
	type: CalcActionTypes.RESET_TO_NEW_CALCULATION_ERROR
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
	| SortItemsAction
	| SearchItemsAction
	| SwitchToDataInputAction
	| SwitchToDataInputSuccessAction
	| SwitchToDataInputErrorAction
	| SwitchToResultAction
	| SwitchToResultSuccessAction
	| SwitchToResultErrorAction
	| ResetToDataInputAction
	| ResetToDataInputSuccessAction
	| ResetToDataInputErrorAction
	| ResetToNewCalculationAction
	| ResetToNewCalculationSuccessAction
	| ResetToNewCalculationErrorAction
