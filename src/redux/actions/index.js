// *** TEMPORARY CONSTANTS ***

// STRING NAMES
export const IDLING = 'IDLING'
export const HUNGRY = 'HUNGRY'
export const EATING = 'EATING'
export const POOPING = 'POOPING'
export const CELEBRATING = 'CELEBRATING'
export const SAD = 'SAD'
export const MAD = 'MAD'
export const DEAD = 'DEAD'

// STATUS DURATIONS
export const IDLING_DURATION = 5
export const HUNGRY_DURATION = 5
export const EATING_DURATION = 5
export const POOPING_DURATION = 5
export const CELEBRATING_DURATION = 5
export const SAD_DURATION = 10
export const MAD_DURATION = 10
export const DEAD_DURATION = null

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

export const generateWakeCycle = () => {
    return (dispatch) => {

    }
}

export const BUILD_CYCLE = 'BUILD_CYCLE'
export const buildCycle = () => {
    return (dispatch, getState) => {
        const game = getState().game

        dispatch(incrementCycle())
        console.log(game)
    }
}