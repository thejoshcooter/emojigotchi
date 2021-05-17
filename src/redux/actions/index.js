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
        const DECAY_RATE = 10
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

        if (cycle > 2 && status === 'EGG') {
            dispatch(updateStatus('IDLING'))
        } else if (hunger <= 0 || sleep <= 0 || love <= 0) {
            dispatch(updateStatus('DEAD'))
        }
    }
}