const TEST1 = 'count/TEST1'
const TEST2 = 'count/TEST2'
const TEST3 = 'count/TEST3'

export const test1 = () => ({type:TEST1})
export const test2 = () => ({type:TEST2})
export const test3 = () => ({type:TEST3})

const initialState = {
    num : 1
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case TEST1 :
            return{
                num : state.num + 1
            }
        case TEST2 :
            return{
                num : state.num -1
            }
        case TEST3 :
            return{
                num : 1
            }
        default:
            return state
    }
}

export default reducer  