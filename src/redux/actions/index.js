export const TEST = 'TEST'
export const test = () => {
    return (dispatch) => {
        dispatch({ type: TEST, payload: true })
    }
}