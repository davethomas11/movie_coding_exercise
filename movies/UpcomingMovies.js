import {Component} from "react";
import {getUpcomingMovies} from "../api/MovieAPI";
import {StyleSheet, Text, View} from "react-native";
import MovieList from "./MovieList";
import React from "react";

export default class UpcomingMovies extends Component {
  static navigationOptions = {
    title: 'Upcoming Movies',
  };
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
    this.navigateToMovieDetails = this.navigateToMovieDetails.bind(this);
  }
  componentDidMount() {
    getUpcomingMovies().then(movies => {
      this.setState({ movies });
    });
  }
  navigateToMovieDetails(movie) {
    console.log(movie);
    this.props.navigation.navigate('MovieDetails', { movie });
  }
  render() {
    return (
      <View>
        <MovieList
          movies={this.state.movies}
          onNavigate={this.navigateToMovieDetails}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50,
    backgroundColor: '#667292',
    color: 'white',
    padding: 25,
  },
});