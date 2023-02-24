import {apiService} from "./apiService";
import {urls} from "../configs";

const movieService = {
    getMovies: () => apiService.get(urls.movies.movies)
};



export default movieService;