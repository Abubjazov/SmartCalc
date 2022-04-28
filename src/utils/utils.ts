import { nanoid } from 'nanoid'
import { InputItem } from '../interfaces'

const splitString = (item: string, step: number): string[] => {
	const result: string[] = []

	for (let i = 0; i < item.length - step + 1; i++) {
		result.push(item.substring(i, i + step))
	}

	return result
}

const maskString = (string: string): string => {
	const stringArr = string.split('.')

	return stringArr[0][0] + '***.' + stringArr[1]
}

const capitalizeFirstLetter = (string: string): string =>
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
