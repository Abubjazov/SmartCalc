import { CalcAction, CalcActionTypes, CalcState } from '../../interfaces'

export const initialState: CalcState = {
	items: [],
	inputItems: [],
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

		default:
			return state
	}
}
