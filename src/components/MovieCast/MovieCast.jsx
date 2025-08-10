import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits, getImageUrl } from '../../services/tmdb-api';
import css from './MovieCast.module.css';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieCast = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const data = await getMovieCredits(movieId);
        setCast(data);
      } catch (error) {
        setError('Failed to fetch cast information');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieCast();
  }, [movieId]);

  if (loading) return <p>Loading cast...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (cast.length === 0) return <p>We don't have any cast information for this movie.</p>;

  return (
    <div className={css.container}>
      <ul className={css.list}>
        {cast.slice(0, 20).map(actor => (
          <li key={actor.id} className={css.item}>
            {actor.profile_path ? (
              <img 
                src={getImageUrl(actor.profile_path)} 
                alt={actor.name}
                className={css.photo}
              />
            ) : (
              <div className={css.placeholder}>No photo</div>
            )}
            <div className={css.info}>
              <p className={css.name}>{actor.name}</p>
              <p className={css.character}>Character: {actor.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;