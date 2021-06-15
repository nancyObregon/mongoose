// import { fifteen } from './helpers'

import { dates, names } from './utils/inventors.utils'

const inventors = [
	{ first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
	{ first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
	{ first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
	{ first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
	{ first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
	{ first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
	{ first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
	{ first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
	{ first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
	{ first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
	{ first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
	{ first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
]

const inventors = [
	{ first: 'Nancy', last: 'Obregon', year: 1879, passed: 1955 },
	{ first: 'Daniela', last: 'Estrada', year: 1643, passed: 1727 },
	{ first: 'Alex', last: 'Galaz', year: 1564, passed: 1642 },
	{ first: 'Luis', last: 'Curie', year: 1867, passed: 1934 }
]

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const fifteen = inventors.filter((inventor) => inventor.year >= 1500 && inventor.year < 1600)

console.log(fifteen)

const resultFitteen = dates(inventors, 1500, 1600)

console.log(resultFitteen)

// Array.prototype.map()
// 2. Give us an array of the inventor first and last names
// deconstruyendo las propiedades para tener a mismo nivel
const fullNames = inventors.map(({ first, last }) => `${first} ${last}`)
console.log(fullNames)

const fullNames1 = names(inventors)
console.log(fullNames1)

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const totalYears = inventors.reduce((total, inventor) => {
	return total + (inventor.passed - inventor.year)
}, 0)
