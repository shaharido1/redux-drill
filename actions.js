const ActionsTypes = {
	STORE_INIT: 'STORE_INIT',
	CHANGE_BUTTON_COLOR: 'CHANGE_BUTTON_COLOR' 
}

const changeButtonColorAction = () => ({type: ActionsTypes.CHANGE_BUTTON_COLOR})
const storeInit = () => ({type: ActionsTypes.STORE_INIT})

module.exports = {
	ActionsTypes,
	storeInit,
	changeButtonColorAction
}

