//파일명/액션명 => 액션 중복 겹침을 방지
const RED = 'color/RED'
const BLUE = 'color/BLUE'

export const red = () =>({type:RED})
export const blue = () =>({type:BLUE})

const initialState ={
    color:'pink'
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case RED :
            return{
                color: 'red'
            }
        case BLUE :
            return{
                color:'blue'
            }
        default:
            return state
    }
}

export default reducer