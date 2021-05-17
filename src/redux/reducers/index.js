import * as actions from '../actions'
import { DAY, NIGHT } from '../../utils/times'
import { EGG } from '../../utils/statuses'

export const initialState = {
    user: {},
    game: {
        cycle: 0,
        time: DAY,
        status: EGG,
        hunger: 100,
        sleep: 100,
        love: 100
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
        case actions.DECAY_STATS:
            return {
                ...state,
                game: {
                    ...state.game,
                    hunger: action.payload.hunger,
                    sleep: action.payload.sleep,
                    love: action.payload.love
                }
            }
        case actions.UPDATE_STATUS:
            return {
                ...state,
                game: {
                    ...state.game,
                    status: action.payload
                }
            }
        default:
            return state
    }
}

export default reducer