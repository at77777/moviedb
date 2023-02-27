import {useSelector} from "react-redux";
import {Outlet} from "react-router-dom";

const MovieDetailsPage = () => {
    const {selectedMovie} = useSelector(state => state.movies);

    return (
        <div>
            {selectedMovie && selectedMovie.id}
        </div>
    )

}

export {MovieDetailsPage};