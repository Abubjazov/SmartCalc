import { CalcActionTypes } from '../../interfaces'
import { initialState, calcReducer } from './calcReducer'

describe('Reducer: calcReducer', () => {
	test('FETCH_CURRENT_STATE: initiating the fetching of current user data', () => {
		expect(
			calcReducer(initialState, {
				type: CalcActionTypes.FETCH_CURRENT_STATE,
				payload: 'testtoken',
			})
		).toEqual({
			...initialState,
			status: 'loading',
			error: null,
		})
	})

	test('FETCH_CURRENT_STATE_SUCCESS: fetching of current state success', () => {
		expect(
			calcReducer(initialState, {
				type: CalcActionTypes.FETCH_CURRENT_STATE_SUCCESS,
				payload: {
					items: [],
					step: 1,
				},
			})
		).toEqual({
			...initialState,
			status: 'waiting',
			items: [],
			sortedItems: [],
			step: 1,
			inputItems: [
				{ key: 'a13key1', value: '' },
				{ key: 'a13key2', value: '' },
			],
			summary: 0,
		})
	})

	test('FETCH_CURRENT_STATE_ERROR: fetching of current state error', () => {
		expect(
			calcReducer(initialState, {
				type: CalcActionTypes.FETCH_CURRENT_STATE_ERROR,
				payload: 'Test Error string 1*Test Error string 2>>Test Error string 3',
			})
		).toEqual({
			...initialState,
			status: 'error',
			error: 'Test Error string 1*Test Error string 2>>Test Error string 3',
		})
	})

	test('SWITCH_TO_CONFIRM: initiating the switching to confirm user inputed data', () => {
		expect(
			calcReducer(initialState, {
				type: CalcActionTypes.SWITCH_TO_CONFIRM,
				payload: { items: [1, 2, 3], token: 'testtoken' },
			})
		).toEqual({
			...initialState,
			status: 'loading',
			error: null,
		})
	})

	test('SWITCH_TO_CONFIRM_SUCCESS: switching to confirm user inputed data success', () => {
		expect(
			calcReducer(initialState, {
				type: CalcActionTypes.SWITCH_TO_CONFIRM_SUCCESS,
				payload: {
					items: [1, 2, 3],
					step: 2,
				},
			})
		).toEqual({
			...initialState,
			status: 'waiting',
			items: [1, 2, 3],
			sortedItems: [1, 2, 3],
			step: 2,
		})
	})

	test('SWITCH_TO_CONFIRM_ERROR: switching to confirm user inputed data error', () => {
		expect(
			calcReducer(initialState, {
				type: CalcActionTypes.SWITCH_TO_CONFIRM_ERROR,
				payload: 'Test Error string 1*Test Error string 2>>Test Error string 3',
			})
		).toEqual({
			...initialState,
			status: 'error',
			error: 'Test Error string 1*Test Error string 2>>Test Error string 3',
		})
	})

	test('SWITCH_TO_DATAINPUT: initiating the switching to data input', () => {
		expect(
			calcReducer(initialState, {
				type: CalcActionTypes.SWITCH_TO_DATAINPUT,
				payload: 'testtoken',
			})
		).toEqual({
			...initialState,
			status: 'loading',
			error: null,
		})
	})

	test('SWITCH_TO_DATAINPUT_SUCCESS: switching to data input success', () => {
		expect(
			calcReducer(initialState, {
				type: CalcActionTypes.SWITCH_TO_DATAINPUT_SUCCESS,
				payload: {
					items: [],
					step: 1,
				},
			})
		).toEqual({
			...initialState,
			status: 'waiting',
			items: [],
			searchString: '',
			sortedItems: [],
			step: 1,
			inputItems: [
				{ key: 'a13key1', value: '' },
				{ key: 'a13key2', value: '' },
			],
		})
	})

	test('SWITCH_TO_DATAINPUT_ERROR: switching to data input error', () => {
		expect(
			calcReducer(initialState, {
				type: CalcActionTypes.SWITCH_TO_DATAINPUT_ERROR,
				payload: 'Test Error string 1*Test Error string 2>>Test Error string 3',
			})
		).toEqual({
			...initialState,
			status: 'error',
			error: 'Test Error string 1*Test Error string 2>>Test Error string 3',
		})
	})

	test('SWITCH_TO_RESULT: initiating the switching to result', () => {
		expect(
			calcReducer(initialState, {
				type: CalcActionTypes.SWITCH_TO_RESULT,
				payload: 'testtoken',
			})
		).toEqual({
			...initialState,
			status: 'loading',
			error: null,
		})
	})

	test('SWITCH_TO_RESULT_SUCCESS: switching to result success', () => {
		expect(
			calcReducer(initialState, {
				type: CalcActionTypes.SWITCH_TO_RESULT_SUCCESS,
				payload: {
					items: [1, 2, 3],
					step: 4,
					summary: 6,
				},
			})
		).toEqual({
			...initialState,
			status: 'waiting',
			items: [1, 2, 3],
			searchString: '',
			sortedItems: [1, 2, 3],
			step: 4,
			summary: 6,
		})
	})

	test('SWITCH_TO_RESULT_ERROR: switching to result error', () => {
		expect(
			calcReducer(initialState, {
				type: CalcActionTypes.SWITCH_TO_RESULT_ERROR,
				payload: 'Test Error string 1*Test Error string 2>>Test Error string 3',
			})
		).toEqual({
			...initialState,
			status: 'error',
			error: 'Test Error string 1*Test Error string 2>>Test Error string 3',
		})
	})

	test('RESET_TO_DATA_INPUT: initiating the reset to data input', () => {
		expect(
			calcReducer(initialState, {
				type: CalcActionTypes.RESET_TO_DATA_INPUT,
				payload: 'testtoken',
			})
		).toEqual({
			...initialState,
			status: 'loading',
			error: null,
		})
	})

	test('RESET_TO_DATA_INPUT_SUCCESS: reset to data input success', () => {
		expect(
			calcReducer(initialState, {
				type: CalcActionTypes.RESET_TO_DATA_INPUT_SUCCESS,
				payload: {
					items: [1, 2, 3],
					step: 1,
				},
			})
		).toEqual({
			...initialState,
			status: 'waiting',
			items: [1, 2, 3],
			sortedItems: [1, 2, 3],
			step: 1,
			summary: 0,
		})
	})

	test('RESET_TO_DATA_INPUT_ERROR: reset to data input error', () => {
		expect(
			calcReducer(initialState, {
				type: CalcActionTypes.RESET_TO_DATA_INPUT_ERROR,
				payload: 'Test Error string 1*Test Error string 2>>Test Error string 3',
			})
		).toEqual({
			...initialState,
			status: 'error',
			error: 'Test Error string 1*Test Error string 2>>Test Error string 3',
		})
	})

	test('RESET_TO_NEW_CALCULATION: initiating the reset to new calculation', () => {
		expect(
			calcReducer(initialState, {
				type: CalcActionTypes.RESET_TO_NEW_CALCULATION,
				payload: 'testtoken',
			})
		).toEqual({
			...initialState,
			status: 'loading',
			error: null,
		})
	})

	test('RESET_TO_NEW_CALCULATION_SUCCESS: reset to new calculation success', () => {
		expect(
			calcReducer(initialState, {
				type: CalcActionTypes.RESET_TO_NEW_CALCULATION_SUCCESS,
				payload: {
					items: [],
					step: 1,
				},
			})
		).toEqual({
			...initialState,
			status: 'waiting',
			items: [],
			sortedItems: [],
			step: 1,
			inputItems: [
				{ key: 'a13key1', value: '' },
				{ key: 'a13key2', value: '' },
			],
			summary: 0,
		})
	})

	test('RESET_TO_NEW_CALCULATION_ERROR: reset to new calculation error', () => {
		expect(
			calcReducer(initialState, {
				type: CalcActionTypes.RESET_TO_NEW_CALCULATION_ERROR,
				payload: 'Test Error string 1*Test Error string 2>>Test Error string 3',
			})
		).toEqual({
			...initialState,
			status: 'error',
			error: 'Test Error string 1*Test Error string 2>>Test Error string 3',
		})
	})

	test('ADD_INPUT_ITEM: add new input item', () => {
		expect(
			calcReducer(initialState, {
				type: CalcActionTypes.ADD_INPUT_ITEM,
				payload: { key: 'NEWa13key', value: '' },
			})
		).toEqual({
			...initialState,
			inputItems: [...initialState.inputItems, { key: 'NEWa13key', value: '' }],
		})
	})

	test('CHANGE_INPUT_ITEM: not change input item', () => {
		expect(
			calcReducer(initialState, {
				type: CalcActionTypes.CHANGE_INPUT_ITEM,
				payload: { key: 'NEWa13key', value: '13' },
			})
		).toEqual({
			...initialState,
			inputItems: initialState.inputItems.map(item => {
				if (item.key === 'NEWa13key') {
					item.value = '13'
				}
				return item
			}),
		})
	})

	test('CHANGE_INPUT_ITEM: change input item', () => {
		const changeItem = initialState.inputItems[0]

		changeItem.value = '13'

		expect(
			calcReducer(initialState, {
				type: CalcActionTypes.CHANGE_INPUT_ITEM,
				payload: changeItem,
			})
		).toEqual({
			...initialState,
			inputItems: initialState.inputItems.map(item => {
				if (item.key === changeItem.key) {
					item.value = '13'
				}
				return item
			}),
		})
	})
})
