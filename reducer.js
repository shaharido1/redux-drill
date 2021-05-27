const {ActionsTypes} = require("./actions");
const initState = {
	isButtonBlue : false
}
const reducer = (state = initState, action) => {
	console.log('state', state)
	console.log('action', action)
	switch (action.type) {
		case ActionsTypes.CHANGE_BUTTON_COLOR:
			return {...state, isButtonBlue: !state.isButtonBlue}
    default:
      return state;
	}
 }

module.exports = reducer