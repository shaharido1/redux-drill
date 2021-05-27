
const defaultEqualFunction = (lastArgument, nextArgument) => {
	return nextArgument.every((arg, index) => lastArgument[index] === arg)
}

const memoFunction = (someFunction, equalFunciton = defaultEqualFunction) => {
	let lastArguments = [];
	let lastValue;
	return (...args) => {
		console.log('current args', args)
		console.log('last args', lastArguments)
		const isArgsEqual = equalFunciton(lastArguments, args);
		console.log('isArgsEqual', isArgsEqual);
		if (!isArgsEqual) {
			console.log('run the function', args)
			const value = someFunction(...args);
			console.log('store the function value and args', value, args)
			lastArguments = args
			lastValue = value
		} 
		return lastValue
	}
}
const testFunction = (someString) => {
	return someString.length
}

const memoizedTest = memoFunction(testFunction);
console.log('start memo')
console.log(memoizedTest('ido')) // run test function - 3
console.log(memoizedTest('itai')) // run test function - 4
console.log(memoizedTest('ido')) // run test function - 3
console.log(memoizedTest('ido')) // 3 !without running test functino