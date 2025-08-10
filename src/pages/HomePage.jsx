import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../services/tmdb-api';
import MovieList from '../components/MovieList/MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const data = await getTrendingMovies();
        setMovies(data);
      } catch (error) {
        setError('Failed to fetch trending movies');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div className="container">
      <h1 style={{ fontSize: '2.5rem', marginBottom: '30px', textAlign: 'center' }}>
        🔥 Trending Today
      </h1>
      {loading && (
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <div className="spinner"></div>
        </div>
      )}
      {error && (
        <div style={{ 
          color: '#ff4444', 
          background: '#ffe6e6', 
          padding: '15px', 
          borderRadius: 'var(--radius)',
          textAlign: 'center',
          marginBottom: '20px'
        }}>
          {error}
        </div>
      )}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default HomePage;