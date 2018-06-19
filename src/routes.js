import React from 'react';
import {Route, Switch} from "react-router";
import HomePage from './components/home/HomePage';
import MoviesPage from './components/movies/MoviesPage';
import AboutPage from './components/about/AboutPage';


export default () => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/movies" component={MoviesPage}/>
            <Route path="/about" component={AboutPage}/>
        </Switch>
    );
};