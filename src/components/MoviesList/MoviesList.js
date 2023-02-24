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



    console.log(movies)

    return (
        <div>

        </div>
    )
};

export {MoviesList};