import { New } from '../tools'

import config from '../appconfig'

import { SHOW_USERS, SELECT_USER } from '../actions'

let reducer = (state, action, async_) => {

	if(action.type == SHOW_USERS) {

		return New(state, {

			users : action.users  
		})
	}
	if(action.type == SELECT_USER) {

		return New(state, {

			selectedUser : state.users.find(({id}) => action.userId === id )  
		})
	}

	return state || config.initState
}


export default reducer