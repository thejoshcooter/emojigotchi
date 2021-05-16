import * as actions from '../actions'
import { DAY, NIGHT } from '../../utils/times'
import { IDLING } from '../../utils/statuses'

export const initialState = {
    user: {},
    game: {
        cycle: 0,
        time: DAY,
        status: IDLING,
        wakeCycle: null,
        sleepCycle: null,
        hungerCycle: null,
        deathCycle: null
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.INCREMENT_CYCLE:
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