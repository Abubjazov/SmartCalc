import { combineReducers } from 'redux'
import { authReducer } from './authReducer'
import { calcReducer } from './calcReducer'

export const rootReducer = combineReducers({
	calc: calcReducer,
	auth: authReducer,
})

export type RootState = ReturnType<typeof rootReducer>
