import { ADD_SUBSCRIBER,REMOVE_SUBSCRIBER } from "./type"

const initialState = {
    count:350
}

const SubscibersReducer = (state=initialState, action) =>{
    switch(action.type){
        case ADD_SUBSCRIBER:
            return{
                ...state,
                count : state.count +1
            }
        case REMOVE_SUBSCRIBER:
            return{
                ...state,
                count:state.count - 1
            }
        default: return state
    }
}

export default SubscibersReducer;