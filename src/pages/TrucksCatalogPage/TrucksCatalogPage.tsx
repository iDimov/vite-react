import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TrucksList from '../../components/TrucksList/TrucksList';
import s from './TrucksCatalogPage.module.css';
import FilterPanel from '../../components/FilterPanel/FilterPanel';
import { selectFilteredTrucks } from '../../redux/filters/selectors';
import type { RootState } from '../../redux/store';
import { incrementVisibleCount } from '../../redux/pagination/slice';
import Button from '../../components/Button/Button';
import Loader from '../../components/Loader/Loader';
import { ITEMS_INCREMENT } from '../../constants';

const TrucksCatalogPage: React.FC = () => {
  const dispatch = useDispatch();
  const filteredTrucks = useSelector(selectFilteredTrucks);
  const visibleCount = useSelector((state: RootState) => state.pagination.visibleCount);  
  const visibleTrucks = filteredTrucks.slice(0, visibleCount);
  const [isSearching, setIsSearching] = useState(false);

  const handleLoadMore = () => {
    dispatch(incrementVisibleCount(ITEMS_INCREMENT));
    setIsSearching(true);

    setTimeout(() => {
      setIsSearching(false);

      window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth',
      });
    }, 1000);
  };

  return (
    <div className={s.container}>
      <div className={s.truckContainer}>
        <FilterPanel />
        <TrucksList trucks={visibleTrucks} />
  
      </div>
            {visibleCount < filteredTrucks.length && !isSearching && (
              <Button className='loadMore' onClick={handleLoadMore}>
                Load More
              </Button>
      )}
       {isSearching && <Loader size="medium" />}
    </div>
  );
};

export default TrucksCatalogPage;
