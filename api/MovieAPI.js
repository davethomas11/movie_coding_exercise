const API_KEY = 'f61828c8cee68870fe97efbca418780b'
const API = 'https://api.themoviedb.org/3'
const IMAGES_URL = 'https://image.tmdb.org/t/p'
const UPCOMING = '/movie/upcoming'

const LIST_THUMB_IMG_WIDTH = 200
const LIST_COVER_IMG_WIDTH = 500

/**
 * Returns the full URL path for a thumbnail to
 * be used in movie list.
 *
 * @param imageFile - Image file path returned from API.
 * @returns {string}
 */
export const getThumbnailImageUrl = imageFile => imageUrlWidth(imageFile, LIST_THUMB_IMG_WIDTH);

/**
 * Returns the full URL path for a cover image to
 * be used in movie list.
 *
 * @param imageFile - Image file path returned from API.
 * @returns {string}
 */
export const getCoverImageUrl = imageFile => imageUrlWidth(imageFile, LIST_COVER_IMG_WIDTH);

/**
 * Returns the URL for an image from the API based on width.
 *
 * @param img - Image path returned from API.
 * @param width - Requested width.
 * @returns {string}
 */
const imageUrlWidth = (img, width) => `${IMAGES_URL}/w${width}${img}`;

/**
 * Returns list of upcoming movies from the API.
 *
 * @returns {PromiseLike<T | never> | Promise<T | never>}
 */
export const getUpcomingMovies = () => request(UPCOMING)
  .then(response => response.json())
  .then(json => json.results.map(movie => ({...movie, key: movie.id.toString()})));

/**
 * Makes a fetch request to the API.
 *
 * @param path - Path to request from
 * @returns {Promise<Response>}
 */
const request = path => fetch(`${API}${path}?api_key=${API_KEY}`);

