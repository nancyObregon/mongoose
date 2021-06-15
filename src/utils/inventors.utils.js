export const dates = (list, startDate, endDate) => {
	return list.filter((row) => row.year >= startDate && row.year < endDate)
}

export const names = (list) => list.map(({ first, last }) => `${first} ${last}`)
