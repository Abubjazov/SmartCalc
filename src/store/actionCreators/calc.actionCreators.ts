import axios from 'axios'
import { Dispatch } from 'redux'

import { CalcAction, CalcActionTypes, InputItem } from '../../interfaces'

export const fetchCurrentState = () => {
	return async (dispatch: Dispatch<CalcAction>) => {
		try {
			dispatch({ type: CalcActionTypes.FETCH_CURRENT_STATE })

			const response = await axios.get(process.env.REACT_APP_BASE_URL + '')

			dispatch({
				type: CalcActionTypes.FETCH_CURRENT_STATE_SUCCESS,
				payload: response.data,
			})
		} catch (error) {
			dispatch({
				type: CalcActionTypes.FETCH_CURRENT_STATE_ERROR,
				payload: `An error occurred while loading the user data!*${error}`,
			})
		}
	}
}

export const addInputItem = (item: InputItem) => {
	return async (dispatch: Dispatch<CalcAction>) => {
		dispatch({
			type: CalcActionTypes.ADD_INPUT_ITEM,
			payload: item,
		})
	}
}

export const changeInputItem = (key: string, value: string) => {
	return async (dispatch: Dispatch<CalcAction>) => {
		dispatch({
			type: CalcActionTypes.CHANGE_INPUT_ITEM,
			payload: { key, value },
		})
	}
}

export const removeInputItem = (itemKey: string) => {
	return async (dispatch: Dispatch<CalcAction>) => {
		dispatch({
			type: CalcActionTypes.REMOVE_INPUT_ITEM,
			payload: itemKey,
		})
	}
}
