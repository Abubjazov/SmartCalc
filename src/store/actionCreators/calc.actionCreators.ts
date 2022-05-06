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
		} catch (error: any) {
			dispatch({
				type: CalcActionTypes.FETCH_CURRENT_STATE_ERROR,
				payload: `Извините, произошла ошибка при попытке загрузки данных пользователя! Попробуйте повторить попытку позже.*Описание ошибки: ${
					error?.message + '>>' + error?.response?.data?.error
				}`,
			})
		}
	}
}

export const switchToConfirm = (items: number[], token: string | null) => {
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
		} catch (error: any) {
			dispatch({
				type: CalcActionTypes.SWITCH_TO_CONFIRM_ERROR,
				payload: `Извините, произошла ошибка при попытке подтверждения данных! Попробуйте повторить попытку позже.*Описание ошибки: ${
					error?.message + '>>' + error?.response?.data?.error
				}`,
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

export const sortItems = () => {
	return async (dispatch: Dispatch<CalcAction>) => {
		dispatch({
			type: CalcActionTypes.SORT_ITEMS,
		})
	}
}

export const searchItems = (searchString: string) => {
	return async (dispatch: Dispatch<CalcAction>) => {
		dispatch({
			type: CalcActionTypes.SEARCH_ITEMS,
			payload: searchString,
		})
	}
}

export const switchToDataInput = (token: string | null) => {
	return async (dispatch: Dispatch<CalcAction>) => {
		try {
			dispatch({
				type: CalcActionTypes.SWITCH_TO_DATAINPUT,
				payload: token,
			})

			const response = await axios.post(
				process.env.REACT_APP_BASE_URL + 'calculations',
				{ step: '2', action_type: 'back' },
				{
					headers: {
						Authorization: `${token}`,
					},
				}
			)

			dispatch({
				type: CalcActionTypes.SWITCH_TO_DATAINPUT_SUCCESS,
				payload: response.data,
			})
		} catch (error: any) {
			dispatch({
				type: CalcActionTypes.SWITCH_TO_DATAINPUT_ERROR,
				payload: `Извините, произошла ошибка при попытке загрузки введённых значений! Попробуйте повторить попытку позже.*Описание ошибки: ${
					error?.message + '>>' + error?.response?.data?.error
				}`,
			})
		}
	}
}

export const switchToResult = (token: string | null) => {
	return async (dispatch: Dispatch<CalcAction>) => {
		try {
			dispatch({
				type: CalcActionTypes.SWITCH_TO_RESULT,
				payload: token,
			})

			const response = await axios.post(
				process.env.REACT_APP_BASE_URL + 'calculations',
				{ step: '2', action_type: 'next' },
				{
					headers: {
						Authorization: `${token}`,
					},
				}
			)

			dispatch({
				type: CalcActionTypes.SWITCH_TO_RESULT_SUCCESS,
				payload: response.data,
			})
		} catch (error: any) {
			dispatch({
				type: CalcActionTypes.SWITCH_TO_RESULT_ERROR,
				payload: `Извините, произошла ошибка при попытке загрузки результатов расчёта! Попробуйте повторить попытку позже.*Описание ошибки: ${
					error?.message + '>>' + error?.response?.data?.error
				}`,
			})
		}
	}
}

export const resetToDataInput = (token: string | null) => {
	return async (dispatch: Dispatch<CalcAction>) => {
		try {
			dispatch({
				type: CalcActionTypes.RESET_TO_DATA_INPUT,
				payload: token,
			})

			const response = await axios.post(
				process.env.REACT_APP_BASE_URL + 'calculations',
				{ step: '4', action_type: 'back' },
				{
					headers: {
						Authorization: `${token}`,
					},
				}
			)

			dispatch({
				type: CalcActionTypes.RESET_TO_DATA_INPUT_SUCCESS,
				payload: response.data,
			})
		} catch (error: any) {
			dispatch({
				type: CalcActionTypes.RESET_TO_DATA_INPUT_ERROR,
				payload: `Извините, произошла ошибка при попытке загрузки введённых значений! Попробуйте повторить попытку позже.*Описание ошибки: ${
					error?.message + '>>' + error?.response?.data?.error
				}`,
			})
		}
	}
}

export const resetToNewCalculation = (token: string | null) => {
	return async (dispatch: Dispatch<CalcAction>) => {
		try {
			dispatch({
				type: CalcActionTypes.RESET_TO_NEW_CALCULATION,
				payload: token,
			})

			const response = await axios.post(
				process.env.REACT_APP_BASE_URL + 'calculations',
				{ step: '4', action_type: 'next' },
				{
					headers: {
						Authorization: `${token}`,
					},
				}
			)

			dispatch({
				type: CalcActionTypes.RESET_TO_NEW_CALCULATION_SUCCESS,
				payload: response.data,
			})
		} catch (error: any) {
			dispatch({
				type: CalcActionTypes.RESET_TO_NEW_CALCULATION_ERROR,
				payload: `Извините, произошла ошибка при попытке удаления данных предыдущего расчёта! Попробуйте повторить попытку позже.*Описание ошибки: ${
					error?.message + '>>' + error?.response?.data?.error
				}`,
			})
		}
	}
}
