//액셩생성 
// '파일명/액션명'  -> 액션 중복 겹침을 방지하기 위해서 파일명/액션명 
// color.js => color/RED , colorbar => colorbar/RED  
const RED = 'color/RED'
const GREEN = 'color/GREEN'
const TOMATO = 'color/TOMATO'

//액션 내보내기 
export const red = () => ({type: RED})
export const green = () => ({type: GREEN})
export const tomato = () => ({type: TOMATO})

//dispatch({type: AAA}) -> dispatch( {type: AAA} => 함수로 내보내기 )

//리듀서 만들기
const initialState = {
    color:'orange'
}

//순수함수
const reducer = ( state = initialState , action )  => {
    switch( action.type ) {
        case RED :
            return {
                color:'red'
            }
        case GREEN:
            return {
                color:'green'
            }  
        case TOMATO: 
            return {
                color:'tomato'
            }
        default:
            return state           
    }
}

export default reducer 