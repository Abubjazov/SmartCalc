import {
	capitalizeFirstLetter,
	checkInputItems,
	convertArray,
	convertAuthData,
	createInputItem,
	maskEmail,
	maskString,
	matchCheck,
	splitString,
} from './utils'

describe('Function: utils/splitString()', () => {
	test('splitString() / split input string by step: 0', () => {
		expect(splitString('TestString', 0)).toEqual([])
	})

	test('splitString() / split input string by step: 1', () => {
		expect(splitString('TestString', 1)).toEqual([
			'T',
			'e',
			's',
			't',
			'S',
			't',
			'r',
			'i',
			'n',
			'g',
		])
	})

	test('splitString() / split input string by step: 2', () => {
		expect(splitString('TestString', 2)).toEqual([
			'Te',
			'es',
			'st',
			'tS',
			'St',
			'tr',
			'ri',
			'in',
			'ng',
		])
	})
})

describe('Function: utils/maskString()', () => {
	test('maskString() / mask input string', () => {
		expect(maskString('test.string')).toEqual('t***.string')
	})
})

describe('Function: utils/capitalizeFirstLetter()', () => {
	test('capitalizeFirstLetter() / capitalize first letter of input string', () => {
		expect(capitalizeFirstLetter('test')).toEqual('Test')
	})
})

describe('Function: utils/matchCheck()', () => {
	test('matchCheck() / check matches in input string', () => {
		expect(matchCheck(123, '3')).toBeTruthy()
		expect(matchCheck(123, '4')).toBeFalsy()
	})
})

describe('Function: utils/createInputItem()', () => {
	test('createInputItem() / create InputItem', () => {
		expect(createInputItem(13).value).toEqual('13')
	})
})

describe('Function: utils/maskEmail()', () => {
	test('maskEmail() / mask input Email', () => {
		expect(maskEmail('test@mailsome.ru')).toEqual('Test@m***.ru')
	})
})

describe('Function: utils/convertArray()', () => {
	test('convertArray() / convert input (InputItem) Array to (Number) Array', () => {
		expect(
			convertArray([
				{ key: 'a13key1', value: '1' },
				{ key: 'a13key2', value: '2' },
				{ key: 'a13key3', value: '3' },
			])
		).toEqual([1, 2, 3])
	})
})

describe('Function: utils/checkInputItems()', () => {
	test('checkInputItems() / check input items', () => {
		expect(
			checkInputItems([
				{ key: 'a13key1', value: '1' },
				{ key: 'a13key2', value: '2' },
				{ key: 'a13key3', value: '' },
			])
		).toBeTruthy()

		expect(
			checkInputItems([
				{ key: 'a13key1', value: '1' },
				{ key: 'a13key2', value: '2' },
				{ key: 'a13key3', value: '3' },
			])
		).toBeFalsy()
	})
})

const userData = '{"token":"testtoken","email":"test@test.com","name":"Victor"}'

describe('Function: utils/convertAuthData()', () => {
	test('convertAuthData() / convert AuthData', () => {
		expect(convertAuthData(userData)).toEqual({
			token: 'testtoken',
			email: 'test@test.com',
			name: 'Victor',
		})
	})
})
