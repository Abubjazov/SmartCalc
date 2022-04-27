import { nanoid } from 'nanoid'
import { CalcAction, CalcActionTypes, CalcState } from '../../interfaces'

// const authData = localStorage.getItem('smartcalc_token')

export const initialState: CalcState = {
	items: [],
	inputItems: [
		{ key: nanoid(), value: '' },
		{ key: nanoid(), value: '' },
	],
	sortedItems: [],
	sortDirection: true,
	searchString: '',
	status: 'waiting',
	step: 1,
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
				step: action.payload.step,
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

		default:
			return state
	}
}
