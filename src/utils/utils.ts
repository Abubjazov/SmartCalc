export const matchCheck = (item: number, value: string) => {
	const stringItem = item.toString()

	return splitString(stringItem, value.length).includes(value)
}

const splitString = (item: string, step: number) => {
	const result: string[] = []

	for (let i = 0; i < item.length - step + 1; i++) {
		result.push(item.substring(i, i + step))
	}

	return result
}
