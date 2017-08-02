
export const SHOW_USERS = 'SHOW_USERS'

export const SHOW_USER_DETAILS = 'SHOW_USERS'

export const SELECT_USER = 'SELECT_USER'

export const actionShowUserDetails = () => ({
	type : SHOW_USER_DETAILS
})

export const actionShowUsers = (users) => ({
	type : SHOW_USERS,
	users
})

export const actionSelectUser = (userId) => ({
	type : SELECT_USER,
	userId
})
