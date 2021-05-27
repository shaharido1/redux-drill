
const defaultEqualFunction = (lastArgument, nextArgument) => {
	return lastArgument === nextArgument
}

const createSelector = (inputSelectors, currentSelector, equalFunciton = defaultEqualFunction) => {
	let lastSelectorValues = [];
	let currentSelectorLastValue;
	return (...args) => {
		const currentValues = inputSelectors.map(selector => selector(...args));
		const isInputSelectorsAreEqual = currentValues.every((selectorValue, index) => {
			return defaultEqualFunction(lastSelectorValues[index], selectorValue)
		});
		if (!isInputSelectorsAreEqual) {
			lastSelectorValues = currentValues;
			const value = currentSelector(currentValues);
			currentSelectorLastValue = value
		} 
		return currentSelectorLastValue
	}
}

const state = {
	name: 'ido',
	counter: 4,
	itemList: [
		{id: 1, category: 'red'},
		{id: 2, category: 'red'},
		{id: 3, category: 'blue'},
		{id: 4, category: 'red'},
		{id: 5, category: 'red'},
		{id: 6, category: 'red'},
		{id: 7, category: 'blue'},
		{id: 8, category: 'blue'},
	]
};
const nameSelector = (state) => state.name
const counterSelector = (state) => state.counter
const itemListSelector = (state) => state.itemList
const filteredListSelector = (state) => {
	console.log('run filteredListSelector')
	const itemList = itemListSelector(state);
	const counter = counterSelector(state);
	return itemList.filter((item) => item.id > counter)
}
const filteredListSelectorMemo = createSelector(
	[counterSelector, itemListSelector],
	([counter, itemList]) => {
		console.log('run filteredListSelectorMemo');
		return itemList.filter((item) => item.id > counter)
	}
)
filteredListSelector(state) // run filteredListSelector
filteredListSelector(state) // run filteredListSelector
filteredListSelectorMemo(state) // run filteredListSelectorMemo
filteredListSelectorMemo(state) // nothing.

//////////////////
const categorySelector = (state, props) =>  props.category
const itemByCategorySelector = createSelector(
	[itemListSelector, categorySelector], 
	([items, category]) => {
		console.log('run', category)
		items.filter(item => item.category === category)
	}
)
itemByCategorySelector(state, {category: 'blue'}) // run blue
itemByCategorySelector(state, {category: 'red'}) // run red
itemByCategorySelector(state, {category: 'blue'}) // run blue again

const createSelectorByCategory = () => createSelector(
	[itemListSelector, categorySelector], 
	([items, category]) => {
		console.log('run', category)
		items.filter(item => item.category === category)
	}
)

const blueSelector = createSelectorByCategory()
const redSelector = createSelectorByCategory()
console.log('with memoize params')
blueSelector(state, {category: 'red'})
redSelector(state, {category: 'blue'}) 
blueSelector(state, {category: 'red'})
blueSelector(state, {category: 'red'})
redSelector(state, {category: 'blue'}) // ): 
redSelector(state, {category: 'blue'}) // ): 
