import React from 'react'
import { useSelector} from 'react-redux';
import TrucksList from '../../components/TrucksList/TrucksList';
import s from './FavouritesPage.module.css'
import { selectFavouriteTrucks } from '../../redux/favourites/selectors';

const FavouritesPage: React.FC = () => {
    const favouriteTrucks = useSelector(selectFavouriteTrucks);
    
  return (
      <div className={s.container}>
          <TrucksList trucks={favouriteTrucks} />
    </div>
  )
}

export default FavouritesPage