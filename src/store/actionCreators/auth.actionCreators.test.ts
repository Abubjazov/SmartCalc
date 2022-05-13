import axios from 'axios'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { AuthActionTypes } from '../../interfaces'
import { clearError, deleteToken, fetchToken } from './auth.actionCreators'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Action creator: fetchToken', () => {
	test('Fetching: Success', async () => {
		mockedAxios.post.mockImplementationOnce(() =>
			Promise.resolve({
				data: { token: 'testtoken', name: 'Adam', email: 'adam@test.com' },
			})
		)

		const expectedActions = [
			{
				type: AuthActionTypes.FETCH_TOKEN,
				payload: { email: 'adam@test.com', password: 'password' },
			},
			{
				type: AuthActionTypes.FETCH_TOKEN_SUCCESS,
				payload: { token: 'testtoken', name: 'Adam', email: 'adam@test.com' },
			},
		]

		const store = mockStore({})

		return store
			.dispatch(fetchToken({ email: 'adam@test.com', password: 'password' }))
			.then(() => {
				expect(store.getActions()).toEqual(expectedActions)
			})
	})

	test('Fetching: Error', async () => {
		const errorMessage = 'Network Error'

		mockedAxios.post.mockImplementationOnce(() =>
			Promise.reject(new Error(errorMessage))
		)

		const expectedActions = [
			{
				type: AuthActionTypes.FETCH_TOKEN,
				payload: { email: 'adam@test.com', password: 'password' },
			},
			{
				type: AuthActionTypes.FETCH_TOKEN_ERROR,
				payload: `Извините, произошла ошибка при попытке аутентификации пользователя! Попробуйте повторить попытку позже.*Описание ошибки: ${errorMessage}>>undefined`,
			},
		]

		const store = mockStore({})

		return store
			.dispatch(fetchToken({ email: 'adam@test.com', password: 'password' }))
			.then(() => {
				expect(store.getActions()).toEqual(expectedActions)
			})
	})
})

describe('Action creator: deleteToken', () => {
	test('Deleting: Success', async () => {
		const expectedActions = [
			{
				type: AuthActionTypes.DELETE_TOKEN,
			},
			{
				type: AuthActionTypes.DELETE_TOKEN_SUCCESS,
			},
		]

		const store = mockStore({})

		return store.dispatch(deleteToken()).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})

	test('Deleting: Error', async () => {
		const errorMessage = 'Token delete Error'

		Storage.prototype.removeItem = jest.fn().mockImplementationOnce(() => {
			throw new Error(errorMessage)
		})

		const expectedActions = [
			{
				type: AuthActionTypes.DELETE_TOKEN,
			},
			{
				type: AuthActionTypes.DELETE_TOKEN_ERROR,
				payload: `Извините, произошла ошибка при попытке удаления токена! Попробуйте повторить попытку.*Описание ошибки: ${errorMessage}>>undefined`,
			},
		]
		const store = mockStore({})
		return store.dispatch(deleteToken()).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})
})

describe('Action creator: clearError', () => {
	test('Clear Error', async () => {
		const expectedActions = [{ type: AuthActionTypes.CLEAR_ERROR }]

		const store = mockStore({})

		return store.dispatch(clearError()).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})
})
