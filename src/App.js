import React, { lazy } from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Suspense } from 'react';
const Home = lazy(() => import('./Components/Home/Home.js'));


const App = () => {
  return (
    <Router>
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