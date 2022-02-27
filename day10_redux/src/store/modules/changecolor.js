//액션 생성
const CHANGE_COLOR  = 'changecolor/CHANGE_COLOR'

//액션내보내기
export const changeColor = ( color )  => ({type:CHANGE_COLOR, color })

//초기값 
const initialState = {
    color:'blue'
}

//리듀서
const reducer  = ( state = initialState , action )  => {
    switch( action.type) {
        case CHANGE_COLOR:
            return {
                color: action.color 
            }
        default:
            return state     
    }
}
export default  reducer