const reducer = require("./reducer");
const {createStore} = require("./store");
const {changeButtonColorAction} = require("./actions");
const isButtonBlueSelector = (state, params) => state.isButtonBlue;

const renderIdoComp = (isButtonBlue, dispatcher) => {
	console.log('render button', isButtonBlue? 'blue' : 'red');
	setTimeout(() => {
		dispatcher('action', changeButtonColorAction())
	}, 3000);

}
function idoApp() {
	console.log('start ido app')
	const store = createStore(reducer);
	store.stateChannel.on('stateChange', (state) => {
		const renderIdoCompPropse = isButtonBlueSelector(state, 'blabla')
		renderIdoComp(renderIdoCompPropse, store.actionChannel.emit.bind(store.actionChannel))
	})
}


idoApp()