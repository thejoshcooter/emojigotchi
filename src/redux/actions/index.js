export const GENERATE_CYCLE = 'GENERATE_CYCLE'
export const generateCycle = () => {
    return (dispatch, getState) => {
        let cycle = getState().game.cycle
        cycle = cycle + 1

        dispatch({ type: GENERATE_CYCLE, payload: cycle })
    }
}