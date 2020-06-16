import { fromEvent, merge } from 'rxjs';
import { map } from 'rxjs/operators';


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


mainStream.subscribe(
    (ev:any) => document.getElementById("list").innerHTML += `<li>you clicked on the ${ev.type}</li>`
)

