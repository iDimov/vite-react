import React from 'react'
import type { Truck } from '../../types';
import { useSelector } from 'react-redux';
import s from './EquipmentList.module.css'
import EquipmentItem from '../EquipmentItem/EquipmentItem'
import { selectIsLoading } from '../../redux/trucks/selectors';
import Loader from '../Loader/Loader';

type EquipmentListProps = {
  truck?: Truck | null;
}

const EquipmentList: React.FC<EquipmentListProps> = ({ truck }) => {
  const isLoading = useSelector(selectIsLoading);

  if (isLoading) {
    return <div className={s.loading}><Loader size="medium" /></div>;
  }

  if (!truck) {
    return <div className={s.loading}>No truck selected</div>;
  }

  return (
    <ul className={s.list}>
      <EquipmentItem truck={truck} />
    </ul>
  );
};

export default EquipmentList;
