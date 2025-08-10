import { Link, useLocation } from 'react-router-dom';
import { getImageUrl } from '../../services/tmdb-api';
import css from './MovieList.module.css';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <div className={css.grid}>
      {movies.map(movie => (
        <Link
          key={movie.id}
          to={`/movies/${movie.id}`}
          state={{ from: location }}
          className={css.card}
        >
          <div className={css.imageWrapper}>
            {movie.poster_path ? (
              <img
                src={getImageUrl(movie.poster_path)}
                alt={movie.title}
                className={css.poster}
              />
            ) : (
              <div className={css.noPoster}>
                <span>🎬</span>
                <p>No Poster</p>
              </div>
            )}
            <div className={css.rating}>
              ⭐ {movie.vote_average.toFixed(1)}
            </div>
          </div>
          <div className={css.info}>
            <h3 className={css.title}>{movie.title}</h3>
            <p className={css.year}>
              {movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MovieList;