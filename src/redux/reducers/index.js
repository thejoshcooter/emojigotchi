import * as actions from '../actions'
import { DAY, NIGHT } from '../../utils/times'
import { EGG } from '../../utils/statuses'

export const initialState = {
    user: {},
    game: {
        cycle: 0,
        time: DAY,
        status: EGG,
        hatchCycle: null,
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
        case actions.GET_NEXT_HATCH_CYCLE:
            return {
                ...state,
                game: {
                    ...state.game,
                    hatchCycle: action.payload
                }
            }
        case actions.UPDATE_STATUS_TO_HATCHING:
            return {
                ...state,
                game: {
                    ...state.game,
                    status: action.payload
                }
            }
        case actions.UPDATE_STATUS_TO_IDLING:
            return {
                ...state,
                game: {
                    ...state.game,
                    status: action.payload
                }
            }
        case actions.GET_NEXT_HUNGER_TIME:
            return {
                ...state,
                game: {
                    ...state.game,
                    hungerCycle: action.payload
                }
            }
        case actions.UPDATE_STATUS_TO_HUNGRY:
            return {
                ...state,
                game: {
                    ...state.game,
                    status: action.payload
                }
            }
        case actions.FEED_PET:
            return {
                ...state,
                game: {
                    ...state.game,
                    hungerCycle: action.payload.target,
                    status: action.payload.status
                }
            }
        default:
            return state
    }
}

export default reducer