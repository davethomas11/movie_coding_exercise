import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {getCoverImageUrl, getThumbnailImageUrl} from "../api/MovieAPI";

const MovieDetails = props => {

  const movie = props.navigation.getParam('movie', {
    title: 'No movie loaded',
  });

  return (
    <View style={styles.details}>
      <View style={styles.coverImageBackground}>
        <Image source={{uri: getCoverImageUrl(movie.backdrop_path)}}
               style={styles.coverImage}/>
      </View>

      <View style={styles.content}>

        <Text style={styles.releaseDate}>Release date: {movie.release_date}</Text>
        <Text style={styles.overview}>{movie.overview}</Text>

      </View>
      <View style={styles.titleArea}>
        <Text style={styles.title}>{movie.title}</Text>
        <Image source={{uri: getThumbnailImageUrl(movie.poster_path)}}
               style={styles.moviePoster}/>
      </View>
    </View>

  )
};

const styles = StyleSheet.create({
  content: {
    padding: 15,
    height: '100%',
    opacity: 0.7,
    backgroundColor: 'black',
  },
  titleArea: {
    padding: 15,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  moviePoster: {
    width: 150,
    height: 200,
  },
  title: {
    color: 'white',
    fontSize: 17,
  },
  releaseDate: {
    marginTop: 300,
    fontSize: 14,
    color: 'white',
    marginBottom: 10,
  },
  coverImageBackground: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  coverImage: {
    flex: 1,
    resizeMode: 'cover',
    width: 500,
    height: 281,
  },
  overview: {
    fontSize: 12,
    color: 'white',
  }
});

export default MovieDetails;
