/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import UpcomingMovies from "./movies/UpcomingMovies";
import MovieDetails from "./movieDetails/MovieDetails";

const App = createStackNavigator({
  Home: {screen: UpcomingMovies},
  MovieDetails: {screen: MovieDetails},
});

export default createAppContainer(App);
