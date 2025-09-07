import React from "react";
import s from './StarRating.module.css'

type StarRatingProps = {
  rating: number;
  maxStars?: number;
};

const StarRating: React.FC<StarRatingProps> = ({ rating, maxStars = 5 }) => {
  const percentage = Math.min((rating / maxStars) * 100, 100);

  return (
    <div className={s.container}>
      <div className={s.starBg}>
        {Array.from({ length: maxStars }, (_, i) => (
          <svg key={`bg-${i}`} width="18" height="18">
            <use href="/sprite.svg#icon-star" />
          </svg>
        ))}
      </div>
      <div className={s.starFill} style={{ width: `${percentage}%` }}>
        {Array.from({ length: maxStars }, (_, i) => (
          <svg key={`fill-${i}`} width="18" height="18">
            <use href="/sprite.svg#icon-star" />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default StarRating;
