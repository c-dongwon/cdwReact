const ADD = 'todos/ADD'
const CHANGE_INPUT = 'todos/CHANGE_INPUT'

export const add = (text) => ({type:ADD,text})
export const changeInput = (text) =>({type:CHANGE_INPUT, text})