import React from 'react';
import type { Truck } from '../../types';
import { equipmentData } from '../../constants';
import s from './EquipmentItem.module.css';

type EquipmentItemProps = {
  truck: Truck;
}

const EquipmentItem: React.FC<EquipmentItemProps> = ({ truck }) => {
  return (
    <>
      {Object.entries(equipmentData).map(([key, { icon, label, type }]) => {
        
        const value = (truck as Record<string, unknown>)[key];

        if (type === 'boolean') {
          if (value !== true) return null;
          return (
            <li key={key} className={s.item}>
              <svg width="16" height="16" fill="currentColor">
                <use href={`/sprite.svg#${icon}`} />
              </svg>
              {label}
            </li>
          );
        }

        if (type === 'string') {
          if (typeof value !== 'string' || value === '') return null;
          return (
            <li key={key} className={s.item}>
              <svg width="16" height="16" fill="currentColor">
                <use href={`/sprite.svg#${icon}`} />
              </svg>
              {value}
            </li>
          );
        }

        return null;
      })}
    </>
  );
};

export default EquipmentItem;
