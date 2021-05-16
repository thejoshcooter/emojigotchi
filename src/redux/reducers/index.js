import * as actions from '../actions'

export const initialState = {
    user: {},
    game: {
        cycle: 0
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.GENERATE_CYCLE:
            return {
                ...state,
                game: {
                    ...state.game,
                    cycle: action.payload
                }
            }
        default:
            return state
    }
}

export default reducer