import {
    EGG,
    HATCHING
} from '../../utils/statuses'

// *** TEMPORARY CONSTANTS ***



// HELPERS


// *** TEMPORARY CONSTANTS ***

export const INCREMENT_CYCLE = 'INCREMENT_CYCLE'
export const incrementCycle = () => {
    return (dispatch, getState) => {
        let cycle = getState().game.cycle
        cycle = cycle + 1

        dispatch({ type: INCREMENT_CYCLE, payload: cycle })
    }
}

export const GET_NEXT_HATCH_CYCLE = 'GET_NEXT_HATCH_CYCLE'
export const getNextHatchCycle = (cycle) => {
    return (dispatch) => {
        let target = cycle + 5
        dispatch({ type: GET_NEXT_HATCH_CYCLE, payload: target })
    }
}

export const UPDATE_STATUS_TO_HATCHING = 'UPDATE_STATUS_TO_HATCHING'
export const updateStatusToHatching = () => {
    return (dispatch) => {
        dispatch({ type: UPDATE_STATUS_TO_HATCHING, payload: 'HATCHING' })
    }
}

export const UPDATE_STATUS_TO_IDLING = 'UPDATE_STATUS_TO_IDLING'
export const updateStatusToIdling = () => {
    return (dispatch) => {
        dispatch({ type: UPDATE_STATUS_TO_IDLING, payload: 'IDLING' })
    }
}

export const GET_NEXT_HUNGER_TIME = 'GET_NEXT_HUNGER_TIME'
export const getNextHungerTime = (cycle) => {
    return (dispatch) => {
        let target = cycle + 5
        dispatch({ type: GET_NEXT_HUNGER_TIME, payload: target })
    }
}

export const UPDATE_STATUS_TO_HUNGRY = 'UPDATE_STATUS_TO_HUNGRY'
export const updateStatusToHungry = () => {
    return (dispatch) => {
        dispatch({ type: UPDATE_STATUS_TO_HUNGRY, payload: 'HUNGRY' })
    }
}

export const BUILD_CYCLE = 'BUILD_CYCLE'
export const buildCycle = () => {
    return (dispatch, getState) => {
        const game = getState().game
        
        dispatch(incrementCycle())

        if (game.status === 'EGG' && game.hatchCycle === null) {
            dispatch(getNextHatchCycle(game.cycle))
        } else if (game.cycle === game.hatchCycle) {
            dispatch(updateStatusToHatching())
        } else if (game.cycle > game.hatchCycle + 3 && game.status === 'HATCHING') {
            dispatch(updateStatusToIdling())
        } else if (game.status === 'IDLING' && game.hungerCycle === null) {
            dispatch(getNextHungerTime(game.cycle))
        } else if (game.cycle === game.hungerCycle) {
            dispatch(updateStatusToHungry())
        }
    }
}