import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import type { Truck } from '../../types';
import { selectTrucks } from '../trucks/selectors';

export const selectFavourites = (state: RootState) => state.favourites.items;

export const selectIsFavourite = (state: RootState, id: string) =>
  state.favourites.items.includes(id);

export const selectFavouriteTrucks = createSelector(
  [selectTrucks, selectFavourites],
  (allTrucks, favouriteIds): Truck[] => {
    return allTrucks.filter(truck => favouriteIds.includes(truck.id));
  }
);
