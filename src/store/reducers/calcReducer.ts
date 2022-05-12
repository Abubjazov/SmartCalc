import { nanoid } from 'nanoid'

import { CalcAction, CalcActionTypes, CalcState } from '../../interfaces'
import { matchCheck, returnInputItems, returnSummary } from '../../utils/utils'

export const initialState: CalcState = {
	items: [],
	inputItems: [
		{ key: nanoid(), value: '' },
		{ key: nanoid(), value: '' },
	],
	sortedItems: [],
	sortDirection: false,
	searchString: '',
	status: 'waiting',
	step: 1,
	summary: 0,
	error: null,
}

export const calcReducer = (
	state: CalcState = initialState,
	action: CalcAction
): CalcState => {
	switch (action.type) {
		case CalcActionTypes.FETCH_CURRENT_STATE:
			return { ...state, status: 'loading', error: null }

		case CalcActionTypes.FETCH_CURRENT_STATE_SUCCESS:
			return {
				...state,
				status: 'waiting',
				items: action.payload.items,
				sortedItems: action.payload.items,
				step: action.payload.step,
				inputItems: returnInputItems(action.payload.items),
				summary: returnSummary(action.payload.items),
			}

		case CalcActionTypes.FETCH_CURRENT_STATE_ERROR:
			return {
				...state,
				status: 'error',
				error: action.payload,
			}

		case CalcActionTypes.SWITCH_TO_CONFIRM:
			return { ...state, status: 'loading', error: null }

		case CalcActionTypes.SWITCH_TO_CONFIRM_SUCCESS:
			return {
				...state,
				status: 'waiting',
				items: action.payload.items,
				sortedItems: action.payload.items,
				step: action.payload.step,
			}

		case CalcActionTypes.SWITCH_TO_CONFIRM_ERROR:
			return {
				...state,
				status: 'error',
				error: action.payload,
			}

		case CalcActionTypes.ADD_INPUT_ITEM:
			return {
				...state,
				inputItems: [...state.inputItems, action.payload],
			}

		case CalcActionTypes.CHANGE_INPUT_ITEM:
			return {
				...state,
				inputItems: state.inputItems.map(item => {
					if (item.key === action.payload.key) {
						item.value = action.payload.value
					}
					return item
				}),
			}

		case CalcActionTypes.REMOVE_INPUT_ITEM:
			return {
				...state,
				inputItems: state.inputItems.filter(
					item => item.key !== action.payload
				),
			}

		case CalcActionTypes.SORT_ITEMS:
			return {
				...state,
				sortedItems: state.sortDirection
					? state.sortedItems.sort((a, b) => a - b)
					: state.sortedItems.sort((a, b) => b - a),
				sortDirection: !state.sortDirection,
			}

		case CalcActionTypes.SEARCH_ITEMS:
			return {
				...state,
				searchString: action.payload,
				sortedItems: state.items.filter(item =>
					matchCheck(item, action.payload)
				),
			}

		case CalcActionTypes.SWITCH_TO_DATAINPUT:
			return { ...state, status: 'loading', error: null }

		case CalcActionTypes.SWITCH_TO_DATAINPUT_SUCCESS:
			return {
				...state,
				status: 'waiting',
				items: action.payload.items,
				searchString: '',
				sortedItems: action.payload.items,
				step: action.payload.step,
				inputItems: [
					{ key: 'a13key1', value: '' },
					{ key: 'a13key2', value: '' },
				],
			}

		case CalcActionTypes.SWITCH_TO_DATAINPUT_ERROR:
			return {
				...state,
				status: 'error',
				error: action.payload,
			}

		case CalcActionTypes.SWITCH_TO_RESULT:
			return { ...state, status: 'loading', error: null }

		case CalcActionTypes.SWITCH_TO_RESULT_SUCCESS:
			return {
				...state,
				status: 'waiting',
				items: action.payload.items,
				searchString: '',
				sortedItems: action.payload.items,
				step: action.payload.step,
				summary: action.payload.summary,
			}

		case CalcActionTypes.SWITCH_TO_RESULT_ERROR:
			return {
				...state,
				status: 'error',
				error: action.payload,
			}

		case CalcActionTypes.RESET_TO_DATA_INPUT:
			return { ...state, status: 'loading', error: null }

		case CalcActionTypes.RESET_TO_DATA_INPUT_SUCCESS:
			return {
				...state,
				status: 'waiting',
				items: action.payload.items,
				sortedItems: action.payload.items,
				step: action.payload.step,
				summary: 0,
			}

		case CalcActionTypes.RESET_TO_DATA_INPUT_ERROR:
			return {
				...state,
				status: 'error',
				error: action.payload,
			}

		case CalcActionTypes.RESET_TO_NEW_CALCULATION:
			return { ...state, status: 'loading', error: null }

		case CalcActionTypes.RESET_TO_NEW_CALCULATION_SUCCESS:
			return {
				...state,
				status: 'waiting',
				items: action.payload.items,
				sortedItems: action.payload.items,
				step: action.payload.step,
				inputItems: [
					{ key: 'a13key1', value: '' },
					{ key: 'a13key2', value: '' },
				],
				summary: 0,
			}

		case CalcActionTypes.RESET_TO_NEW_CALCULATION_ERROR:
			return {
				...state,
				status: 'error',
				error: action.payload,
			}

		default:
			return state
	}
}
