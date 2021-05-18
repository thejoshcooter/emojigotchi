import {
    HUNGER_DECAY_RATE,
    FEED_ACTION_RATE,
    SLEEP_DECAY_RATE,
    SLEEP_ACTION_RATE,
    LOVE_DECAY_RATE,
    LOVE_ACTION_RATE,
    EGG,
    HAPPY,
    SAD,
    MAD,
    DEAD
} from '../../utils/constants'


export const INCREMENT_CYCLE = 'INCREMENT_CYCLE'
export const incrementCycle = () => {
    return (dispatch, getState) => {
        let cycle = getState().game.cycle
        cycle = cycle + 1
        dispatch({ type: INCREMENT_CYCLE, payload: cycle })
    }
}

export const UPDATE_STATUS = 'UPDATE_STATUS'
export const updateStatus = (status) => {
    return (dispatch) => {
        dispatch({ type: UPDATE_STATUS, payload: status })
    }
}

export const DECAY_STATS = 'DECAY_STATS'
export const decayStats = () => {
    return (dispatch, getState) => {
        const DECAY_RATE = 2
        let hunger = getState().game.hunger
        let sleep = getState().game.sleep
        let love = getState().game.love

        hunger = hunger <= 0 ? 0 : hunger - DECAY_RATE
        sleep = sleep <= 0 ? 0 : sleep - DECAY_RATE
        love = love <= 0 ? 0 : love - DECAY_RATE


        const payload = { hunger, sleep, love  }

        dispatch({ type: DECAY_STATS, payload: payload })

    }
}

export const USER_ACTION_FEED = 'USER_ACTION_FEED'
export const feed = () => {
    return (dispatch, getState) => {
        let hunger = getState().game.hunger

        if (hunger + FEED_ACTION_RATE > 100) {
            hunger = 100
        } else {
            hunger = hunger + FEED_ACTION_RATE
        }

        dispatch({ type: USER_ACTION_FEED, payload: hunger })
    }
}

export const USER_ACTION_SLEEP = 'USER_ACTION_SLEEP'
export const sleep = () => {
    return (dispatch, getState) => {
        let sleep = getState().game.sleep

        if (sleep + SLEEP_ACTION_RATE > 100) {
            sleep = 100
        } else {
            sleep = sleep + SLEEP_ACTION_RATE
        }

        dispatch({ type: USER_ACTION_SLEEP, payload: sleep })
    }
}

export const USER_ACTION_LOVE = 'USER_ACTION_LOVE'
export const love = () => {
    return (dispatch, getState) => {
        let love = getState().game.love

        if (love + LOVE_ACTION_RATE > 100) {
            love = 100
        } else {
            love = love + LOVE_ACTION_RATE
        }

        dispatch({ type: USER_ACTION_LOVE, payload: love })
    }
}

export const BUILD_CYCLE = 'BUILD_CYCLE'
export const buildCycle = () => {
    return (dispatch, getState) => {
        const cycle = getState().game.cycle
        const status = getState().game.status
        const hunger = getState().game.hunger
        const sleep = getState().game.sleep
        const love = getState().game.love
        
        dispatch(incrementCycle())
        dispatch(decayStats())

        if (cycle > 2 && status === EGG) {
            dispatch(updateStatus(HAPPY))
        } else if (hunger <= 0 || sleep <= 0 || love <= 0) {
            dispatch(updateStatus(DEAD))
        } else if ((hunger < 50 && hunger > 25) || (sleep < 50 && sleep > 25) || (love < 50 && love > 25)) {
            dispatch(updateStatus(SAD))
        } else if ((hunger < 25 && hunger > 0) || (sleep < 25 && sleep > 0) || (love < 25 && love > 0)) {
            dispatch(updateStatus(MAD))
        }
    }
}