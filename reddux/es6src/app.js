import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Root from './web-components/root'
import QueryService from './services'
import { OPEN_PUB, CLOSE_PREV, RECEIVE_PUB, RECEIVE_WALL, GET_WALL, SET_USER, getWall } from './actions'
import { New } from './tools'



let async_ = new QueryService ()

let filter = (pubs, query) => pubs

let reducer = (state, action) => {

	if(action.type === OPEN_PUB) {

		async_.GetPublication (action.pub)

		return New (state, {

			wall : New (state.wall, {

				selectedPublication : action.pub
			}),

			preview : (state.preview, {

				isOpen : true,

				waitForData : true,

				publicationContent : null 
			})
		})
	}

	if(action.type === CLOSE_PREV) {

		return New (state, {

			wall : New (state.wall, {
			
				selectedPublication : null
			}),

			preview : (state.preview, {

				isOpen : false,

				waitForData : false,

				publicationContent : null 
			})
		})
	}

	if(action.type === RECEIVE_PUB) {

		return New (state, {

			preview : (state.preview, {

				isOpen : true,

				waitForData : false,

				publicationContent : action.pub 
			})
		})
	}

	if(action.type === RECEIVE_WALL) {

		return New (state, {

			publications: action.publications,

			wall : New (state.wall, {
				
				filteredPublications : action.publications,

				waitForData : false,

				selectedPublication : null
			})
		})
	}

	if(action.type === GET_WALL) {

		async_.GetWall()

		return New (state, {

			wall : New (state.wall, {
				
				waitForData : true,

				selectedPublication : null
			}),

			preview : New (state.preview, {

				isOpen : false,

				displayContent : false,

				publicationContent : null 
			})
		})
	}
/*
	if(action.type === GET_SEARCH) {

		async_.Search(action.query)
		
		return New(state, {

			wall: New(state.wall,{

				filteredPublications : filter(state.publications, action.query)
			})
		})
	}

	if(action.type === RECEIVE_SEARCH) {

		return New (state, {

			wall : New (state.wall, {
				
				waitForData : true,

				selectedPublication : null
			}),

			preview : New (state.preview, {

				isOpen : false,

				displayContent : false,

				publicationContent : null 
			})
		})
	}
*/
	if(action.type == SET_USER) {
		
		return New (state, {

			user : action.user
		})
	}

	return state
}

let initState = {

	user : "lionel",

	searchBox: "",

	publications : [],

	wall : {

		filteredPublications: [],

		waitForData : false,

		selectedPublication : null
	},
	
	preview : {

		isOpen : false,

		waitForData : false,

		publicationContent : null
	},

	searchResults : {

		isOpen: false,

		waitForData: false,

		companies: [],

		morePublications: []
	}
}

let store = createStore(
	reducer,
	initState, 
	window.devToolsExtension && window.devToolsExtension())


async_.SetDispatcher(store)

store.dispatch(getWall())

render(

  <Provider store={store}>
    <Root />
  </Provider>,

  document.getElementById('root')
)
