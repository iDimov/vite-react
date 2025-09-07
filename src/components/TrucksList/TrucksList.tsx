import React from 'react';
import { useSelector } from 'react-redux';
import s from './TrucksList.module.css';
import TrucksItem from '../TrucksItem/TrucksItem';
import { selectIsLoading, selectError } from '../../redux/trucks/selectors';
import type { Truck } from "../../types";
import NoTrucksFound from '../NoTrucksFound/NoTrucksFound';
import Loader from '../Loader/Loader';

type TrucksListProps = {
  trucks: Truck[];
};

const TrucksList: React.FC<TrucksListProps> = ({ trucks }) => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  if (error) {
    return (
      <div className={s.error}>
        <p>Error loading trucks: {error}</p>
      </div>
    );
  }

  if (isLoading) {
    return <div className={s.loading}><Loader size="large" /></div>;
  }

  if (!Array.isArray(trucks) || trucks.length === 0) {
    return <NoTrucksFound/>;
  }
  
  return (
    <>
      <ul className={s.list}>
        {trucks.map((truck) => (
          <TrucksItem key={truck.id} truck={truck} />
        ))}
      </ul>
    </>
  );
};

export default TrucksList;
