import { AuthActionTypes } from '../../interfaces'
import { initialState, authReducer } from './authReducer'

describe('Reducer: authReducer', () => {
	test('FETCH_TOKEN: initiating the fetching of user token', () => {
		expect(
			authReducer(initialState, {
				type: AuthActionTypes.FETCH_TOKEN,
				payload: {
					email: 'test@test.com',
					password: 'password',
				},
			})
		).toEqual({
			...initialState,
			status: 'loading',
			error: null,
		})
	})

	test('FETCH_TOKEN_SUCCESS: fetching of user token success', () => {
		expect(
			authReducer(initialState, {
				type: AuthActionTypes.FETCH_TOKEN_SUCCESS,
				payload: {
					token: 'testtoken',
					name: 'Name',
					email: 'test@test.com',
				},
			})
		).toEqual({
			...initialState,
			status: 'waiting',
			token: 'testtoken',
			name: 'Name',
			email: 'test@test.com',
		})
	})

	test('FETCH_TOKEN_ERROR: fetching of user token error', () => {
		expect(
			authReducer(initialState, {
				type: AuthActionTypes.FETCH_TOKEN_ERROR,
				payload: 'Test Error string 1*Test Error string 2>>Test Error string 3',
			})
		).toEqual({
			...initialState,
			status: 'error',
			error: 'Test Error string 1*Test Error string 2>>Test Error string 3',
		})
	})

	test('DELETE_TOKEN: initiating the delete of user token', () => {
		expect(
			authReducer(initialState, {
				type: AuthActionTypes.DELETE_TOKEN,
			})
		).toEqual({
			...initialState,
			status: 'loading',
			error: null,
		})
	})

	test('DELETE_TOKEN_SUCCESS: delete of user token success', () => {
		expect(
			authReducer(initialState, {
				type: AuthActionTypes.DELETE_TOKEN_SUCCESS,
			})
		).toEqual({
			...initialState,
			status: 'waiting',
			token: null,
			name: '',
			email: '',
		})
	})

	test('DELETE_TOKEN_ERROR: delete of user token error', () => {
		expect(
			authReducer(initialState, {
				type: AuthActionTypes.DELETE_TOKEN_ERROR,
				payload: 'Test Error string 1*Test Error string 2>>Test Error string 3',
			})
		).toEqual({
			...initialState,
			status: 'error',
			error: 'Test Error string 1*Test Error string 2>>Test Error string 3',
		})
	})

	test('CLEAR_ERROR: clear auth state error', () => {
		expect(
			authReducer(initialState, {
				type: AuthActionTypes.CLEAR_ERROR,
			})
		).toEqual({
			...initialState,
			status: 'waiting',
			error: null,
		})
	})
})
