import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../redux/store';
import { NavLink, Outlet, useParams } from "react-router-dom";
import { fetchTruckDetails } from "../../redux/trucks/operations";
import clsx from "clsx";
import s from './TrucksDetailsPage.module.css';
import { selectSelectedTruck, selectIsLoading, selectError } from "../../redux/trucks/selectors";
import RatingLocation from "../../components/RatingLocation/RatingLocation";
import TruckOrderForm from "../../components/TruckOrderForm/TruckOrderForm";
import Button from '../../components/Button/Button';
import { toggleFavourite } from '../../redux/favourites/slice';
import { selectIsFavourite } from '../../redux/favourites/selectors';
import Loader from '../../components/Loader/Loader';

interface BuildLinkClassParams {
  isActive: boolean;
}

const buildLinkClass = ({ isActive }: BuildLinkClassParams): string => {
  return clsx(s.link, isActive && s.active);
};

const TrucksDetailsPage: React.FC = () => {
  const { id } = useParams();
  const dispatch: AppDispatch = useDispatch();
  const truck = useSelector(selectSelectedTruck);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  
  const isFavourite = useSelector((state: RootState) =>
    id ? selectIsFavourite(state, id) : false
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchTruckDetails(id));
    }
  }, [dispatch, id]);

  const handleFavouritesClick = (id?: string) => {
    if (!id) return;
    dispatch(toggleFavourite(id));
  };

  if (error) {
    return (
      <div className={s.errorContainer}>
        <p className={s.error}>Error loading truck details: {error}</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className={s.loadingContainer}>
        <Loader size="large" />
      </div>
    );
  }

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <h1 className={s.name}>{truck?.name}</h1>
  
        {truck && <RatingLocation truck={truck} />}
  
        <div className={s.priceCont}>
          <h3 className={s.price}>{truck ? `€ ${truck.price.toFixed(2)}` : ""}</h3>
          <Button className="favourites" onClick={() => handleFavouritesClick(id)}>
            <svg
              className={clsx(s.heartIcon, isFavourite ? s.fav : s.notFav)}
              width="25"
              height="24"               
            >
              <use href="/sprite.svg#icon-heart" />
            </svg>
          </Button>
        </div>
  
        <ul className={s.gallery}>
          {truck?.gallery?.map((imgObj, index) => (
            <li key={index} className={s.galleryItem}>
              <img className={s.img} src={imgObj.original} alt={`Truck image ${index + 1}`} />
            </li>
          ))}
        </ul>
        
        <p className={s.description}>{truck?.description}</p>
  
        <nav className={s.nav}>
          <NavLink to="features" className={buildLinkClass}>
            Features
          </NavLink>
  
          <NavLink to="reviews" className={buildLinkClass}>
            Reviews
          </NavLink>
        </nav>      
  
        <div className={s.featuresReviewsForm}>
          <Outlet />
          <TruckOrderForm />
        </div>
      </div>
    </div>
  );
};

export default TrucksDetailsPage;
