import {Throttle, Post, New} from '../tools'

import {  push  } from 'react-router-redux'

export const ActionRoutes = routeConf =>  ({getState, dispatch}) => next => action => {

    let result = next(action)

    if(routeConf.hasOwnProperty(action.type)) {
        
        dispatch(push(routeConf[action.type] (action, getState().all) ))
    } 

    return result
}

let noError = err =>  {}
 
export const  Logger = (config) => { 
    
    if(!config) return () => next => action => next(action) 

    let {throttleOn, logUrl} = config

    if(!logUrl) return () => next => action => next(action) 

    let log = action => Post (noError) (logUrl, action)

    let throttleLog = Throttle (log, a => New(a,{}))

    return  ({ getState }) => next => action => {

        if (throttleOn.find( item => item ===  action.type)) {

            throttleLog (action)
        }
        else {

            log (action)
        }

        // Call the next dispatch method in the middleware chain.
        let returnValue = next(action)

        // This will likely be the action itself, unless
        // a middleware further in chain changed it.
        return returnValue
    }
}
