export const dates = (list, startDate, endDate) => {
	return list.filter((row) => row.year >= startDate && row.year < endDate)
}
