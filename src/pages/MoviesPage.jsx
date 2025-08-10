import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../services/tmdb-api';
import MovieList from '../components/MovieList/MovieList';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  useEffect(() => {
    if (!query) {
      setMovies([]);
      return;
    }

    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const data = await searchMovies(query);
        setMovies(data);
        
        if (data.length === 0) {
          setError('No movies found');
        }
      } catch (error) {
        setError('Failed to search movies');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const searchQuery = form.elements.search.value.trim();
    
    if (!searchQuery) {
      setSearchParams({});
      return;
    }
    
    setSearchParams({ query: searchQuery });
    form.reset();
  };

  return (
    <div className="container">
      <h1 style={{ fontSize: '2.5rem', marginBottom: '30px', textAlign: 'center' }}>
        🎥 Search Movies
      </h1>
      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        gap: '10px',
        maxWidth: '600px',
        margin: '0 auto 40px',
        padding: '20px',
        background: 'var(--bg-primary)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-md)'
      }}>
        <input
          type="text"
          name="search"
          placeholder="Search for a movie..."
          autoComplete="off"
          autoFocus
          style={{
            flex: 1,
            padding: '12px 20px',
            fontSize: '16px',
            border: '2px solid var(--border-color)',
            borderRadius: 'var(--radius)',
            outline: 'none',
            transition: 'border-color 0.3s'
          }}
          onFocus={(e) => e.target.style.borderColor = 'var(--secondary-color)'}
          onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
        />
        <button type="submit" style={{
          padding: '12px 30px',
          fontSize: '16px',
          fontWeight: '600',
          color: 'white',
          background: 'linear-gradient(135deg, var(--secondary-color), var(--accent-color))',
          border: 'none',
          borderRadius: 'var(--radius)',
          cursor: 'pointer',
          transition: 'transform 0.3s, box-shadow 0.3s'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = 'var(--shadow-md)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = 'none';
        }}>
          🔍 Search
        </button>
      </form>
      
      {loading && (
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <div className="spinner"></div>
        </div>
      )}
      {error && (
        <div style={{ 
          color: error === 'No movies found' ? '#ff9800' : '#ff4444',
          background: error === 'No movies found' ? '#fff3e0' : '#ffe6e6',
          padding: '15px',
          borderRadius: 'var(--radius)',
          textAlign: 'center',
          marginBottom: '20px',
          maxWidth: '600px',
          margin: '0 auto 20px'
        }}>
          {error === 'No movies found' ? '🔍 ' + error + '. Try a different search term.' : error}
        </div>
      )}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;