
const defaultEqualFunction = (pre, next) => {
	pre === nex
}

const memoFunction = (someFunction, equalFunciton) => {
	let cache = {}
	return (argument) => {
		if (!cache[argument]) {
			cache[argument] = someFunction(argument);
		}
		return cache[argument]
	}
}
const testFunction = (someString) => {
	console.log('run test function', someString);
	return someString.length
}

const memoizedTest = memoFunction(testFunction);
console.log(memoizedTest('ido')) // run test function - 3
console.log(memoizedTest('itai')) // run test function - 4
console.log(memoizedTest('ido')) // 3 !without running test functino