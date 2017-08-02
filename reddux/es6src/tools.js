export const If = (thisIsTrue) => thisIsTrue ? ((comp) => comp()) : (() => "")  

export const New  = (state, diff) => Object.assign({}, state, diff)