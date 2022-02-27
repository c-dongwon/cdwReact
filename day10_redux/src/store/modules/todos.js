//액션생성
const DEL  = 'todos/DEL'
//수정
const TOGGLE  = 'todos/TOGGLE'
//입력
const CHANGE_INPUT  = 'todos/CHANGE_INPUT'
//추가
const ADD  = 'todos/ADD'


//액션내보내기( 함수 )
export const del = ( id ) => ({type:DEL, id })
export const toggle = ( id ) => ({type:TOGGLE, id })
export const add = ( text ) => ({type:ADD, text })
export const changeInput = ( text ) => ({type:CHANGE_INPUT, text })

//초기값
let no = 5 
const initialState = {
    text:'',
    todos: [
        {id:1, text:'종강입니다.', isChecked:false },
        {id:2, text:'운동하기', isChecked:true },
        {id:3, text:'친구만나기.', isChecked:true },
        {id:4, text:'저녁먹기.', isChecked:false },
    ]
}
//리듀서
const reducer  = ( state = initialState , action ) => {
    switch( action.type ) {
        case DEL:
            return {
                ...state , 
                todos: state.todos.filter( todo => todo.id !== action.id )
            }
        case TOGGLE :
            return {
                ...state ,
                todos: state.todos.map( todo => todo.id === action.id ? { ...todo, isChecked: !todo.isChecked } : todo )
            }   
        case CHANGE_INPUT:
            return {
                ...state ,
                text : action.text 
            }     
        case ADD:
            return {
                ...state ,
                todos: [...state.todos , {id:no++ , text:action.text , isChecked:false }]
            }   
        default:
            return state     
    }
}

export default reducer 