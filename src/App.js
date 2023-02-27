import './App.css';
import {Routes, Route, Navigate} from "react-router-dom";
import {MainLayout} from './layouts'
import {MoviesPage} from "./pages";
import {MovieDetailsPage} from "./pages";
import {useSelector} from "react-redux";

const App = () => {


  return (
      <Routes>
          <Route path={'/'} element={<MainLayout/>}>
              <Route index element={<Navigate to={'movies'}/>}/>
              <Route path={'movies'} element={<MoviesPage/>}/>
              <Route path={'view'} element={<MovieDetailsPage/>}/>


          </Route>
      </Routes>
  );
}

export {App};
