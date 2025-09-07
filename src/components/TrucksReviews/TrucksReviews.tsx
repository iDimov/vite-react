import React from 'react';
import { useSelector } from 'react-redux';
import { selectSelectedTruck } from '../../redux/trucks/selectors';
import s from './TrucksReviews.module.css';
import StarRating from '../StarRating/StarRating';

const TrucksReviews: React.FC = () => {
  const truck = useSelector(selectSelectedTruck);

  if (!truck) {
    return <p>No feedback</p>;
  }

  return (
    <ul className={s.list}>
      {truck.reviews.map((review, idx) => (
          <li key={idx} className={s.item}>
              <div className={s.avatarNameStar}>
                <div className={s.avatar}>
                <h2>{review.reviewer_name.charAt(0).toUpperCase()}</h2>
            </div>
            <div className={s.nameStar}>
              <h2 className={s.name}>{review.reviewer_name}</h2>
              <StarRating rating={review.reviewer_rating} />
            </div>
              </div>
          <p className={s.comment}>{review.comment}</p>
        </li>
      ))}
    </ul>
  );
};

export default TrucksReviews;
