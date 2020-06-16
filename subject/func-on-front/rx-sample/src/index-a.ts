import { from, fromEvent, merge, interval } from 'rxjs';
import { map, throttle } from 'rxjs/operators';

// view module ------------------------------

// let myStream = from(['Hello World!','Hello Again!'])

interface StateType  {
    clicks:any[],
    positions:any[],
}

let globalState:StateType = {
    clicks : [],
    positions:[]
}

let leftButtonStream = 
    fromEvent(document.querySelector('button#left'), 'click')
    .pipe (
        map (x => ({ type : "left" }))
    )
let rightButtonStream = 
    fromEvent(document.querySelector('button#right'), 'click')
    .pipe (
        map (x => ({ type : "right" }))
    )

let mainStream = merge (rightButtonStream, leftButtonStream)

mainStream.subscribe ((e:any) => console.log(e))


let effectOnTheState = (ev:any) => {
    console.log(ev)
    let newState = reducer (globalState, ev)
    globalState = newState

    resetTheView (globalState)
}

mainStream.subscribe(effectOnTheState)

function reducer (state:StateType, action:any):StateType {

    switch(action.type) {
        case "right" : return {
            ...state,
            clicks : [ action.type, ...state.clicks ]
        }
        case "left" : return {
            ...state,
            clicks : [ action.type, ...state.clicks ]
        }
    }
    return globalState
}

function resetTheView (state:StateType):void {


    document.getElementById("list").innerHTML =
        state
            .clicks
            .map(click_ => 
                click_ === 'left'
                ? '<li>click</li>'
                : '<li style="background:#aaf">click</li>'
            )
            .join('')

}
