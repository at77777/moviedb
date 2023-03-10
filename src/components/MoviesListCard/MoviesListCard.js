import {useDispatch} from "react-redux";
import {movieActions} from "../../redux";
import {MovieDetailsPage} from "../../pages";
import {Link, Outlet} from "react-router-dom";

const MoviesListCard = ({movie}) => {
    const {id, title} = movie;
    const dispatch = useDispatch();
    const click = () => dispatch(movieActions.setSelectedMovie(movie));

    return (
            <div>

                <Link to={id.toString()} onClick={click}>
                    {title}
                </Link>
            </div>
    )
};

export {MoviesListCard};