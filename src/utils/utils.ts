import { nanoid } from 'nanoid'
import { InputItem } from '../interfaces'

export const splitString = (item: string, step: number): string[] => {
	const result: string[] = []

	if (step < 1) return result

	for (let i = 0; i < item.length - step + 1; i++) {
		result.push(item.substring(i, i + step))
	}

	return result
}

export const maskString = (string: string): string => {
	const stringArr = string.split('.')

	return stringArr[0][0] + '***.' + stringArr[1]
}

export const capitalizeFirstLetter = (string: string): string =>
	string.charAt(0).toUpperCase() + string.slice(1)

export const matchCheck = (item: number, value: string): boolean => {
	const stringItem = item.toString()

	return splitString(stringItem, value.length).includes(value)
}

export const createInputItem = (item: number): InputItem => {
	return { key: nanoid(), value: item.toString() }
}

export const maskEmail = (email: string): string => {
	const emailArr = email.toLowerCase().split('@')

	return capitalizeFirstLetter(emailArr[0]) + '@' + maskString(emailArr[1])
}

export const convertArray = (arr: InputItem[]): number[] =>
	arr.map(item => +item.value)

export const checkInputItems = (
	inputItems: { key: string; value: string }[]
): boolean => {
	for (let i = 0; i < inputItems.length; i++) {
		if (inputItems[i].value === '') {
			return true
		}
	}
	return false
}
