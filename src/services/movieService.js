import {apiService} from "./apiService";
import {urls} from "../configs";

const movieService = {
    getMovies: () => apiService.get(urls.movies),
    getGenres: () => apiService.get(urls.genres)
};



export default movieService;