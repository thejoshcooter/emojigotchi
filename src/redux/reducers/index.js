import * as actions from '../actions'
import { DAY, NIGHT } from '../../utils/times'
import { IDLING } from '../../utils/statuses'

export const initialState = {
    user: {},
    game: {
        cycle: 0,
        time: DAY,
        status: {
            current: IDLING,
            expiresIn: null
        }
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