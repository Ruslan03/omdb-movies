import actionTypes from "./movies.actionTypes";
import initialStates from "./movies.initialStates";

const movieReducer = (state = initialStates, {type, payload}) => {
    switch(type) {
        case actionTypes.MOVIES_LOAD_START:
            return {
                ...state,
                isLoading: true,
                errorMessage: null,
            }
        case actionTypes.MOVIES_LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                movies: payload,
            }
        case actionTypes.MOVIES_LOAD_ERROR:
            return {
                ...state,
                isLoading: false,
                errorMessage: payload,
            }
        case actionTypes.MOVIES_SEARCH_PARAMS:
            return {
                ...state,
                searchParams: payload
            }
        case actionTypes.MOVIES_SEARCH_PAGE:
            return {
                ...state,
                searchPage: payload
            }
        case actionTypes.MOVIES_HAS_MORE:
            return {
                ...state,
                hasMore: payload
            }
        default:
            return state;

    }
}

export default movieReducer;