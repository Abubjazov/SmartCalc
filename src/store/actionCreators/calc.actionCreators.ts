import axios from 'axios'
import { Dispatch } from 'redux'

import { CalcAction, CalcActionTypes } from '../../interfaces'

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
