
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {genreActions} from "../../redux";
import {GenreLibraryItem} from "../GenresLibraryItem/GenreLibraryItem";


const GenreLibrary = () => {

    const {genres} = useSelector(state => state.genres);
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(genreActions.getGenres())
        }, [dispatch]
    )

    // console.log(genres)

    return (
        <div>
            {genres.map(genre => <GenreLibraryItem key={genre.id} genre={genre}/>)}
        </div>
    )
};

export {GenreLibrary};