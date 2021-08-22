import actionTypes from "./movies.actionTypes";

const moviesLoadStart = () => ({
    type: actionTypes.MOVIES_LOAD_START,
});

const moviesLoadSuccess = (movies) => ({
    type: actionTypes.MOVIES_LOAD_SUCCESS,
    payload: movies
});

const moviesLoadError = (errorMessage) => ({
    type: actionTypes.MOVIES_LOAD_ERROR,
    payload: errorMessage
});

const moviesSearchParams = (params) => ({
    type: actionTypes.MOVIES_SEARCH_PARAMS,
    payload: params
});

const moviesHasMore = (hasMore) => ({
    type: actionTypes.MOVIES_HAS_MORE,
    payload: hasMore
});

const moviesSearchPage = (searchPage) => ({
    type: actionTypes.MOVIES_SEARCH_PAGE,
    payload: searchPage
});

const actions = {
    moviesLoadStart,
    moviesLoadSuccess,
    moviesLoadError,
    moviesSearchParams,
    moviesHasMore,
    moviesSearchPage
}

export default actions;