import axios from 'axios'
import { Dispatch } from 'redux'

import { CalcAction, CalcActionTypes, InputItem } from '../../interfaces'

export const fetchCurrentState = (token: string) => {
	return async (dispatch: Dispatch<CalcAction>) => {
		try {
			dispatch({ type: CalcActionTypes.FETCH_CURRENT_STATE, payload: token })

			const response = await axios.get(
				process.env.REACT_APP_BASE_URL + 'calculations',
				{
					headers: {
						Authorization: `${token}`,
					},
				}
			)

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

export const switchToConfirmAction = (
	items: number[],
	token: string | null
) => {
	return async (dispatch: Dispatch<CalcAction>) => {
		try {
			dispatch({
				type: CalcActionTypes.SWITCH_TO_CONFIRM,
				payload: { items, token },
			})

			const response = await axios.post(
				process.env.REACT_APP_BASE_URL + 'calculations',
				{ items, step: '1', action_type: 'next' },
				{
					headers: {
						Authorization: `${token}`,
					},
				}
			)

			dispatch({
				type: CalcActionTypes.SWITCH_TO_CONFIRM_SUCCESS,
				payload: response.data,
			})
		} catch (error) {
			dispatch({
				type: CalcActionTypes.SWITCH_TO_CONFIRM_ERROR,
				payload: `An error occurred while loading confirm data!*${error}`,
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
