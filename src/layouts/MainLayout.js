import {Outlet} from "react-router-dom";
import {GenreLibrary} from "../components/GenreLibrary/GenreLibrary";

const MainLayout = () => {
    return (
        <div>
            <GenreLibrary/>
            <Outlet/>
        </div>
    )
}

export {MainLayout};