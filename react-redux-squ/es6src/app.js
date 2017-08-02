import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose, combineReducers  } from 'redux'

import { Router, hashHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware  } from 'react-router-redux'

import AppRoutes from './approutes'

import activeReducers from './reducers/active'
import svc from './services/all'
import {Logger, ActionRoutes} from './middlewares/all'
import config from './appconfig'
import firstActions from  './firstactions'

let d = (() => {

    class AsyncDispatcher {

        constructor() {
            this.d = {
                dispatch : (() => {})
            }
        }

        Set (dis) {
            if(dis.dispatch) this.d = dis
        }

        get dispatch () {
            return this.d.dispatch
        }
    }

    return new AsyncDispatcher ()
}) ()
 
let { initState, actionsLogs, actionsRoutes } = config

let reducer = 
    (store) => 
        (initState, action) => 
            activeReducers.reduce((state, reducer) => reducer(state, action, store), initState)

let store = createStore(
	combineReducers ({app:reducer(d), routing:routerReducer}), 
    initState, 
    compose (
        applyMiddleware (
            Logger (actionsLogs),
            ActionRoutes (actionsRoutes),
            routerMiddleware(hashHistory)
        ),
        window.devToolsExtension ? window.devToolsExtension() : f => f 
    )
)

d.Set(store)    

const history = syncHistoryWithStore(hashHistory, store)

render(

  <Provider store={store}>
    <Router history={history}>
        {AppRoutes()}
    </Router>
  </Provider>,

  document.getElementById('root')
)

firstActions(d)




