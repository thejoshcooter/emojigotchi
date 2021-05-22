import * as actions from '../actions'

export const initialState = {
    users: {
        fetching: false,
        data: []
    },
    games: {
        fetching: false,
        data: []
    },
    game: {
        cycle: 0,
        time: 'DAY',
        status: 'EGG',
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
        case actions.USER_ACTION_FEED:
            return {
                ...state,
                game: {
                    ...state.game,
                    hunger: action.payload
                }
            }
        case actions.USER_ACTION_SLEEP:
            return {
                ...state,
                game: {
                    ...state.game,
                    sleep: action.payload
                }
            }
        case actions.USER_ACTION_LOVE:
            return {
                ...state,
                game: {
                    ...state.game,
                    love: action.payload
                }
            }
        case actions.FETCH_USERS_REQUEST:
            return {
                ...state,
                users: {
                    ...state.users,
                    fetching: true
                }
            }
        case actions.FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: {
                    ...state.users,
                    fetching: false,
                    data: action.payload
                }
            }
        case actions.FETCH_ALL_GAMES_REQUEST:
            return {
                ...state,
                games: {
                    ...state.games,
                    fetching: true
                }
            }
        case actions.FETCH_ALL_GAMES_SUCCESS:
            return {
                ...state,
                games: {
                    ...state.games,
                    fetching: false,
                    data: action.payload
                }
            }
        case actions.SAVE_GAME_SUCCESS:
            return {
                ...state,
                games: {
                    ...state.games,
                    data: action.payload
                },
                game: { ...initialState.game }
            }
        default:
            return state
    }
}

export default reducer