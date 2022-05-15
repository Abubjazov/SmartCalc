import axios from 'axios'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { CalcActionTypes } from '../../interfaces'
import {
	addInputItem,
	changeInputItem,
	fetchCurrentState,
	removeInputItem,
	resetToDataInput,
	resetToNewCalculation,
	searchItems,
	sortItems,
	switchToConfirm,
	switchToDataInput,
	switchToResult,
} from './calc.actionCreators'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Action creator: fetchCurrentState', () => {
	test('Fetching: Success', () => {
		mockedAxios.get.mockImplementationOnce(() =>
			Promise.resolve({
				data: {
					items: [1, 2, 3],
					step: 2,
				},
			})
		)

		const expectedActions = [
			{
				type: CalcActionTypes.FETCH_CURRENT_STATE,
				payload: 'testtoken',
			},
			{
				type: CalcActionTypes.FETCH_CURRENT_STATE_SUCCESS,
				payload: {
					items: [1, 2, 3],
					step: 2,
				},
			},
		]

		const store = mockStore({})

		return store.dispatch(fetchCurrentState('testtoken')).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})

	test('Fetching: Error', async () => {
		const errorMessage = 'Network Error'

		mockedAxios.get.mockImplementationOnce(() =>
			Promise.reject(new Error(errorMessage))
		)

		const expectedActions = [
			{
				type: CalcActionTypes.FETCH_CURRENT_STATE,
				payload: 'testtoken',
			},
			{
				type: CalcActionTypes.FETCH_CURRENT_STATE_ERROR,
				payload: `Извините, произошла ошибка при попытке загрузки данных пользователя! Попробуйте повторить попытку позже.*Описание ошибки: ${errorMessage}>>undefined`,
			},
		]

		const store = mockStore({})

		return store.dispatch(fetchCurrentState('testtoken')).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})
})

describe('Action creator: switchToConfirm', () => {
	test('Switching: Success', async () => {
		mockedAxios.post.mockImplementationOnce(() =>
			Promise.resolve({
				data: {
					items: [1, 2, 3],
					step: 2,
				},
			})
		)

		const expectedActions = [
			{
				type: CalcActionTypes.SWITCH_TO_CONFIRM,
				payload: {
					items: [1, 2, 3],
					token: 'testtoken',
				},
			},
			{
				type: CalcActionTypes.SWITCH_TO_CONFIRM_SUCCESS,
				payload: {
					items: [1, 2, 3],
					step: 2,
				},
			},
		]

		const store = mockStore({})

		return store.dispatch(switchToConfirm([1, 2, 3], 'testtoken')).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})

	test('Switching: Error', async () => {
		const errorMessage = 'Network Error'

		mockedAxios.post.mockImplementationOnce(() =>
			Promise.reject(new Error(errorMessage))
		)

		const expectedActions = [
			{
				type: CalcActionTypes.SWITCH_TO_CONFIRM,
				payload: {
					items: [1, 2, 3],
					token: 'testtoken',
				},
			},
			{
				type: CalcActionTypes.SWITCH_TO_CONFIRM_ERROR,
				payload: `Извините, произошла ошибка при переходе к подтверждению данных! Попробуйте повторить попытку позже.*Описание ошибки: ${errorMessage}>>undefined`,
			},
		]

		const store = mockStore({})

		return store.dispatch(switchToConfirm([1, 2, 3], 'testtoken')).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})
})

describe('Action creator: switchToDataInput', () => {
	test('Switching: Success', async () => {
		mockedAxios.post.mockImplementationOnce(() =>
			Promise.resolve({
				data: {
					items: [],
					step: 1,
				},
			})
		)

		const expectedActions = [
			{
				type: CalcActionTypes.SWITCH_TO_DATAINPUT,
				payload: 'testtoken',
			},
			{
				type: CalcActionTypes.SWITCH_TO_DATAINPUT_SUCCESS,
				payload: {
					items: [],
					step: 1,
				},
			},
		]

		const store = mockStore({})

		return store.dispatch(switchToDataInput('testtoken')).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})

	test('Switching: Error', async () => {
		const errorMessage = 'Network Error'

		mockedAxios.post.mockImplementationOnce(() =>
			Promise.reject(new Error(errorMessage))
		)

		const expectedActions = [
			{
				type: CalcActionTypes.SWITCH_TO_DATAINPUT,
				payload: 'testtoken',
			},
			{
				type: CalcActionTypes.SWITCH_TO_DATAINPUT_ERROR,
				payload: `Извините, произошла ошибка при попытке сброса введённых значений! Попробуйте повторить попытку позже.*Описание ошибки: ${errorMessage}>>undefined`,
			},
		]

		const store = mockStore({})

		return store.dispatch(switchToDataInput('testtoken')).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})
})

describe('Action creator: switchToResult', () => {
	test('Switching: Success', async () => {
		mockedAxios.post.mockImplementationOnce(() =>
			Promise.resolve({
				data: {
					items: [1, 2, 3],
					step: 4,
					summary: 6,
				},
			})
		)

		const expectedActions = [
			{
				type: CalcActionTypes.SWITCH_TO_RESULT,
				payload: 'testtoken',
			},
			{
				type: CalcActionTypes.SWITCH_TO_RESULT_SUCCESS,
				payload: {
					items: [1, 2, 3],
					step: 4,
					summary: 6,
				},
			},
		]

		const store = mockStore({})

		return store.dispatch(switchToResult('testtoken')).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})

	test('Switching: Error', async () => {
		const errorMessage = 'Network Error'

		mockedAxios.post.mockImplementationOnce(() =>
			Promise.reject(new Error(errorMessage))
		)

		const expectedActions = [
			{
				type: CalcActionTypes.SWITCH_TO_RESULT,
				payload: 'testtoken',
			},
			{
				type: CalcActionTypes.SWITCH_TO_RESULT_ERROR,
				payload: `Извините, произошла ошибка при попытке загрузки результатов расчёта! Попробуйте повторить попытку позже.*Описание ошибки: ${errorMessage}>>undefined`,
			},
		]

		const store = mockStore({})

		return store.dispatch(switchToResult('testtoken')).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})
})

describe('Action creator: resetToDataInput', () => {
	test('Reset: Success', async () => {
		mockedAxios.post.mockImplementationOnce(() =>
			Promise.resolve({
				data: {
					items: [1, 2, 3],
					step: 1,
				},
			})
		)

		const expectedActions = [
			{
				type: CalcActionTypes.RESET_TO_DATA_INPUT,
				payload: 'testtoken',
			},
			{
				type: CalcActionTypes.RESET_TO_DATA_INPUT_SUCCESS,
				payload: {
					items: [1, 2, 3],
					step: 1,
				},
			},
		]

		const store = mockStore({})

		return store.dispatch(resetToDataInput('testtoken')).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})

	test('Reset: Error', async () => {
		const errorMessage = 'Network Error'

		mockedAxios.post.mockImplementationOnce(() =>
			Promise.reject(new Error(errorMessage))
		)

		const expectedActions = [
			{
				type: CalcActionTypes.RESET_TO_DATA_INPUT,
				payload: 'testtoken',
			},
			{
				type: CalcActionTypes.RESET_TO_DATA_INPUT_ERROR,
				payload: `Извините, произошла ошибка при попытке загрузки введённых значений! Попробуйте повторить попытку позже.*Описание ошибки: ${errorMessage}>>undefined`,
			},
		]

		const store = mockStore({})

		return store.dispatch(resetToDataInput('testtoken')).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})
})

describe('Action creator: resetToNewCalculation', () => {
	test('Reset: Success', async () => {
		mockedAxios.post.mockImplementationOnce(() =>
			Promise.resolve({
				data: {
					items: [],
					step: 1,
				},
			})
		)

		const expectedActions = [
			{
				type: CalcActionTypes.RESET_TO_NEW_CALCULATION,
				payload: 'testtoken',
			},
			{
				type: CalcActionTypes.RESET_TO_NEW_CALCULATION_SUCCESS,
				payload: {
					items: [],
					step: 1,
				},
			},
		]

		const store = mockStore({})

		return store.dispatch(resetToNewCalculation('testtoken')).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})

	test('Reset: Error', async () => {
		const errorMessage = 'Network Error'

		mockedAxios.post.mockImplementationOnce(() =>
			Promise.reject(new Error(errorMessage))
		)

		const expectedActions = [
			{
				type: CalcActionTypes.RESET_TO_NEW_CALCULATION,
				payload: 'testtoken',
			},
			{
				type: CalcActionTypes.RESET_TO_NEW_CALCULATION_ERROR,
				payload: `Извините, произошла ошибка при попытке удаления данных предыдущего расчёта! Попробуйте повторить попытку позже.*Описание ошибки: ${errorMessage}>>undefined`,
			},
		]

		const store = mockStore({})

		return store.dispatch(resetToNewCalculation('testtoken')).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})
})

describe('Action creator: addInputItem', () => {
	test('Add input item', async () => {
		const expectedActions = [
			{
				type: CalcActionTypes.ADD_INPUT_ITEM,
				payload: {
					key: 'testkey13',
					value: '13',
				},
			},
		]

		const store = mockStore({})

		return store
			.dispatch(addInputItem({ key: 'testkey13', value: '13' }))
			.then(() => {
				expect(store.getActions()).toEqual(expectedActions)
			})
	})
})

describe('Action creator: changeInputItem', () => {
	test('Change input item', async () => {
		const expectedActions = [
			{
				type: CalcActionTypes.CHANGE_INPUT_ITEM,
				payload: {
					key: 'testkey13',
					value: '13',
				},
			},
		]

		const store = mockStore({})

		return store.dispatch(changeInputItem('testkey13', '13')).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})
})

describe('Action creator: removeInputItem', () => {
	test('Remove input item', async () => {
		const expectedActions = [
			{
				type: CalcActionTypes.REMOVE_INPUT_ITEM,
				payload: 'testkey13',
			},
		]

		const store = mockStore({})

		return store.dispatch(removeInputItem('testkey13')).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})
})

describe('Action creator: sortItems', () => {
	test('Sort items', async () => {
		const expectedActions = [
			{
				type: CalcActionTypes.SORT_ITEMS,
			},
		]

		const store = mockStore({})

		return store.dispatch(sortItems()).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})
})

describe('Action creator: searchItems', () => {
	test('Search items', async () => {
		const expectedActions = [
			{
				type: CalcActionTypes.SEARCH_ITEMS,
				payload: '13',
			},
		]

		const store = mockStore({})

		return store.dispatch(searchItems('13')).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})
})
