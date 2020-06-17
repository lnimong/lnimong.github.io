import { from, fromEvent, merge, interval } from 'rxjs';
import { map, throttle } from 'rxjs/operators';


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
let mousemoveStream = 
    fromEvent(document, 'mousemove')
    .pipe (
        throttle(_ => interval(100)),
        map ((x:MouseEvent) => ({ type : "move", x: x.x, y:x.y }))
    )

let mainStream = merge (rightButtonStream, leftButtonStream, mousemoveStream)

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
        case "move" : return {
            ...state,
            positions : [ { x:action.x, y:action.y }, ...state.positions ].slice(0, 20)
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

    document.getElementById("mousecatcher").innerHTML =
        state
            .positions
            .map(position => 
                `<span style="top:${position.y}px;left:${position.x}px"></span>`
            )
            .join('')
    

}
