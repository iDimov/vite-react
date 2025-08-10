import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../services/tmdb-api';
import css from './MovieReviews.module.css';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const data = await getMovieReviews(movieId);
        setReviews(data);
      } catch (error) {
        setError('Failed to fetch reviews');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  if (loading) return <p>Loading reviews...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (reviews.length === 0) return <p>We don't have any reviews for this movie.</p>;

  return (
    <div className={css.container}>
      <ul className={css.list}>
        {reviews.map(review => (
          <li key={review.id} className={css.item}>
            <h3 className={css.author}>Author: {review.author}</h3>
            <p className={css.content}>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;