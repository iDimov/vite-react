import React from "react";
import s from "./RatingLocation.module.css";
import type { Truck } from "../../types";

type RatingLocationProps = {
  truck: Truck;
}

const RatingLocation: React.FC<RatingLocationProps> = ({ truck }) => {
  return (
    <ul className={s.ratingLoc}>
              <li className={s.item}>
              <svg className={s.iconStar} width="18" height="18" fill="currentColor">
        <use href="/sprite.svg#icon-star" />
                </svg>{`${truck.rating}(${truck.reviews.length}Revievs)`}
            </li>
            <li className={s.item}>
                <svg width="18" height="18" fill="currentColor">
        <use href="/sprite.svg#icon-map" />
                </svg>{truck.location}
              </li>
          </ul>
  );
};

export default RatingLocation;
