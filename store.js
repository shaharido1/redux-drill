const EventEmitter = require("events");
const {storeInit} = require("./actions");

let actionChannel;
let stateChannel;

const createStore = (reducer) => {
	actionChannel = new EventEmitter();
	stateChannel = new EventEmitter();
	let state;
	actionChannel.on('action', action => {
		state = reducer(state, action);
		stateChannel.emit('stateChange', state)
	});
	setTimeout(() => {
		actionChannel.emit('action', storeInit())
	}, 300)
	return {
		stateChannel,
		actionChannel
	}
}

module.exports = {
	createStore,
	actionChannel,
	stateChannel
}