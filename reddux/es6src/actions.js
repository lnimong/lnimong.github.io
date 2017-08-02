
export const OPEN_PUB = 'OPEN_PUB'

export const CLOSE_PREV = 'CLOSE_PREV'

export const RECEIVE_PUB = 'RECEIVE_PUB'

export const RECEIVE_WALL = 'RECEIVE_WALL'

export const GET_WALL = 'GET_WALL'

export const SET_USER = 'SET_USER'

export const openPub = (pub) => ({
	type : OPEN_PUB,
	pub
})

export const closePreview = () => ({
	type : CLOSE_PREV
})

export const receivePub = (pub) => ({
	type : RECEIVE_PUB,
	pub
})

export const getWall = () =>({
	type : GET_WALL
})

export const receiveWall = (publications) =>({
	type : RECEIVE_WALL, 
	publications
})

export const setUser = (user) => ({
	type : SET_USER,
	user
})



