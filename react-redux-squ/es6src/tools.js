import React from 'react'
export const When = (thisIsTrue) => thisIsTrue ? ((comp) => comp()) : (() => {})  

export const New  = (state, diff) => Object.assign({}, state, diff)

export const ForEachIn = (arr) => (arr.map)

export const SelectionClass = (classname, isSelected) => isSelected? (classname + ' c-selected') : classname

export const UseClass = (className) => ({ When : (condition) => condition === true ? className : '' })

export const Limit = (size,text) => text.length > size ? (text.substr(0,size-2) + '...') : text 

//inspired by https://remysharp.com/2010/07/21/throttling-function-calls
export const Throttle = (fn, getarg, threshhold) => {

    threshhold || (threshhold = 300);
    
    let last
    let deferTimer

    return (a) => {

        let now = +new Date
        let txt = getarg (a)

        if (last && now < last + threshhold) {
            // hold on to it
            clearTimeout(deferTimer)

            deferTimer = setTimeout(
            () => {
                last = now
                fn(txt)
            }, threshhold);
        } else {
            last = now
            fn(txt)
        }
    };
}

export const GetJson = url => fetch(url).then(response => response.json())

const Fetch = url => handleError => conf =>

    fetch(url, conf).then( 

        response => {
            
            if(response.ok) return response.json()

            handleError({response, url, type:'request', status : response.status})

            return {
                then : () => {}
            } 
        }
    ).catch (error => {
        
        handleError({error, url, type:'exception'})

        return {
            then : () => {}
        } 
    })

export const PostFile = handleError => (url, file) => {
    
    var data = new FormData()

    data.append('file', file)

    return Fetch (url) (handleError)  ({

        method: 'POST',

        mode: 'cors',
    
        headers: {
    
            'Accept': 'application/json'
        },

        body: data
    })
}

export const Post = handleError => (url, data) => Fetch (url) (handleError)  ({

    method: 'POST',
    
    headers: {
    
        'Accept': 'application/json',
    
        'Content-Type': 'application/json'
    },

    body: JSON.stringify(data)
})
