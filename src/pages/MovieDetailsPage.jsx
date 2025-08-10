import { useState, useEffect, useRef, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation, NavLink } from 'react-router-dom';
import { getMovieDetails, getImageUrl } from '../services/tmdb-api';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        setError('Failed to fetch movie details');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (loading) return (
    <div className="container" style={{ textAlign: 'center', padding: '50px' }}>
      <div className="spinner"></div>
    </div>
  );
  
  if (error) return (
    <div className="container">
      <div style={{ 
        color: '#ff4444', 
        background: '#ffe6e6', 
        padding: '15px', 
        borderRadius: 'var(--radius)',
        textAlign: 'center'
      }}>
        {error}
      </div>
    </div>
  );
  
  if (!movie) return null;

  const { title, release_date, vote_average, overview, genres, poster_path, runtime, tagline } = movie;
  const releaseYear = release_date ? new Date(release_date).getFullYear() : '';
  const userScore = Math.round(vote_average * 10);
  const genresList = genres ? genres.map(genre => genre.name).join(' • ') : '';

  return (
    <div className="container">
      <Link to={backLinkRef.current} style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '10px 20px',
        marginBottom: '20px',
        background: 'var(--bg-primary)',
        borderRadius: 'var(--radius)',
        textDecoration: 'none',
        color: 'var(--text-primary)',
        boxShadow: 'var(--shadow-sm)',
        transition: 'all 0.3s'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateX(-5px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateX(0)';
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      }}>
        ← Go back
      </Link>
      
      <div style={{ 
        display: 'flex', 
        gap: '40px',
        background: 'var(--bg-primary)',
        borderRadius: 'var(--radius-lg)',
        padding: '30px',
        boxShadow: 'var(--shadow-lg)',
        marginBottom: '30px'
      }}>
        {poster_path ? (
          <img 
            src={getImageUrl(poster_path)} 
            alt={title}
            style={{ 
              width: '300px',
              height: 'auto',
              borderRadius: 'var(--radius)',
              boxShadow: 'var(--shadow-md)'
            }}
          />
        ) : (
          <div style={{
            width: '300px',
            height: '450px',
            background: 'var(--bg-secondary)',
            borderRadius: 'var(--radius)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-secondary)'
          }}>
            No Poster Available
          </div>
        )}
        
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>
            {title} {releaseYear && <span style={{ fontWeight: '400', color: 'var(--text-secondary)' }}>({releaseYear})</span>}
          </h1>
          
          {tagline && (
            <p style={{ 
              fontStyle: 'italic',
              color: 'var(--text-secondary)',
              marginBottom: '20px',
              fontSize: '1.1rem'
            }}>
              "{tagline}"
            </p>
          )}
          
          <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
            <div style={{
              padding: '10px 20px',
              background: `linear-gradient(135deg, ${userScore >= 70 ? '#4caf50' : userScore >= 50 ? '#ff9800' : '#f44336'}, ${userScore >= 70 ? '#45a049' : userScore >= 50 ? '#ff8c00' : '#da190b'})`,
              borderRadius: 'var(--radius)',
              color: 'white',
              fontWeight: 'bold'
            }}>
              ⭐ {userScore}% Score
            </div>
            {runtime && (
              <div style={{
                padding: '10px 20px',
                background: 'var(--bg-secondary)',
                borderRadius: 'var(--radius)',
                color: 'var(--text-primary)'
              }}>
                ⏱ {runtime} min
              </div>
            )}
          </div>
          
          {genresList && (
            <p style={{ 
              color: 'var(--text-secondary)',
              marginBottom: '20px',
              fontSize: '14px',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              {genresList}
            </p>
          )}
          
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Overview</h2>
          <p style={{ 
            lineHeight: '1.8',
            color: 'var(--text-primary)',
            fontSize: '16px'
          }}>
            {overview || 'No overview available.'}
          </p>
        </div>
      </div>
      
      <div style={{ 
        background: 'var(--bg-primary)',
        borderRadius: 'var(--radius-lg)',
        padding: '20px 30px',
        boxShadow: 'var(--shadow-md)',
        marginBottom: '30px'
      }}>
        <h3 style={{ marginBottom: '15px', color: 'var(--primary-color)' }}>Additional Information</h3>
        <div style={{ display: 'flex', gap: '20px' }}>
          <NavLink to="cast" style={({ isActive }) => ({
            padding: '10px 25px',
            background: isActive ? 'var(--secondary-color)' : 'var(--bg-secondary)',
            color: isActive ? 'white' : 'var(--text-primary)',
            borderRadius: 'var(--radius)',
            textDecoration: 'none',
            fontWeight: '600',
            transition: 'all 0.3s'
          })}>
            👥 Cast
          </NavLink>
          <NavLink to="reviews" style={({ isActive }) => ({
            padding: '10px 25px',
            background: isActive ? 'var(--secondary-color)' : 'var(--bg-secondary)',
            color: isActive ? 'white' : 'var(--text-primary)',
            borderRadius: 'var(--radius)',
            textDecoration: 'none',
            fontWeight: '600',
            transition: 'all 0.3s'
          })}>
            💬 Reviews
          </NavLink>
        </div>
      </div>
      
      <Suspense fallback={
        <div style={{ textAlign: 'center', padding: '30px' }}>
          <div className="spinner"></div>
        </div>
      }>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;