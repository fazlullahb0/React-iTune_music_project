import * as itunesSearchActions from "./actions"

const initialState = {
    results: []
}

const itunesSearchReducer = (state = initialState, action) => {
    switch(action.type) {
        case itunesSearchActions.SET_ITUNES_SEARCH_RESULTS: 
            return {
                ...state,
                results: action.results
            }
        default:
            return state
    }
}

export default itunesSearchReducer