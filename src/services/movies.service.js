import apiClient from '../helper/apiClient';

class MoviesService {
    getMovies = (params) => {
        return apiClient(params).get('');
    };

    getMoviesByImdbID = (imdbID) => {
        return apiClient({
            i: imdbID,
            plot: 'full'
        }).get('');
    }
}

export default new MoviesService();