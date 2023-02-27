import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {movieActions} from "../../redux";

const MoviesList = () => {
    const dispatch = useDispatch();
    const {movies} = useSelector(state => state.movies)

    useEffect(() => {
            dispatch(movieActions.getMovies())
        }, [dispatch]
    )

    return (
        <div>
            {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    )
};

export {MoviesList};