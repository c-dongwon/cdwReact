import { ADD_SUB, REMOVE_SUB } from "./types"

const initialState = {
    count:370
}

const subReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_SUB:
            return{
                ...state,
                count:state.count + 1
            }
        case REMOVE_SUB:
            return{
                ...state,
                count:state.count - 1
            }
        default: return state
    }
}

export default subReducer