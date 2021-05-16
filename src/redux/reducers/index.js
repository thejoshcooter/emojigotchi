import * as actions from '../actions'

export const initialState = {
    test: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.TEST:
            return { ...state, test: action.payload }
        default:
            return state
    }
}

export default reducer