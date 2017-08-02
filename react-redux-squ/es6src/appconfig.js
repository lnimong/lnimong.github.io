import {SHOW_USERS, SELECT_USER} from './actions'

export default {

    initState : {
        app : {
            users : [],
            selectedUser:{}
        }
    },

    // actionsLogs : {
    //     logUrl:'/api/logs/track',
    //     throttleOn : [ ]
    // },

    actionsRoutes : {

        SHOW_USERS : (a,s) => "/",
        
        SELECT_USER : (a,s) => "/"+a.userId,
    }
}