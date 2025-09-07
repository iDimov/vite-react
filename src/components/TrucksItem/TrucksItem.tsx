import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { Truck } from '../../types';
import type { AppDispatch, RootState } from '../../redux/store';
import s from './TrucksItem.module.css';
import EquipmentList from '../EquipmentList/EquipmentList';
import Button from '../Button/Button';
import RatingLocation from '../RatingLocation/RatingLocation';
import { toggleFavourite } from '../../redux/favourites/slice';
import { selectIsFavourite } from '../../redux/favourites/selectors';
import clsx from 'clsx';

type TrucksItemProps = {
  truck: Truck;
};

const TrucksItem: React.FC<TrucksItemProps> = ({ truck }) => { 
  const dispatch: AppDispatch = useDispatch();
  const isFavourite = useSelector((state: RootState) => selectIsFavourite(state, truck.id));
  const navigate = useNavigate();

  const handleShowClick = () => {
    navigate(`/catalog/${truck.id}`);
  };
  
  const handleFavouritesClick = () => {
    dispatch(toggleFavourite(truck.id));
  };

  return (
    <li className={s.item}>
      <div className={s.imgContainer}>
        <img className={s.img} src={truck.gallery[0].thumb} alt={`Кемпер ${truck.name}`} />
      </div>
      <div className={s.con}>
        <div className={s.namePrice}>
          <h3>{truck.name}</h3>
          <div className={s.priceCont}>
            <h3>{`€ ${truck.price.toFixed(2)}`}</h3>
            <Button className="favourites" onClick={handleFavouritesClick}>
              <svg
                className={clsx(s.heartIcon, isFavourite ? s.fav : s.notFav)}
                width="25"
                height="24"               
              >
                <use href="/sprite.svg#icon-heart" />
              </svg>
            </Button>
          </div>
        </div>
        <div className={s.descriptionCont}>
          {truck && <RatingLocation truck={truck} />}
          <p className={s.description}>{truck.description}</p>
          <EquipmentList truck={truck} />
          <Button className="showMore" onClick={handleShowClick}>
            Show more
          </Button> 
        </div>
      </div>
    </li>
  );
};

export default TrucksItem;
