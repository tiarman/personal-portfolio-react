import React, { lazy } from 'react';
// import Preloader from './Components/Preloader/Preloader';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Suspense } from 'react';
const Home = lazy(() => import('./Components/Home/Home.js'));



// window.addEventListener('load', function () {
//   document.querySelector('.preloader-container').style.opacity = '0';
//   setTimeout(() => {
//     document.querySelector('.preloader-container').style.display = 'none';
//   }, 2000)
// })


const App = () => {
  return (
    <Router>
      {/* <Preloader></Preloader> */}
      <Suspense fallback>
      <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
      </Switch>
      </Suspense>
    </Router>
  );
};

export default App;