import {useSelector} from "react-redux";
import {Outlet, useParams} from "react-router-dom";

const MovieDetailsPage = () => {
    const {movieId} = useParams();
    const {selectedMovie} = useSelector(state => state.movies);

    return (
        <div>
            {selectedMovie.id}
        </div>
    )

}

export {MovieDetailsPage};