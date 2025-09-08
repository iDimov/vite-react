import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from '../store';
import { selectTrucks } from "../trucks/selectors";
import type { Truck } from "../../types";

export const selectFilters = (state: RootState) => state.filters;
export const selectLocationFilter = (state: RootState): string =>
  state.filters.location;
export const selectFormFilter = (state: RootState): string | null =>
  state.filters.form;
export const selectFeaturesFilter = (state: RootState): string[] =>
  state.filters.features;

export const selectFilteredTrucks = createSelector(
  [selectTrucks, selectLocationFilter, selectFormFilter, selectFeaturesFilter],
  (
    trucks: Truck[] = [],
    locationFilter: string = "",
    formFilter: string | null = null,
    featuresFilter: string[] = []
  ): Truck[] => {
    return trucks.filter((truck) => {
      const matchesLocation = !locationFilter || locationFilter.trim() === "" 
        ? true 
        : truck.location
          ? truck.location.toLowerCase().includes(locationFilter.toLowerCase())
          : false;

      const matchesForm = !formFilter || formFilter === "" 
        ? true 
        : truck.form === formFilter;

      const matchesFeatures = featuresFilter.length === 0 
        ? true
        : featuresFilter.every((feature) => {
            if (feature === "automatic") {
              return truck.transmission === "automatic";
            }
            
            const value = truck[feature as keyof Truck];
            return value === true;
          });

      return matchesLocation && matchesForm && matchesFeatures;
    });
  }
);
