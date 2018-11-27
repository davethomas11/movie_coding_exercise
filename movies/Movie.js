import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {getThumbnailImageUrl, getCoverImageUrl} from '../api/MovieAPI'

const Movie = props => (<TouchableOpacity onPress={props.onPress}>
  <View style={styles.movieContainer}>
    <View style={styles.coverImageBackground}>
      <Image source={{uri: getCoverImageUrl(props.cover)}}
             style={styles.coverImage}/>
    </View>

    <View style={styles.overlay}/>
    <Image source={{uri: getThumbnailImageUrl(props.poster)}}
           style={styles.moviePoster}/>
    <View style={styles.movieDetails}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.releaseDate}>Release Date: {props.releaseDate}</Text>
    </View>
  </View>
</TouchableOpacity>);

const styles = StyleSheet.create({
  movieContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
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
  moviePoster: {
    width: 200,
    height: 300,
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.5,
    backgroundColor: 'black',
    width: '100%',
    height: 70,
  },
  movieDetails: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    padding: 9,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    padding: 3,
    color: 'white',
    marginBottom: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
  },
  releaseDate: {
    color: 'white',
    fontSize: 16,
  }
});

export default Movie