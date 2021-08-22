import moviesService from "../../../services/movies.service";
import actions from "./movies.actions";

export const fetchMovies = () => (dispatch, getState) => {
    const state = getState();
    const { searchParams } = state.movies;
    searchParams.page = 1;
    dispatch(actions.moviesSearchPage(1));

    dispatch(actions.moviesLoadStart());
    moviesService.getMovies(searchParams)
    .then((response) => {
        if(response.data.Search){
            dispatch(actions.moviesLoadSuccess(response.data.Search))

            if(response.data.Search.length < response.data.totalResults) {
                dispatch(actions.moviesHasMore(true))
            }else{
                dispatch(actions.moviesHasMore(false))
            }
        }else{
            dispatch(actions.moviesLoadError(response.data.Error))
        }
    })
    .catch((err) => dispatch(actions.moviesLoadError(err.message)));
}

export const fetchMoreMovies = () => (dispatch, getState) => {
    const state = getState();
    const { movies, searchParams, searchPage } = state.movies;
    const nextPage = searchPage+1;
    searchParams.page = nextPage;
    dispatch(actions.moviesSearchPage(nextPage));

    dispatch(actions.moviesLoadStart());
    moviesService.getMovies(searchParams)
    .then((response) => {
        if(response.data.Search){
            
            const concat = movies.concat(response.data.Search);
            dispatch(actions.moviesLoadSuccess(concat))

            if(concat.length >= response.data.totalResults) {
                dispatch(actions.moviesHasMore(false))
            }else{
                dispatch(actions.moviesHasMore(true))
            }
        }else{
            dispatch(actions.moviesLoadError(response.data.Error))
        }
    })
    .catch((err) => {
        dispatch(actions.moviesLoadError(err.message))
        dispatch(actions.moviesHasMore(false))
    });
}