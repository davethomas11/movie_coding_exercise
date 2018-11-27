import React from 'react';
import {FlatList, Text} from 'react-native';
import Movie from './Movie'

const MovieList = (props) => (<FlatList
  data={props.movies}
  renderItem={({ item }) =>
    (<Movie
      title={item.title}
      releaseDate={item.release_date}
      poster={item.poster_path}
      cover={item.backdrop_path}
      onPress={() => props.onNavigate(item)}
    />)
  }
/>);

export default MovieList;