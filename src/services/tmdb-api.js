import axios from 'axios';

// Replace with your TMDB API Read Access Token from https://www.themoviedb.org/settings/api
const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZDk1MDI3M2ZmMzY5NWJkY2UyMTlmYTZiNDc0MWJkZSIsIm5iZiI6MTczMzY1NDQ4OS4wNzksInN1YiI6IjY3NTU3N2Q5MjM3ODQ5NzY3NTc1NjE4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z1zuqOrCEvxQI7cq39NIfe4PolLReH8hnc95zaxg49M';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const options = {
  headers: {
    Authorization: `Bearer ${API_KEY}`
  }
};

export const getTrendingMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?language=en-US`,
    options
  );
  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );
  return response.data.results;
};

export const getMovieDetails = async (movieId) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}?language=en-US`,
    options
  );
  return response.data;
};

export const getMovieCredits = async (movieId) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?language=en-US`,
    options
  );
  return response.data.cast;
};

export const getMovieReviews = async (movieId) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?language=en-US&page=1`,
    options
  );
  return response.data.results;
};

export const getImageUrl = (path) => {
  if (!path) return null;
  return `${IMAGE_BASE_URL}${path}`;
};